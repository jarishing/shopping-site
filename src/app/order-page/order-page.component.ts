import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GetDataService } from '../get-data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  item_id = null;
  item_name = null;
  item_image = null;
  main_category = null;
  desc = null;
  price = null;
  totalPrice = null;
  number = 1;

  constructor(
    private _router: Router,
    private activatedRoute: ActivatedRoute,
    private getDataService: GetDataService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.item_id = this.activatedRoute.snapshot.params['itemId'];
    this.getDataService.getSpecificItem(this.item_id)
      .subscribe( result => {
        this.item_name = result.item_name;
        this.item_image = result.item_image;
        this.main_category = result.main_category;
        this.desc = result.desciption;
        this.price = result.price;
        this.totalPrice = result.price;
      })
  }

  updateAmount( btn ){
    if( btn == "minus" ){
        if( this.number > 1 ) 
        {
          this.number = this.number - 1;
        }
      }else{
        if( this.number < 10 ) {
          this.number = this.number + 1;
        }
      }
    return this.totalPrice = this.price * this.number;
  }

  totalNumber(){

  }

  addToCart(){
    let item ={
      "id": this.item_id,
      "item_name": this.item_name,
      "item_image": this.item_image,
      "price": this.price,
      "totalPrice": this.totalPrice,
      "number": this.number
    };

    this.cartService.addToCart(item);
    return this._router.navigate(['/home']);
  }

  onBackHome(){
    return this._router.navigate(['/home']);
  }
}
