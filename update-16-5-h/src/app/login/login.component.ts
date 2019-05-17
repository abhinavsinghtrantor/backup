import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogin: boolean = false;
  isAadhar: boolean = false;
  isOtp: boolean = false;
  aadharNum: String = "";
  otp: string = "";

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    if(this.userService.isUserLogin){
      this.isLogin = true;
    }
  };

  login(type){
    this.isLogin = false;
    this.isAadhar = true;
  }

  generateOtp(){
    this.isAadhar = false;
    this.isOtp = true;
  }

  authenticate(){
    this.userService.userAuthenticate(this.aadharNum, this.otp).subscribe((data: any) => {
      console.log(data);
    });
  }

}
