import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-ecom-del-payment',
  templateUrl: './ecom-del-payment.component.html',
  styleUrls: ['./ecom-del-payment.component.scss']
})
export class EcomDelPaymentComponent implements OnInit {

  payMode : String = "";
  constructor(private api : ApiServiceService) { }

  ngOnInit() {
  }

  selectPayMode(mode){
  	this.payMode = mode;
  	console.log(mode);
  }

  completeOrder(){
  	this.api.completeOrder(this.payMode).subscribe((data: any) => {console.log(data)});
  }
  

}
