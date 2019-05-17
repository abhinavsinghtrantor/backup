import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }


  getSubCategories(cId) {
    return this.http.get("http://localhost:3000/getSubCategories/"+cId);
  }

  getProducts(cId){
  	return this.http.get("http://localhost:3000/collection/"+cId);
  };

  getProductDetail(cId, pId){
  	return this.http.get("http://localhost:3000/collection/"+cId+"/product/"+pId);
  };

  getAddress(){
  	return this.http.get("http://localhost:3000/getAddress");
  }

  saveAddress(obj){
  	return this.http.post("http://localhost:3000/saveAddress", obj);
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
    return this.http.post("http://localhost:3000/completeOrder", obj);
  }

  


}
