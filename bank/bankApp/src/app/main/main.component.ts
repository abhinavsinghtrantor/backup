import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  bItems: any[] = [[]];
  topOffersItems: any[] = [[]];
  shopCategories: any[] = [[]];
  isBankVisible: boolean = true;
  isShopVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  	this.bItems[0] = ["Accounts", "Cash Withdraw", "Cash Deposit"];
  	this.bItems[1] = ["Bill Pay", "Recharge", "Pay Emi"];
  	this.bItems[2] = ["Loan Enquiry", "Buy Insurance", "Credit Cards"];

    this.topOffersItems[0] = [{name: "Mobile Phones", offer : "30% Off"}, {name: "Men T-Shirts", offer : "50% Off"}]
    this.topOffersItems[1] = [{name: "Bluetooth Speakers", offer : "10% Cashback"}, {name: "Perfumes", offer : "25% Off"}]

    this.shopCategories[0] = ["Electronics", "Men's Fashion", "Women's Fashion"];
    this.shopCategories[1] = ["Grocery", "Household", "Sports"];
    
    
  }

  segmentChanged(ev: any) {
  	let val = ev.detail.value;
  	if(val == "BANK"){
  		this.isBankVisible = true;
  		this.isShopVisible = false;
  	}else{
  		this.isShopVisible = true;
  		this.isBankVisible = false;
  	}
    console.log('Segment changed', ev);
  }

}
