import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EcomCartComponent } from './ecom-cart/ecom-cart.component';
import { EcomDelAddressComponent } from './ecom-del-address/ecom-del-address.component';
import { EcomDelPaymentComponent } from './ecom-del-payment/ecom-del-payment.component';
import { EcomOrderComponent } from './ecom-order/ecom-order.component';
import { EcomTrackComponent } from './ecom-track/ecom-track.component';


@NgModule({
  declarations: [
    AppComponent, MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
