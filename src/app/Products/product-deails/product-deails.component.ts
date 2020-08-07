import { Component, OnInit, Input } from '@angular/core';
import { ProductDetailService } from 'src/app/Shared/product-detail.service';
import{ProductDetail} from'src/app/Shared/product-detail.model';
import{ MessengerService} from 'src/app/Shared/Service/messenger.service';
//import { from } from 'rxjs';

@Component({
  selector: 'app-product-deails',
  templateUrl: './product-deails.component.html',
  styleUrls: ['./product-deails.component.css']
})
export class ProductDeailsComponent implements OnInit {

  //public products : Array<any>;
  
  //public productList : ProductDetail[];

   @Input() productIteam : ProductDetail

    counterValue = 0

   
  

  constructor(private msg:MessengerService) { }

  async ngOnInit() {

    //this.productList  = await this.productse.getAllProduct();
  }

  handleAddtoCart(productIteam)
  {
    this.msg.sendMsg(this.productIteam);
  }

  //counter value
  get counter() {
    return this.counterValue;
  }

  set counter(value) {
    this.counterValue = value;
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }

}
