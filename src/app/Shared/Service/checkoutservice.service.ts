import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ProductDetail} from'../product-detail.model';
import { from } from 'rxjs';
import { MessengerService } from './messenger.service';
import{CartItemModel} from'../Model/CartModel/cart-item-model.model';
import{Observable} from 'rxjs';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import { Console } from 'console';
import{HttpParams} from'@angular/common/http';
import { CartItem } from '../Model/CartModel/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CheckoutserviceService { 

  json;
  items : ProductDetail[];

  readonly apiURL ='https://localhost:44351/api/Checkout/checkproductavailabilty'; 
  
  
  

  constructor(public  https:HttpClient,private messervice:MessengerService) { } 

   cartproduct = [];

    products :ProductDetail 

    
    
    cartproductList =[]; 
    

    //getcartproductListop
    CartItemModel=[];
    public cartlistitem:Array<any>;
    public x :Array<any>; 
     public cartItem : CartItem


    //xxxxxxx
   public aa; 
   public cartList : CartItemModel[];
   public prolist:Array<any>; 

   public cartitemtoCheck = [];

    //send total
   public Total ;

    
          
   
     //////////////

    
   
       postCartDetails(item)
       {
          this.cartitemtoCheck = item;
          
           // return this.https.post(this.apiURL,item);
       } 
    //get valid item from database
    postCartDetailstoCheck1(cartlistitem)
    {
      
      
       return this.https.post<any>(this.apiURL,cartlistitem)
        
          .subscribe(data =>{
           this.x =data 
           this.cartitemtoCheck = data;
           console.log("fgfghfhgfhkk");
            console.log(data)
           console.log(this.cartitemtoCheck)
           
         });

        // return this.https.get<CartItem>(this.apiURL,cartlistitem)
    }

    postCartDetailstoCheck5(cartlistitem) {
      // const url = 'https://jsonplaceholder.typicode.com/posts';
     // let param =  new HttpParams().set("customerid",userid);
       return this.https.get<CartItem>(this.apiURL,cartlistitem)
         .subscribe(data =>{
          console.log("helllow");
          console.log(data);
         });
          // .pipe(
              // map(response => response.map(postData => new CartItem(postData)))
          // );
     
          
     
           
           
     }
///////////////////////////////////////////////////////////
   /** postCartDetailstoCheck2(cartlistitem):Observable<any>
    {
      // this.cartitemtoCheck = item;
         return this.https.post<any>(this.apiURL,cartlistitem)
         .pipe(map(res => res))
         console.log(res => res);
           
    }*/

    
    
    //postCartDetailstoCheck2():Observable<any>{
          // var param = HttpParams()
         // return this.https.get(this.apiURL,cartlistitem)
     

    // }
    postCartDetailstoCheck3(cartproducts)
      {
        return this.https.get(this.apiURL,cartproducts)
        .subscribe(data =>{
          this.aa = data;
          console.log(this.aa);
        })
      }

      postCartDetailstoCheck8(cartproducts)
      {
        return this.https.post<any>(this.apiURL ,cartproducts)
        
      }

      /**postCartDetailstoCheck(cartproduct){
      this.https.get<any>('http://localhost:52202/api/employee',cartproduct).subscribe(  
      data => {  
       //this.Employee = data[];  
      }  
      ); 
      } */

     /** postCartDetailstoCheck(cartproduct): Observable<any>{
        return this.https.get<any>(this.apiURL + cartproduct )
          .map((result: Response) => result.json())
          .catch(this.getError);
      }*/


   

    ////

    public getCartItems(): Observable<CartItemModel[]> { 
      console.log(CartItemModel);
    return this.https.get<CartItemModel[]>('https://localhost:44351/api/Checkout/checkproductavailabilty');
     }


    ///

      
     getCartItems1():Promise<Array<CartItemModel>>
     {
        return  this.https.get<Array<CartItemModel>>(this.apiURL)
        .toPromise();
        console.log(CartItemModel);
     }

     public getCartItems2(): Observable<CartItemModel[]> { 
            console.log(CartItemModel);
          return this.https.get<CartItemModel[]>('https://localhost:44351/api/Checkout/checkproductavailabilty');
          

     }

     

    /**  public getCartItems(cartitems:CartItemModel){
        const reqHeader = new HttpHeaders().set('Content-Type','application/json')
                           .set('Accept','application/json');
        return this.https.post(this.apiURL + cartitems,{headers : HttpHeaders})
     }*/


      
   

    
    //get cart Items
        //async getAllcartItem():Promise<Array<CartItemModel>>
          //{
             // return  await this.https.get<Array<CartItemModel>>(this.apiURL)
               //.toPromise();
      
              // }

      //getCartItems(): Observable<CartItemModel[]>{
        //return this.https.get<CartItemModel[]>(this.apiURL);
       // .pipe(map(data => data));
       // console.log(CartItemModel);
     
     // }

  
     
    

   
      

     // public getAllUsers(): Observable<CartItemModel[]> {
       // return this.https.get<CartItemModel[]>(this.apiURL).pipe(
         // map(data => data.map(data => new CartItemModel().deserialize(data)))
        //);
     // }
   
    prodid:Number
  
   

 



   }


