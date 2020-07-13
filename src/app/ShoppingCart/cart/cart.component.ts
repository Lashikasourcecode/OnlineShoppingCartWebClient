import { Component, OnInit } from '@angular/core';
import{ProductDetail} from'../../Shared/product-detail.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
//cart items into cart
  productDetail =[]
  cartItems =[];

  constructor() { }

  ngOnInit(): void {
  }

}
