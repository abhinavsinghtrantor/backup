import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-ecom-order',
  templateUrl: './ecom-order.component.html',
  styleUrls: ['./ecom-order.component.scss']
})
export class EcomOrderComponent implements OnInit {

  sub: any;
  status: string;
  orderId: string;
  constructor(private aRoute: ActivatedRoute) { }

  ngOnInit() {
  	this.sub = this.aRoute.params.subscribe(params => {
       this.status = params['status']; 
       this.orderId = params['orderId'];
    });
  }

}
