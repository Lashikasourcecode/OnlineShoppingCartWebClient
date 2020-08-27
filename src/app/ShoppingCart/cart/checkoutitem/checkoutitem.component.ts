
import { Component, OnInit, Input } from '@angular/core';
import { CheckoutserviceService } from 'src/app/Shared/Service/checkoutservice.service';
import { ProductDetail } from 'src/app/Shared/product-detail.model';
import { ProductDetailService } from 'src/app/Shared/product-detail.service';
import { CartItemModel } from 'src/app/Shared/Model/CartModel/cart-item-model.model';
import { AuthenticationService } from 'src/app/Shared/Service/authentication.service';
import { UserLogin } from 'src/app/Shared/Model/user-login';
import { Userdetails } from 'src/app/Shared/Model/Loginmodel/userdetails';
import { UserService } from 'src/app/Shared/Service/user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/Shared/Model/CartModel/cart-item';

@Component({
  selector: 'app-checkoutitem',
  templateUrl: './checkoutitem.component.html',
  styleUrls: ['./checkoutitem.component.css']
})
export class CheckoutitemComponent implements OnInit {

 


 checkoutcartItems =[]; 

  cartitem:any;

 item =[];

  //cartproductlist :any;

  // cartproductlist =[];

  message: string = "Hello Angular!"

   
   //getcartproducts
   public products : Array<any>;

  // public cartproductList = [];
    
   public cartitemlist :CartItemModel[];

   //getcartproduct
  // public cartproductList : ProductDetail[];
   public cartList : CartItemModel[];

    public cartData = [];

    //get valid cart data
    public validcart =[]; 

    public cartitems:CartItemModel

    //get user Details
    public curentUserDetail:UserLogin 

    userDetails = []

    public userId :number;
    public username;
    public password;

    user =[];

    public  availablecartitem =[];
   

  constructor(private choutService:CheckoutserviceService,
              private userservice:UserService,
              private authenticationService:AuthenticationService,
              private https:HttpClient,
              private route: ActivatedRoute,
              private router: Router){

               //get cartitem availability
                 this.availablecartitem=this.choutService.cartitemtoCheck;
                 console.log("available cart item");
                 console.log(this.availablecartitem);

              }
 //ngOnInit(): void 
  ngOnInit() { 

   // this.userDetails = this.userservice.userdetails;
    // console.log(this.userDetails);
    // console.log("hgfjfgsjgf");

    

    this.cartitem = this.choutService.cartitemtoCheck;
    console.log(this.cartData);

    //get userDetails to payment coformation
    this.curentUserDetail = this.authenticationService.currentUserValue;

    this.userId =this.curentUserDetail.customerId;
    this.username = this.curentUserDetail.username;
    this.password = this.curentUserDetail.password;

  
    //this.cartproductlist = this.choutService.addproduct(this.Item);

     // this.choutService.postCartDetailstoCheck()
       // .subscribe(
         //  data =>
            // {
             //  this.cartList = data
            // }
       // )
       
      // this.choutService.getCartItems().subscribe(data => this.cartproductList = data);
      // console.log(this.cartproductList)

      // this.cartproductList = this.choutService.getCartItems(this.cartproductList);
      

       this.choutService.getCartItems()
        .subscribe(
          data =>{
              this.cartList = data;
               console.log(this.cartList);
          }
        );

       //load cart items
       this.cartData = this.choutService.cartitemtoCheck;
       console.log(this.cartData);
       //load valid cart item
       this.validcart = this.choutService.x;
       
      
        console.log("Hello",this.validcart);
        console.log(this.validcart);

     // this.choutService.getCartItems().subscribe(data => this.cartData = data)
     // console.log(this.cartData);
      



  }

  

  CheckAvailability(cartproducts)
  {
    /**this.choutService.postCartDetailstoCheck5(cartproducts).subscribe(posts => {
     // this.user = posts;
      console.log("post");
      console.log(posts);
      //send user data into userservice
      this.userservice.userdata =posts;
      console.log("usersng");
      
      });*/
      
    
    //////////////////////////////////////////////corect code
    // this.choutService.postCartDetailstoCheck1(cartproducts);
     console.log(cartproducts);
     this.choutService.postCartDetailstoCheck1(cartproducts)
         
     this.cartData = this.choutService.cartitemtoCheck;
     console.log(this.cartData);
     console.log("hellowrwrw");
  }
  //////////////////////////////////////////
 /**  CheckAvailability1(cartproducts)
  {
     console.log("p");
     console.log(cartproducts);
    this.choutService.postCartDetailstoCheck1(cartproducts)
       .subscribe((data)=>{
        this.cartData = data
     // this.choutService.cartitemtoCheck
    });
    // console.log(cartproducts);
    // console.log("hello");
     //
    // this.cartData = this.choutService.cartitemtoCheck;
  }*/

  //get valid cart items
   getvaliddatafromCheckoutservice()
    {
       this.cartData = this.choutService.cartitemtoCheck;
       console.log("login cart");
       console.log(this.cartData);
     
    }


  /**getLoginData(): Observable<any>{
    return this.http.get('./json/login.json')
      .map((result: Response) => result.json())
      .catch(this.getError);
  }*/

  
   

  /**
   *import
    CheckAvailability(cartproducts)
    {
      console.log(cartproducts);
    //alert(item);
     this.choutService.postCartDetailstoCheck(cartproducts).subscribe(
       res => {
        // console.log(cartproductList);
        // this.resetForm(form)
       },
       err =>{
          console.log(err);
       },
     ) 
    }
 */
  paymentcof()
  {
    
  }

  //get user Details to payment conformation
  getUserDetails1(){ 
    
     console.log(this.userId);
     console.log("Checout")
    //this.authenticationServ.postgetUserDetails(this.userId);
     this.userservice.postgetUserDetails(this.userId);
  
    //this.userId

    this.userDetails = this.userservice.userdetails;
     console.log(this.userDetails);
     console.log("componet");


  }

  /**getUserDetails(){
   // const id = this.route.snapshot.paramMap.get('id');
  this.userservice.postgetUserDetails(this.userId).subscribe(response => {
    console.log(response);
    const templateObj = response.TempleteJson;
  })
   }*/
   getUserDetails(){
   this.userservice.postgetUserDetails(this.userId).subscribe(posts => {
    this.user = posts;
    console.log("post");
    console.log(posts);
    //send user data into userservice
    this.userservice.userdata =posts;
    console.log("usersng");
    
    });
       if(this.user != null)
         {
          this.router.navigate(['/order-details']);
         }
         else
         {
           alert("Invalid User");
         }
   }
  




  







}
