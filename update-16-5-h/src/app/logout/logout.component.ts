import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalserviceService } from '../modalservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private route: Router, private modalService: ModalserviceService) { }

  ngOnInit() {
  }

  logout(){
  	sessionStorage.clear();
    this.modalService.open('logout-modal');
    setTimeout(() => this.route.navigate(['/login']), 1000);
  }

  closeModal(){
    this.modalService.close('logout-modal'); 
  }

}
