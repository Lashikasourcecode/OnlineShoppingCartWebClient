import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Shared/Service/authentication.service';
import { Userdetails } from '../Shared/Model/Loginmodel/userdetails';
import { UserLogin } from '../Shared/Model/user-login';
import { UserService } from '../Shared/Service/user.service';
import { CheckoutserviceService } from '../Shared/Service/checkoutservice.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit { 

  //set datetime 
  public now: Date = new Date();

  public toggleButton: boolean = true; 

   public curentUserDetail :UserLogin

   //get user details
    public userdetails = []

    //get carttotal from checkout service
    public amount;

    public cartDetails =[];

    //
    public users = Userdetails;
    public userid :number;
    public username:string;
    public add:string;

   

  constructor(private authenticationService:AuthenticationService,
               private userservice:UserService,
               private checkoutservice:CheckoutserviceService) { 
                
                //set date and time
                setInterval(() => {
                  this.now = new Date();
                }, 5);

                this.amount = this.checkoutservice.Total;
                 console.log("total");
                 console.log(this.amount); 

                 //
                this.cartDetails =  this.checkoutservice.cartitemtoCheck;
                
                 console.log(this.cartDetails);
                 

               } 

  
  enable(){
    this.toggleButton = false
 }

  
  public userId:number
  ngOnInit(): void {

    let currentUser = this.authenticationService.currentUserValue; 

    this.userId = currentUser.customerId;

    this.curentUserDetail = this.authenticationService.currentUserValue;

    console.log("user");
    console.log(currentUser); 

    //get user details
     this.userdetails = this.userservice.userdata;
      console.log("ördercomponent");
      console.log(this.userdetails);
      this.userservice.postgetUserDetails(this.userId).subscribe(posts => {
        this.userdetails = posts;
        console.log("usersng");
        console.log(this.userdetails);
        });


  }

  //paymant coformation
  paymentconf(user){
     this.users = user
    this.userid = user.customerId;
    this.username = user.firstName;

    console.log("cartand user ng");
   // console.log(cart);
    console.log(this.userid);
    console.log(this.username);
    console.log(this.users);
    
  }

 /** getUserDetails(){
    this.userservice.postgetUserDetails(this.userId).subscribe(posts => {
     this.user = posts;
     console.log("usersng");
     console.log(this.user);
     });
        if(this.user != null)
          {
           this.router.navigate(['/order-details']);
          }
    }*/

}
