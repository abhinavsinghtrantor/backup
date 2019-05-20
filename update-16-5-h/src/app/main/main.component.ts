import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  	if(sessionStorage.getItem("token") == undefined){
      this.router.navigate(['/login']);
    }else{
      this.init();
    }
  }

  init(){
    this.bItems[0] = [{n: "Savings Accounts", r:"/bank/savings"}, {n: "Loan Accounts", r:"/bank/loan"}, {n:"Cash Deposit", r:"/bank/deposit"}];
    this.bItems[1] = [{n: "Cash Withdraw", r:"/bank/withdraw"}, {n: "Bill Pay", r:"/bill-payment"}, {n:"Recharge", r:"/bank/recharge"}];
    this.bItems[2] = [{n:"Buy Insurance", r:"/bank/insurance"}, {n:"Credit Cards", r:"/bank/cards"}, {n:"Mutual Funds", r:"/bank/mutual-funds"}];
    this.bItems[3] = [{n: "Loan Enquiry", r:"/bank/loan-enquiry"}, {n:"Pay EMI", r:"/bank/pay-emi"}, {n:"More", r:"/bank/more"}];

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
