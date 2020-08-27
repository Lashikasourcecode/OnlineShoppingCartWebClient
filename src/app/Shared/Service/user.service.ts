import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { Userdetails } from '../Model/Loginmodel/userdetails';
import { User } from '../Model/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService { 

  //readonly apiURL="https://localhost:44351/api/UserDetails/userdetails";
  readonly apiURL='https://localhost:44351/api/UserDetails/userdetails';

  //get userdetails to payment conformation
  public userdetails = [];
  public usersdata = User;
  public userdata =[];


  public total:number

  
  

  constructor(public https:HttpClient,
              private authenticationservice:AuthenticationService) { 
    
  }
   
  currentUser = this.authenticationservice.currentUser; 


  

  

  

  postgetUserDetails1(userid)
  {
    //userid
    
  let param =  new HttpParams().set("customerid",userid);
    console.log(userid);
    console.log("userid");
    this.https.get<any>(this.apiURL,{params:param})
  // this.https.get(this.apiURL,userid)

    .subscribe(data =>{
       // this.x =data 
        this.userdetails = data;
         console.log(data)
        console.log(this.userdetails)
        
      }); 

      return this.userdetails;
}

postgetUserDetails3(userid){
  let param =  new HttpParams().set("customerid",userid);
  this.https.get<Userdetails[]>(this.apiURL,{params:param})
}

postgetUserDetails(userid): Observable<User[]> {
 // const url = 'https://jsonplaceholder.typicode.com/posts';
 let param =  new HttpParams().set("customerid",userid);
  return this.https.get<User[]>(this.apiURL,{params:param})
      .pipe(
          map(response => response.map(postData => new User(postData)))
      );

      console.log(this.userdata);

      
      
}




}
