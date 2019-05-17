import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-bservices',
  templateUrl: './bservices.component.html',
  styleUrls: ['./bservices.component.scss']
})
export class BservicesComponent implements OnInit {

  type: String = "";
  isSavingsAccount: boolean = false;
  isLoanAccount: boolean = false;
  isdeposit: boolean = false;
  isWithdraw: boolean = false;
  isWorkInProgress: boolean = false;
  isAccountDetail: boolean = false;

  constructor(private route: ActivatedRoute,
  private router: Router,) { }

  ngOnInit() {

    this.type = this.route.snapshot.paramMap.get('type');
    console.log(this.type);
    switch(this.type){
      case "savings":
        this.isSavingsAccount = true;
        break;
      case "loan":
        this.isLoanAccount = true;
        break;
      case "deposit":
        this.isdeposit = true;
        break;
      case "withdraw":
        this.isWithdraw = true;
        break;
      default:
        this.isWorkInProgress = true;
    }
  }

}
