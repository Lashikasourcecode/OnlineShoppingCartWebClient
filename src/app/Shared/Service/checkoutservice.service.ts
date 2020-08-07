import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ProductDetail} from'../product-detail.model';
import { from } from 'rxjs';
import { MessengerService } from './messenger.service';
import{CartItemModel} from'../Model/CartModel/cart-item-model.model';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutserviceService { 


  items : ProductDetail[];

  readonly apiURL ='https://localhost:44351/api'; 
  
  
  

  constructor(public  https:HttpClient,private messervice:MessengerService) { } 

   cartproduct = [];

    products :ProductDetail 

    checoutapi:string="/Checkout/checkproductavailabilty";
     str:string="higjgghjgjglhlkj";
    

    ////item:ProductDetail;
    cartproductList =[];
    
   // cartproductList : any;
    
  //async addtocartdetails():Promise<Array<ProductDetail>>
  //{
   // return  await this.https.get<Array<ProductDetail>>(this.apiURL +'Checkout/checkproductavailabilty')
    //.toPromise();
     
   //}
   

   ////
       postCartDetails(cartproductList)
       {

            return this.https.post(this.apiURL,cartproductList)
        }
   ////
  // postCartDetails(cartproductList:CartItemModel): Observable<any>{
    // console.log(cartproductList);
    // return this.https.post<any>(this.apiURL + checoutapi, cartproductList)

  // }
   
    
   
    prodid:Number
  // addproduct(products){
   //this.messervice.getMsg().subscribe((product:ProductDetail) =>{
   // console.log(product)

    //this.prodid= this.products.CatergoryId
    //// // this.cartproductList= this.addProductToCart(product)
   
   
//})
 

getcartproductservice(item){
  console.log(item);
  
  console.log("hifhkdd");
  
  

}

   }


