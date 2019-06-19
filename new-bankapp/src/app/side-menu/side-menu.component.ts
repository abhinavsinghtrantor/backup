import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  style: string;
  constructor() { }

  ngOnInit() {
  	this.style = "hide";
  }

  closeMenu(){
  	this.style = "hide";
  }

  menuClick(){
    if(this.style == 'show'){
      this.style = 'hide';
    }else{
      this.style = 'show';
    }
  }

}
