import { Component, OnInit } from '@angular/core';
import{ProductDetail} from'../../Shared/product-detail.model';
import{MessengerService} from'../../Shared/Service/messenger.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
//cart items into cart
  productDetail =[]
  //AcartItems = ProductDetail;
  cartItems =[];

  //product :ProductDetail

  cartTotal = 0;

  constructor(private messervice:MessengerService) { }
//ngOnInit():void{}
  ngOnInit() {

    this.messervice.getMsg().subscribe((product:ProductDetail) =>{
      // console.log(product)
      this.addProductToCart(product)
      
   })
     
 
      
    
  }

  addProductToCart(product:ProductDetail)
  {
    this.cartItems.push({
      productId :product.ProductId,
      productName :product.productName,
      quantity:product.quantity,
      unitPrice:product.unitPrice
    })
     this.cartTotal = 0;
     this.cartItems.forEach(item => {
    this.cartTotal +=(item.quantity * item.price)
    
  })

  }

}


