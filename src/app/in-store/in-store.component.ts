import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'; 
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-in-store',
  templateUrl: './in-store.component.html',
  styleUrls: ['./in-store.component.scss']
})
export class InStoreComponent implements OnInit {

  @ViewChild('editItemModal')
  private editItemModal: TemplateRef<any>;

  items= [];
  selectedItem;

  form: FormGroup;

  itemEditForm = this.fb.group({
    item_id: ['', [Validators.required]],
    item_name: ['', [Validators.required]],
    main_category: ['', [Validators.required]],
    desciption: ['', [Validators.required]],
    price: ['', [Validators.required]],
    instore_number: ['', [Validators.required]],
    active_status: [true, [Validators.required]],
  },{})

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private getDataService: GetDataService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.updateAllItem();
  }

  updateAllItem(){
    this.getDataService.getAllItem()
      .subscribe( result => {
        this.items = result;
      })
  }

  editItem(itemId){
    this.selectedItem = this.items.find( item => item.id == itemId );

    this.itemEditForm.patchValue({
      item_id: this.selectedItem.id,
      item_name: this.selectedItem.item_name,
      main_category: this.selectedItem.main_category,
      desciption: this.selectedItem.desciption,
      price: this.selectedItem.price,
      instore_number: this.selectedItem.instore_number,
      active_status: this.selectedItem.active_status
    });

    this.modalService.open(this.editItemModal, {centered: true, size: 'xl'});
  }

  get f(): any{
    return this.itemEditForm.controls;
  }

  onSubmit(){
    this.getDataService.putUpdateItem({
      id: this.f.item_id.value,
      item_name: this.f.item_name.value,
      item_image: this.selectedItem.item_image,
      main_category: this.f.main_category.value,
      desciption: this.f.desciption.value,
      price: this.f.price.value,
      instore_number: this.f.instore_number.value,
      active_status: this.f.active_status.value,
    }, this.selectedItem.id)
      .subscribe( result => {
        this.updateAllItem();
        return this.modalService.dismissAll();
      })
  }

  onBackHome(){
    return this._router.navigate(['/home']);
  }

  onTest(){
    console.log(this.items);
    console.log(this.itemEditForm);
    console.log(this.selectedItem);
  }
}
