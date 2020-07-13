import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDeailsComponent } from './Products/product-deails/product-deails.component';
//import { ProductDetailListComponent } from './Products/product-detail-list/product-detail-list.component';
import { NavComponent } from './ShoppingCart/nav/nav.component';
import { CartComponent } from './ShoppingCart/cart/cart.component';
import { FilterComponent } from './ShoppingCart/filter/filter.component';
import { FooterComponent } from './ShoppingCart/footer/footer.component';
import{ProductDetailListComponent} from'./Products/product-detail-list/product-detail-list.component';
//import { HttpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import{HttpClient} from'@angular/common/http';
import { from } from 'rxjs';
import { ItemcartComponent } from './ShoppingCart/cart/itemcart/itemcart.component';

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
    ItemcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
