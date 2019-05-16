import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-ecom-del-address',
  templateUrl: './ecom-del-address.component.html',
  styleUrls: ['./ecom-del-address.component.scss']
})
export class EcomDelAddressComponent implements OnInit {

  isNewAddress : boolean = false;
  highlight : boolean[] = [];
  address : any = {};

  name : String;
  mobile : String;
  address1 : String;
  address2 : String;
  city : String;
  state : String;
  pincode : String;

  constructor(private api : ApiServiceService) { }

  ngOnInit() {
    this.api.getAddress().subscribe((data: any) => {this.address = data.address});
  }

  cardClick(ev){
  	for(let i=0;i<this.highlight.length;i++){
  		this.highlight[i] = false;
  	}
  	this.highlight[0] = true;
  }

  newAddress(){
    for(let i=0;i<this.highlight.length;i++){
      this.highlight[i] = false;
    }
    this.isNewAddress = true;
  }

  saveNewAddress(){
    
    var nAddressObj = {
      name : this.name,
      mobile : this.mobile,
      address1 : this.address1,
      address2 : this.address2,
      city : this.city,
      state : this.state,
      pincode : this.pincode
    }
    this.api.saveAddress(nAddressObj).subscribe((data: any) => {console.log(data)});
  }
}
