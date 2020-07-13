import { Component, OnInit } from '@angular/core';
import{ProductDetailService} from'../../Shared/product-detail.service';
import{ProductDetail} from'../../Shared/product-detail.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-detail-list',
  templateUrl: './product-detail-list.component.html',
  styleUrls: ['./product-detail-list.component.css']
})
export class ProductDetailListComponent implements OnInit { 

  public products : Array<any>;
  
  public productList : ProductDetail[];


  constructor(private productservice:ProductDetailService) { }
  //ngOnInit(): void {
   async ngOnInit() {

    this.productList  = await this.productservice.getAllProduct();


  }

}
