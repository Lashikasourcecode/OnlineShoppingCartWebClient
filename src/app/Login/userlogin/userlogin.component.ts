import { Component, OnInit } from '@angular/core';
import{NgForm, FormGroup, Validators} from'@angular/forms';
import{FormBuilder,Validator} from'@angular/forms'
import { from } from 'rxjs';
import { UserdetailsService } from 'src/app/Shared/Model/Loginmodel/userdetails.service';
import { AuthenticationService } from 'src/app/Shared/Service/authentication.service';
import { Userdetails } from 'src/app/Shared/Model/Loginmodel/userdetails';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  //data = any<Userdetails>
  
  formData:Userdetails
   

    




  constructor(public userservice:UserdetailsService,
              //private formBuilder:FormBuilder,
             // private  authenticationservice: AuthenticationService,
    ) {
    
   }

   

  ngOnInit(){

    this.resetForm();

   // this.loginForm = this.formBuilder.group({

     // username : ['',Validators.required],
     // password :['',Validators.required]

   // });

    
  }

  resetForm(form?:NgForm)
  {
    if(form != null)
     form.resetForm();
     this.userservice.formData ={
       Password :'',
       Username:'',
       

     }
  }



  OnSubmit(form:NgForm)
  {
     //If(form.value)
     this.userlogin(form);

  }
 //userlogin
  userlogin(form:NgForm)
  {
     this.userservice.userLogin(form.value).subscribe(
       res => {
         this.resetForm(form)
       },
       err =>{
          console.log(err);
       },
     )  
     
  }

  

  }



  




