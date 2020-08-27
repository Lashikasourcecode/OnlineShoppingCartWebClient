import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//import { CustomerDetails } from './customer-details.model';
import{CustomerDetails} from'../Model/customer-details.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService { 

  formData : CustomerDetails

  readonly apiURL ='https://localhost:44351/api/Customer/addCustomer';

  constructor(public http:HttpClient) { }

  postCustomerDetails(formData : CustomerDetails)
   {
      return this.http.post(this.apiURL,formData)

   }

}
