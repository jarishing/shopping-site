import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { GetDataService } from '../get-data.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  warming = false;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private getDataService: GetDataService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  get f(): any {
    return this.loginForm.controls;
  }

  toForgetPwd(){
    return this._router.navigate(['/forget-pw']);
  }

  login(){
    if(this.f.username.status == "INVALID" || this.f.password.status == "INVALID")
      return;

    let body = {
      username: this.f.username.value,
      password: this.f.password.value
    };
    
    this.getDataService.login(body)
      .subscribe( 
        result => {
          return this.userService.updateUser(result);
        },
        err => {
          this.loginForm.reset();
          return this.warming = true;
        }
      )
  }

  onTest(){}
}

