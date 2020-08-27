import { Component, OnInit, Input } from '@angular/core';
import{ProductDetail} from'../../Shared/product-detail.model';
import{MessengerService} from'../../Shared/Service/messenger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutserviceService } from 'src/app/Shared/Service/checkoutservice.service';
import{CartItemModel} from '../../Shared/Model/CartModel/cart-item-model.model'
import { from } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
//cart items into cart
  productDetail =[]
  //AcartItems = ProductDetail;
  products : ProductDetail
  cartItems =[];
 //latest code
  productscart :CartItemModel
 //@Input() Item:ProductDetail
  parentntpost:any[]=[] 
//get cart Item
  CartItemModel:any ;
  public cartitems1 :CartItemModel[] =[];

  //product :ProductDetail
  //remove cart
  public cartDetails: ProductDetail[] = [];  

  cartTotal = 0;

  constructor(private messervice:MessengerService,private router:Router
    ,private checkoutservice:CheckoutserviceService) { }
//ngOnInit():void{}
  ngOnInit() {

    this.messervice.getMsg().subscribe((product:ProductDetail) =>{
       console.log(product)
       console.log("hello") 
      this.addProductToCart(product)
       
   }) 

   
    

   
     

   ///
  /** this.checkoutservice.getCartItems(this.cartitems1)
   .subscribe((data) => {
     this.cartItems = data;
     console.log();
   })*/
   ///
   ////
   //
 
      
    
  } 

  //add product to checutservice
 // getcartproduct(cartItems)
  // {
    // this.checkoutservice.cartproductList.push(cartItems);
     // this.checkoutservice.postCartDetails(cartItems);
    // this.checkoutservice.cartproductList.push(cartItems);
     
  // }

//cartItems
 id :string
 ProductDetail:[];

 item:any

  getcartproduct(item)
  {
     this.checkoutservice.cartitemtoCheck = item;
  }
 
 /** 
 //import1
 getcartproduct(item)
  {
    
    console.log(item);
    //alert(item);
     this.checkoutservice.postCartDetails(item).subscribe(
       res => {
        // console.log(cartproductList);
        // this.resetForm(form)
       },
       err =>{
          console.log(err);
       },
     ) 
    
   // this.checkoutservice.postCartDetails(cartItems).subscribe(() =>{
       // console.log("Hello world");
       // console.log(this.CartItemModel);
   // }) 
     
  }
  */
  

  

  
  
//A
 // addpost(x){
   // console.log(x);
   // this.parentntpost.push(this.x);
 //// }

 //navigate() {
 // this.router.navigate(['check-out', {p1: this.cartItems }]);
//}

  addProductToCart(product:ProductDetail)
  {
    this.cartItems.push({
      productId :product.productId,
      productName :product.productName,
      quantity:product.quantity,
      unitPrice:product.unitPrice
    })
  

    /**addProductToCart1(productcarts:CartItemModel)
  {
    this.cartItems.push({
      productId :productcarts.productId,
      productName :productcarts.productName,
      quantity:productcarts.quantity,
      unitPrice:productcarts.unitPrice
    })*/

   /**  let productExcit = false;
    for(let i in this.cartItems){
      if(this.cartItems[i].productId === this.cartItems[i].productId){
         this.cartItems[i].quantity ++;
         productExcit = true;
         break;
        
      }
    }

    
    
    if(!productExcit){
    this.cartItems.push({
      productId :product.ProductId,
      productName :product.productName,
      quantity:product.quantity,
      unitPrice:product.unitPrice
    })
  }*/

  
  
  
           
      
         

     
    
      

     this.cartTotal = 0;
     this.cartItems.forEach(item => {
    this.cartTotal +=(item.quantity * item.unitPrice)

    //send  total into  order details
    this.checkoutservice.Total = this.cartTotal; 
    console.log("cart totle");
    console.log(this.cartTotal);
    
  })

  }

  //Remove Item in Cart
  removeFromCart(removeindex) {  
    //alert(removeindex);  
    this.cartItems.splice(removeindex, 1);  

    this.getItemTotalresult();  
  }  
//calculate total of cartitems
  getItemTotalresult()
  {
    this.cartTotal = 0;
     this.cartItems.forEach(item => {
    this.cartTotal +=(item.quantity * item.unitPrice)
    
  })

  }
    

}


