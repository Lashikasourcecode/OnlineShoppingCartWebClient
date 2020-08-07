import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{RegistrationComponent} from'../app/registration/registration.component';
import{UserloginComponent} from'../app/Login/userlogin/userlogin.component';
import { from } from 'rxjs';

import { ProductListComponent } from './Products/product-list/product-list.component';
import { ProductDeailsComponent } from './Products/product-deails/product-deails.component';
import { ProductDetailListComponent } from './Products/product-detail-list/product-detail-list.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CheckoutitemComponent } from './ShoppingCart/cart/checkoutitem/checkoutitem.component';



const routes: Routes = [
  {path:'registration', component:RegistrationComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'product-detail-list',component:ProductDetailListComponent},
  {path:'Check-out',component:CheckOutComponent},
  {path:'checkoutitem',component:CheckoutitemComponent},
  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[RegistrationComponent,UserloginComponent,ProductListComponent,
  CheckOutComponent,CheckoutitemComponent]




