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
 //A
 //@Input() Item:ProductDetail
  parentntpost:any[]=[] 
//get cart Item
  CartItemModel:any

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
      this.addProductToCart(product)
      
   })
     
 
      
    
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
 public productName:string ="Hello"

   getcartproduct(cartproductList)
  {
    
    console.log(cartproductList);
    alert(cartproductList);
     this.checkoutservice.postCartDetails(cartproductList).subscribe(
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


