import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{RegistrationComponent} from'../app/registration/registration.component';
import{UserloginComponent} from'../app/Login/userlogin/userlogin.component';
import { from } from 'rxjs';

import { ProductListComponent } from './Products/product-list/product-list.component';
import { ProductDeailsComponent } from './Products/product-deails/product-deails.component';
import { ProductDetailListComponent } from './Products/product-detail-list/product-detail-list.component';
import { CheckoutitemComponent } from './ShoppingCart/cart/checkoutitem/checkoutitem.component';
import { LoginComponent } from './Login/login/login.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AuthUserLoginComponent } from './Login/auth-user-login/auth-user-login.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'product-detail-list',component:ProductDetailListComponent},
  {path:'checkoutitem',component:CheckoutitemComponent},
  
  {path:'order-details',component:OrderDetailsComponent},
  {path:'',component:AuthUserLoginComponent},
  //auth-user-login
  
  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[RegistrationComponent,UserloginComponent,ProductListComponent,
  CheckoutitemComponent,LoginComponent,OrderDetailsComponent,]




