import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetPwComponent } from './forget-pw/forget-pw.component';
import { CartComponent } from './cart/cart.component';
import { InStoreComponent } from './in-store/in-store.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './nav/nav.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderHistoryComponent } from './order-history/order-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPwComponent,
    CartComponent,
    InStoreComponent,
    OrderPageComponent,
    HomePageComponent,
    NavComponent,
    SideBarComponent,
    OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
