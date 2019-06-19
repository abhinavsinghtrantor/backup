import { Component, OnInit } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-store-owner',
  templateUrl: './store-owner.component.html',
  styleUrls: ['./store-owner.component.scss']
})
export class StoreOwnerComponent implements OnInit {

  orders: any;
  nUsers: any;
  tUsers: any;
  profit: any;

  orderTimeDay: string;
  orderTimeWeek: string;
  orderTimeMonth: string;

  nUserTimeDay: string;
  nUserTimeWeek: string;
  nUserTimeMonth: string;

  tUserTimeDay: string;
  tUserTimeWeek: string;
  tUserTimeMonth: string;

  profitTimeDay: string;
  profitTimeWeek: string;
  profitTimeMonth: string;

  constructor() { }

  ngOnInit() {
  	this.orderTimeDay = 'active';
  	this.nUserTimeDay = 'active';
  	this.tUserTimeDay = 'active';
  	this.profitTimeDay = 'active';
  	
  	this.orders = {total: 15, growth: '10%', time: 'Since last month'};
  	this.nUsers = {total: 15, growth: '10%', time: 'Since last month'};
  	this.tUsers = {total: 15, growth: '10%', time: 'Since last month'};
  	this.profit = {total: 15, growth: '10%', time: 'Since last month'};
  }

  getOrders(time){
  	this.orderTimeDay = 'notactive'
  	this.orderTimeWeek = 'notactive'
  	this.orderTimeMonth = 'notactive'
  	if(time == 'day'){
  		this.orderTimeDay = 'active';
  	}else if(time == 'week'){
  		this.orderTimeWeek = 'active';
  	}else if(time == 'month'){
  		this.orderTimeMonth = 'active';
  	}
  }

  getNewUsers(time){
  	this.nUserTimeDay = 'notactive'
  	this.nUserTimeWeek = 'notactive'
  	this.nUserTimeMonth = 'notactive'
  	if(time == 'day'){
  		this.nUserTimeDay = 'active';
  	}else if(time == 'week'){
  		this.nUserTimeWeek = 'active';
  	}else if(time == 'month'){
  		this.nUserTimeMonth = 'active';
  	}
  }

  getTotalUsers(time){
  	this.tUserTimeDay = 'notactive'
  	this.tUserTimeWeek = 'notactive'
  	this.tUserTimeMonth = 'notactive'
  	if(time == 'day'){
  		this.tUserTimeDay = 'active';
  	}else if(time == 'week'){
  		this.tUserTimeWeek = 'active';
  	}else if(time == 'month'){
  		this.tUserTimeMonth = 'active';
  	}
  }

  getProfit(time){
  	this.profitTimeDay = 'notactive'
  	this.profitTimeWeek = 'notactive'
  	this.profitTimeMonth = 'notactive'
  	if(time == 'day'){
  		this.profitTimeDay = 'active';
  	}else if(time == 'week'){
  		this.profitTimeWeek = 'active';
  	}else if(time == 'month'){
  		this.profitTimeMonth = 'active';
  	}
  }
  

}
