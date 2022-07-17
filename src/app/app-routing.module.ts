import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ForgetPwComponent } from './forget-pw/forget-pw.component';
import { InStoreComponent } from './in-store/in-store.component';
import { LoginComponent } from './login/login.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'order/:itemId', component: OrderPageComponent},
  { path: 'cart', component: CartComponent},
  { path: 'forget-pw', component: ForgetPwComponent},
  { path: 'login', component: LoginComponent},
  { path: 'in-store', component: InStoreComponent},
  { path: 'order-history/:userId', component: OrderHistoryComponent},
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
