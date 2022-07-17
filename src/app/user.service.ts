import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token=null;
  username=null;
  staff=false;
  id=null;

  constructor( private _router: Router) { }

  updateUser( data ){
    this.token = data.token;
    this.username = data.username;
    this.id = data.user_id;
    this.staff = data.staff;
    return this._router.navigate(['/home']);
  }

  getUserData(){
    return {
      "username": this.username,
      "id": this.id,
      "staff": this.staff
    }
  }

  logOut(){
    this.token = null;
    this.username = null;
    this.id = null;
    return this.staff = false;
  }
}
