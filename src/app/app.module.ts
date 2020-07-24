import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{HttpClient} from'@angular/common/http';
import {FormsModule} from'@angular/forms';
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
  
    //routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



