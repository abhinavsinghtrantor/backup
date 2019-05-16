import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-ecom-product',
  templateUrl: './ecom-product.component.html',
  styleUrls: ['./ecom-product.component.scss'],
})
export class EcomProductComponent implements OnInit {

  products : any = {}

  constructor(private api : ApiServiceService) { }

  ngOnInit() {
    let productList = [];
    this.api.getProducts("mobile-phones").subscribe((data: any) => {productList = data.data.productList;
    this.products = {catName : "Electronics", productList : productList}});
  }
}
