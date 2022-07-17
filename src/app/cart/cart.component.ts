import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GetDataService } from '../get-data.service';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  paymentMethod = "";

  constructor(
    private _router: Router,
    private getDataService: GetDataService,
    public UserService: UserService,
    public cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.totalCount();
  }

  onChange( field, value ){
    this[field]=value;
  }

  onPayment(){
    if(this.paymentMethod == "" ) return;
    if(this.cartService.cart.length == 0 ) return;
    this.getDataService.postCreateOrder({
      item_selected: this.cartService.cart,
      total_price: this.cartService.total,
      payment_method: this.paymentMethod,
      status: "paid",
      order_made_user_id: this.UserService.id,
      order_date_time: Date.now()
    }).subscribe( result => {
      this.cartService.clearCart();
      return this._router.navigate(['/home']);
    })
  }

  onBackHome(){
    return this._router.navigate(['/home']);
  }
}
