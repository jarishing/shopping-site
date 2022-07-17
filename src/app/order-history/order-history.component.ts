import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GetDataService } from '../get-data.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  allOrders = [];
  orders = [];


  constructor(
    private getDataService: GetDataService,
    private _router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(){
    this.getDataService.getAllOrder()
      .subscribe( result => {
        this.allOrders = result;
        this.orders = JSON.parse(JSON.stringify(this.allOrders.filter( order => order.order_made_user_id == this.userService.id )));
      })
  }

  onTest(){
    console.log(this.orders);
  }

  onBackHome(){
    return this._router.navigate(['/home']);
  }
}
