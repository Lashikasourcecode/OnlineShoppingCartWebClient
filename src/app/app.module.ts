import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{HttpClient} from'@angular/common/http';
import {FormsModule} from'@angular/forms';
import{ReactiveFormsModule} from'@angular/forms';
import { from } from 'rxjs';


import { AppComponent } from './app.component';
import { ProductDeailsComponent } from './Products/product-deails/product-deails.component';

import { NavComponent } from './ShoppingCart/nav/nav.component';
import { CartComponent } from './ShoppingCart/cart/cart.component';
import { FilterComponent } from './ShoppingCart/filter/filter.component';
import { FooterComponent } from './ShoppingCart/footer/footer.component';
import{ProductDetailListComponent} from'./Products/product-detail-list/product-detail-list.component';

import { ItemcartComponent } from './ShoppingCart/cart/itemcart/itemcart.component';
import { RegistrationComponent } from './registration/registration.component';
import{AppRoutingModule} from'../../src/app/app-routing.module';
import { UserloginComponent } from './Login/userlogin/userlogin.component';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { CheckoutitemComponent } from './ShoppingCart/cart/checkoutitem/checkoutitem.component';
import { JWTIntercepterComponent } from './Login/jwtintercepter/jwtintercepter.component';

import{CheckoutserviceService} from'../../src/app/Shared/Service/checkoutservice.service';
import { CheckoutComponent } from './ShoppingCart/cart/checkout/checkout.component';
import { PaymentComponent } from './ShoppingCart/payment/payment.component';
import { LoginComponent } from './Login/login/login.component';
import { AlertComponent } from './Login/login/alert/alert.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AuthUserLoginComponent } from './Login/auth-user-login/auth-user-login.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductDeailsComponent,
    //ProductDetailListComponent,
    NavComponent,
    CartComponent,
    FilterComponent,
    FooterComponent,
    ProductDetailListComponent,
    ItemcartComponent,
    RegistrationComponent,
    UserloginComponent,
    ProductListComponent,
    CheckoutitemComponent,
    JWTIntercepterComponent,
    CheckoutComponent,
    PaymentComponent,
    LoginComponent,
    AlertComponent,
    OrderDetailsComponent,
    AuthUserLoginComponent,
  
    //routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [CheckoutserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { } 




