
import { Component, OnInit, Input } from '@angular/core';
import { CheckoutserviceService } from 'src/app/Shared/Service/checkoutservice.service';
import { ProductDetail } from 'src/app/Shared/product-detail.model';

@Component({
  selector: 'app-checkoutitem',
  templateUrl: './checkoutitem.component.html',
  styleUrls: ['./checkoutitem.component.css']
})
export class CheckoutitemComponent implements OnInit {

 // @Input() cartItems : any;

 
   // this.updatePeriodTypes();


 checkoutcartItems =[]; 

  cartitem:any;

 item =[];

  cartproductlist :any;

  message: string = "Hello Angular!"

   
 p:string

  
   

  constructor(private choutService:CheckoutserviceService) { }

  ngOnInit(): void {
    //this.cartproductlist = this.choutService.addproduct(this.Item);

    //this.checkoutcartItems = this.choutService.cartproductList;
    //this.cartitem = this.choutService.cartproductList;
    // this.p = this.choutService.str;
     //console.log("thep",this.checkoutcartItems);
    // console.log("Yap is",this.cartitem);
  }

  paymentcof()
  {
    
  }




  







}
