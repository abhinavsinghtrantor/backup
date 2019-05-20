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
    setTimeout(() => this.initMap(), 500);
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

  initMap() {
  // The location of Uluru
  var store1 = {lat: 19.228825, lng: 72.854118};
  var store2 = {lat: 19.226825, lng: 72.853118};
  var store3 = {lat: 19.224825, lng: 72.855118};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: store1, disableDefaultUI: true});
  // The marker, positioned at Uluru
  var marker1 = new google.maps.Marker({position: store1, map: map});
  var marker2 = new google.maps.Marker({position: store2, map: map});
  var marker3 = new google.maps.Marker({position: store3, map: map});

  var infowindow1 = new google.maps.InfoWindow({
          content: "<div>General Store</div><div style='color:red; font-size: 12px; font-weight: bold'>20% Off on Groceries</div>"
        });

        var infowindow2 = new google.maps.InfoWindow({
                content: "<div>Ramesh Store</div><div style='color:red; font-size: 12px; font-weight: bold'>30% Cashback</div>"
              });

              var infowindow3 = new google.maps.InfoWindow({
                      content: "<div>Top ka Store</div><div style='color:red; font-size: 12px; font-weight: bold'>Rs. 100 Off</div>"
                    });
        marker1.addListener('click', function() {
         infowindow1.open(map, marker1);
       });

       marker2.addListener('click', function() {
        infowindow2.open(map, marker2);
      });

      marker3.addListener('click', function() {
       infowindow3.open(map, marker3);
     });

        infowindow1.open(map, marker1);
        infowindow2.open(map, marker2);
        infowindow3.open(map, marker3);
}

}
