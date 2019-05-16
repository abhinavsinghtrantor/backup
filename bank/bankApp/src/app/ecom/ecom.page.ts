import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-ecom',
  templateUrl: './ecom.page.html',
  styleUrls: ['./ecom.page.scss'],
})
export class EcomPage implements OnInit {

  category : any = {};

  constructor(private api : ApiServiceService) { }

  ngOnInit() {
  	let subCategories = [];
  	subCategories[0] = {name : "Mobile Phones", imgUrl : "", offer: "30% Off"};
  	subCategories[1] = {name : "Pendrives", imgUrl : "", offer: "30% Off"};
  	subCategories[2] = {name : "Cameras", imgUrl : "", offer: "30% Off"};
  	subCategories[3] = {name : "Headphones", imgUrl : "", offer: "30% Off"};

  	
    this.api.getSubCategories("electronics").subscribe((data: any) => {
      this.category = {"name" : data.name, bannerUrl : data.bannerUrl, subCategories : data.subCategories};
    });
  }

}
