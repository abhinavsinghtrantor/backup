import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bapp';
  constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
    }

    ngOnInit(){
    	this.translate.use('hi');
    }
}
