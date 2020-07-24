import { Injectable } from '@angular/core';
import { Userdetails } from './userdetails';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  


  formData:Userdetails

  readonly apiURL ='https://localhost:44351/api/User/login';

  constructor(private http:HttpClient) { }

  userLogin(formData:Userdetails)
   {
      return this.http.post(this.apiURL,formData)


   }
}
