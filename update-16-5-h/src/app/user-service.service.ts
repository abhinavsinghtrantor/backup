import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  isUserLogin(){
    if(sessionStorage["user"] != "undefined"){
      return true;
    }
    return false;
  }

  userAuthenticate(aadharNum, otp){
    var data = JSON.stringify({aadharNum : aadharNum, otp : otp});
    return this.http.post("http://localhost:8080/login", data);
  }
}
