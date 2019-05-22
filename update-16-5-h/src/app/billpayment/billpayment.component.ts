import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ApiServiceService } from '../api-service.service';
import { ModalserviceService } from '../modalservice.service';

@Component({
  selector: 'app-billpayment',
  templateUrl: './billpayment.component.html',
  styleUrls: ['./billpayment.component.scss']
})
export class BillpaymentComponent implements OnInit {

  billCategory: string = "";
  merchant: string = "";
  
  isElectricity: boolean = false;
  isMobile: boolean = false;
  isBillDetail: boolean = false;
  mobileNum: string = "";
  isError: boolean = false;
  billDetails: any = {};
  savingAccounts: any[] = [];
  account: string = "";
  toAccount: string = "";
  amount: string = "";
  mHeading: string;
  mBody: string;

  constructor(private api : ApiServiceService,  private userService: UserServiceService,
    private modalService: ModalserviceService) { }

  ngOnInit() {

  }

  category(){
  	if(this.billCategory == "Electricity"){
 		this.isElectricity = true;
  		this.isMobile = false;
  	}else if(this.billCategory == "Mobile"){
  		this.isElectricity = false;
  		this.isMobile = true;
  	}else{
  		this.isElectricity = false;
  		this.isMobile = false;
  	}
  }

  getSavingsAccList(){
    this.savingAccounts = this.userService.getAccList("Savings");
  };

  getBill(){
  	this.isError = false;
  	var reg = /^\d+$/;
    if(reg.test(this.mobileNum)){
    	this.api.billFetch(this.billCategory, this.mobileNum, this.merchant).subscribe((data: any) => {
    		if(data.status == "Success"){
    			this.billDetails = data;
    			delete this.billDetails["status"];
    			delete this.billDetails["Description"];
    			delete this.billDetails["status"];
    			this.isBillDetail = true;
    			this.toAccount = data.billAcctNo;
    			this.amount = data.Amount;
    			this.getSavingsAccList();
    		}else{
    			this.isError = true;
    		}
    	})
    }else{
    	this.isError = true;
    }
  }

  accountSelect(accNumber){
  	this.account = accNumber;
  }

  payBill(){
  	let accDetails = this.userService.getAccountDetails(this.account);
  	this.api.payBill(this.account, this.toAccount, "savings", this.amount, accDetails.balance).subscribe((data: any) => {
  		if(data.status == "Success"){
  			this.userService.updateAccount(this.account, data.balance);
        this.mHeading = "Bill payed successfully"
        this.mBody = "your bill has been paid successfully"
        this.modalService.open("bank-modal");
  		}else{
  			this.mHeading = "Bill Payment Failed"
        this.mBody = "Please try again."
        this.modalService.open("bank-modal");
  		}
  	})
  }

  closeModal(id){
    this.modalService.close(id);
  }
}
