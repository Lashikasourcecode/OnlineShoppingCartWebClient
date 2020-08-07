import { Component, OnInit, Input } from '@angular/core';
import{ MessengerService} from 'src/app/Shared/Service/messenger.service';
import { ProductDetail } from '../Shared/product-detail.model';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit { 

  
 // @Input() cartItems : any;

  //items :ProductDetail[]

   

  constructor(private msg:MessengerService) { 

   
    
  }

  ngOnInit(): void { 

  } 


    
  


  handleAddtoCartDetails(item)
  {
   // this.msg.sendMsg(this.item);
  }

}
