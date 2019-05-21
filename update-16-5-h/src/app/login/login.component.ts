import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ModalserviceService } from '../modalservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogin: boolean = false;
  isAadhar: boolean = false;
  isOtp: boolean = false;
  aadharNum: string = "";
  otp: string = "";
  isAadharInValid: boolean = false;
  isOtpInvalid: boolean = false;
  mHeading: string;
  mBody: string;

  constructor(private userService: UserServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: ModalserviceService) { }

  ngOnInit() {
    if(sessionStorage.getItem("token") != undefined){
      this.router.navigate(['/main']);
    }
    if(this.userService.isUserLogin){
      this.isLogin = true;
    }
    this.mHeading = "Login Failed"
    this.mBody = "Please try again."
  };

  login(type){
    this.isLogin = false;
    this.isAadhar = true;
  }

  generateOtp(){
    var reg = /^\d+$/;
    if(reg.test(this.aadharNum)){
      this.isAadhar = false;
      this.isOtp = true;
      this.isAadharInValid = false;
    }else{
      this.isAadharInValid = true;
    }
    
  }

  authenticate(){
    var reg = /^\d+$/;
    if(reg.test(this.otp)){
      this.userService.userAuthenticate(this.aadharNum, this.otp).subscribe((data: any) => {
        if(data.status == "Fail"){
          this.isAadharInValid = true;
          this.back("aadhar");
        }else if(data.status == "Success"){
          let user = {name : data.name, age: data.age, mobile: data.mobile};
          let accounts = data.accounts;
          let token = data.token;
          let id = data.id;
          this.userService.createSession(this.aadharNum, user, accounts, token, id);
          this.router.navigate(['/main']);
        }
      });
      this.isOtpInvalid = false;
    }else{
      this.isOtpInvalid = true;
    }
    
  }

  back(type){
    if(type == "login"){
      this.isLogin = true;
      this.isAadhar = false;
      this.isOtp = false;
      this.aadharNum = "";
      this.otp = "";
      this.isAadharInValid = false;
      this.isOtpInvalid = false;
    }else if(type == "aadhar"){
      this.isLogin = false;
      this.isAadhar = true;
      this.isOtp = false;
      this.otp = "";
      this.isOtpInvalid = false;
    }
  }

  openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

}
