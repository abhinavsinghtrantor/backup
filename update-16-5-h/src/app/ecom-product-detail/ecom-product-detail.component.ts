import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-ecom-product-detail',
  templateUrl: './ecom-product-detail.component.html',
  styleUrls: ['./ecom-product-detail.component.scss'],
})
export class EcomProductDetailComponent implements OnInit {

  productDetails : any = {};
  constructor(private api : ApiServiceService) { }

  ngOnInit() {
    console.log(this.api.getCartCount());
  	this.api.getProductDetail("mobile-phones", "test").subscribe((data: any) => {
  		this.productDetails = data.productDetails;
  	});
  }

  buyProduct(){
    this.api.saveCart(this.productDetails);
  }

}
