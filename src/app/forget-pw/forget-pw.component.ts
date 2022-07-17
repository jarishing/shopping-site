import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-pw',
  templateUrl: './forget-pw.component.html',
  styleUrls: ['./forget-pw.component.scss']
})
export class ForgetPwComponent implements OnInit {

  form: FormGroup;

  forgetPwdForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  warming = false;
  redirect = false;

  constructor(
    private fb: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  get f(): any {
    return this.forgetPwdForm.controls;
  }

  goToLogin(){
    return this._router.navigate(['/login']);
  }

  forgetPassword(){
    if(this.f.email.status == "INVALID" )
      return;

    let body = {
      email:this.f.email.value
    };

    this.redirect = true;
    setTimeout( () => {
      this.goToLogin();
    }, 4000)

  };

}
