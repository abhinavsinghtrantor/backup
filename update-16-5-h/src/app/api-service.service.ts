import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserServiceService } from './user-service.service';
import { Observable } from 'rxjs';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url: string;
  token: string;
  constructor(private http: HttpClient, private userService: UserServiceService) {
    this.url = environment.SERVER_URL;
   }

  getSubCategories(cId) {
    return this.http.get(this.url+"/getSubCategories/"+cId);
  }

  getProducts(cId){
  	return this.http.get(this.url+"http://localhost:3000/collection/"+cId);
  };

  getProductDetail(cId, pId){
  	return this.http.get(this.url+"http://localhost:3000/collection/"+cId+"/product/"+pId);
  };

  getAddress(){
  	return this.http.get(this.url+"http://localhost:3000/getAddress");
  }

  saveAddress(obj){
  	return this.http.post(this.url+"http://localhost:3000/saveAddress", obj);
  }

  saveCart(product){
    var lCart = JSON.parse(sessionStorage["cart"]);
    var products = lCart.products;
    var tPrice = parseInt(lCart.tPrice);
    tPrice = tPrice + parseInt(product.dPrice);
    lCart.tPrice = tPrice;
    products.push(product);
    lCart["products"] = products
    sessionStorage["cart"] = JSON.stringify(lCart);
  }

  deleteCart(pId){
    var lCart = JSON.parse(sessionStorage["cart"]);
    var products = lCart.products;
    var tPrice = parseInt(lCart.tPrice);
    for(let i=0;i<products.length;i++){
      if(products[i].pId == pId){
        tPrice = tPrice - products[i].dPrice;
        products.splice(i,1);
        break;
      }
    }
    lCart.tPrice = tPrice;
    lCart["products"] = products
    sessionStorage["cart"] = JSON.stringify(lCart);
    return lCart.products;
  }

  getCart(){
    return JSON.parse(sessionStorage["cart"]);
  }

  getCartCount(){
    var lCart = JSON.parse(sessionStorage["cart"]);
    var products = lCart.products;
    return products.length;
  }

  completeOrder(payMode){
    let cart = JSON.parse(sessionStorage["cart"]);
    let addressId = sessionStorage["addressId"];
    let obj = {cart : cart, addressId : addressId};
    return this.http.post(this.url+"http://localhost:3000/completeOrder", obj);
  }

  getAccountDetils(accNumber, type){
    if(sessionStorage.getItem("token") != undefined){
      this.token = sessionStorage.getItem("token");
    }else{
      window.location.href = "http://localhost:4200/";
    }
    let accDetails = JSON.parse(sessionStorage['accDetails']);
    if(accNumber in accDetails){
      const obs = new Observable(observer => {
            setTimeout(() => {
                observer.next(accDetails[accNumber]);
            }, 1);
     });
      return obs;
    }else{
      let headers = new HttpHeaders(
          { "x-access-token": sessionStorage.getItem('token'), "Content-Type": "application/json" }
        );
      let aadharNum = this.userService.getUserAadhar();
      if(type == "Savings"){
        let data = JSON.stringify({aadharNum : aadharNum, accountNum : accNumber, url : "getSavingsDetails"});
        return this.http.post(this.url+"/bank", data, {headers : headers});
       }else if(type == "Loan"){
         let data = JSON.stringify({aadharNum : aadharNum, accountNum : accNumber, url : "getLoanDetails"});
         return this.http.post(this.url+"/bank", data, {headers : headers});
       }
   }
  }

  withdraw(amount, accNum, currency, cashBalance){
    let aadharNum = this.userService.getUserAadhar();
    let data = {aadharNum: aadharNum, amount : amount, accountNum : accNum, currency : currency, cashBalance : cashBalance};
    return this.http.post(this.url+"http://localhost:8080/withdraw", data);
  }

  deposit(amount, accNum, currency, cashBalance){
    let aadharNum = this.userService.getUserAadhar();
    let data = {aadharNum: aadharNum, amount : amount, accountNum : accNum, currency : currency, cashBalance : cashBalance};
    return this.http.post(this.url+"http://localhost:8080/deposit", data);
  }

  billFetch(category, mobilenum, merName){
    let data = {billerCategory: category, mobileNum:mobilenum, billMerchantName: merName};
     return this.http.post(this.url+"http://localhost:8080/billFetch", data);
    }

    payBill(fromAccountNum, toAccountNum, accType, amount, cashBalance){
      let aadharNum = this.userService.getUserAadhar();
      let data = {aadharNum: aadharNum, fromAccountNum : fromAccountNum, toAccountNum: ""+toAccountNum, accType: accType, amount: amount, cashBalance : cashBalance};
      return this.http.post(this.url+"http://localhost:8080/billPayment", data);
    }
  }

