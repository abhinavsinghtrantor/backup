import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {

  users: any;
  reportTitle : string;
  rTitle : string = "Orders";
  barChartOptions : any;
  barChartLabels;
  barChartType;
  barChartLegend;
  barChartData;
  type: string;
  time: string;

  constructor(private aRoute: ActivatedRoute) { }

  ngOnInit() {
      this.aRoute.params.subscribe((params) => {
        this.type = params['type']; 
        this.time = params['time'];
    })

    this.reportTitle = "Report for  " + this.type;
    this.users = [{id: 1, name : "A", value: 150}];
    this.rTitle = 'Orders';
     this.barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
    
    this.barChartLabels = ['Jan', 'Feb', 'March', 'April', 'May', 'June'];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartData = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: this.type},
     
    ];
  }

 

  public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(0,150,210,1)',
      borderColor: 'rgba(0,150,210,1)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // second color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }];

}
