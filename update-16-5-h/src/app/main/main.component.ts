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
  	this.bItems[0] = ["Savings Accounts", "Loan Accounts", "Cash Deposit"];
    this.bItems[1] = ["Cash Withdraw", "Bill Pay", "Recharge"];
  	this.bItems[2] = ["Buy Insurance", "Credit Cards", "Mutual Funds"];
  	this.bItems[3] = ["Loan Enquiry", "Pay EMI", "More"];

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
