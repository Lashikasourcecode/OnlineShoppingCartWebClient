import { Injectable } from '@angular/core';
import{ProductDetail} from './product-detail.model'; 
import{HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import { CustomerDetails } from './Model/customer-details.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  formData:ProductDetail 
    //formData: CustomerDetails
    //calling for web api
 // readonly apiURL ='https://localhost:44351/api/Product/getproduct';

   readonly apiURL ='https://localhost:44351/api/'

   productList : ProductDetail[];
   public prolist:Array<any>;


  constructor(private http:HttpClient) { } 

  //get product details
  async getAllProduct():Promise<Array<ProductDetail>>
  {
    return  await this.http.get<Array<ProductDetail>>(this.apiURL +'Product/getproduct')
    .toPromise();
     
   }

   

   

  // postCustomerDetails(formData : CustomerDetails)
   //{
     // return this.http.post(this.apiURL+'Product/addCustomer',formData)


   // }



}
