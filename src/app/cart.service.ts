import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = [];
  total = 0;

  constructor() { }

  addToCart(item){
    this.cart.push(item);
    return this.totalCount();
  };

  removeItemFromCart(itemId){
    if(this.cart.some( item => item.id == itemId))
      this.cart = this.cart.filter( item => item.id !== itemId );
    return this.totalCount();;
  }

  totalCount(){
    this.total = 0;
    return this.cart.map( order => {
      this.total += order.totalPrice;
    })
  }

  clearCart(){
    return this.cart = [];
  }

  updateAmount( btn, itemId ){
    let index = this.cart.map( function(item) { return item.id} ).indexOf( itemId );
    if(index < 0 ) return null;

    if( btn == "minus" ){
      if( this.cart[index].number > 1 )
        this.cart[index].number = this.cart[index].number - 1;
      else
        return this.removeItemFromCart( itemId );
    }else{
      if( this.cart[index].number < 10 ) this.cart[index].number = this.cart[index].number + 1;
    }

    this.cart[index].totalPrice = this.cart[index].number * this.cart[index].price;
    return this.totalCount();
  }
}
