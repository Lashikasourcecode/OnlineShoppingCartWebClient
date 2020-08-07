import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../Shared/product-detail.service';
import { NgForm } from '@angular/forms';
import { IfStmt } from '@angular/compiler';
import { CustomerDetailsService } from '../Shared/Model/customer-details.service';
import { CustomerDetails } from '../Shared/Model/customer-details.model';
import { HttpClient } from '@angular/common/http';
import { UserdetailsService } from '../Shared/Model/Loginmodel/userdetails.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  data: Array<CustomerDetails>

  formData : CustomerDetails

  constructor(public customerservice:CustomerDetailsService) { }

 // postPaymetDetails(formData:CustomerDetails){
    //this.http.post(this)

 // }

  //ngOnInit():void{}
  ngOnInit() {
    this.resetForm();
    //this.OnSubmit();

  }
//reset the form data
  resetForm(form?:NgForm)
  {
    if(form != null)
     form.resetForm();
     this.customerservice.formData ={
       Password :'',
       FirstName:'',
       LastName:'',
       BilingAddress:'',
       
       DeliveryAddress:'',
       DeliveryCity:'',
       Email:'',
       MobileNo:''

     }
  }

  OnSubmit(form:NgForm)
  {
     //If(form.value)
     this.insertRecords(form);

  }

  //onSubmit(form:NgForm)
  //{if(form.value.customerId==null){
   // this.customerservice.PostCustomer(form.value).subscribe( 
     // res =>{
     // this.resetButton(form);
   // },
   // err=>{
    //  console.log(err);
   // }
   // )
 // }

  //}

  insertRecords(form:NgForm)
  {
     this.customerservice.postCustomerDetails(form.value).subscribe(
       res => {
         this.resetForm(form)
       },
       err =>{
          console.log(err);
       },
     )  
     
  }



}

