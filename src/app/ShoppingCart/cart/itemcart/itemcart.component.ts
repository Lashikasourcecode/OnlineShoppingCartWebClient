import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itemcart',
  templateUrl: './itemcart.component.html',
  styleUrls: ['./itemcart.component.css']
})
export class ItemcartComponent implements OnInit {

  @Input() cartItems : any;

  /**@Input() nooforder :any;**/

  constructor() { }

  ngOnInit(): void {
  }

}
