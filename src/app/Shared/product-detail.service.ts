import { Injectable } from '@angular/core';
import{ProductDetail} from './product-detail.model'; 
import{HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  formData:ProductDetail
  readonly apiURL ='https://localhost:44351/api/Product/getproduct';

   productList : ProductDetail[];
   public prolist:Array<any>;

  constructor(private http:HttpClient) { }

  async getAllProduct():Promise<Array<ProductDetail>>
  {
    return  await this.http.get<Array<ProductDetail>>(this.apiURL)
    .toPromise();
     
   }
}
