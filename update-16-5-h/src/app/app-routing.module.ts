import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { BservicesComponent } from './bservices/bservices.component';
import { BillpaymentComponent } from './billpayment/billpayment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'bank/:type',
    component: BservicesComponent
  },
  {
    path: 'bill-payment',
    component: BillpaymentComponent
  },
  { path: 'ecom/:category', loadChildren: './ecom/ecom.module#EcomPageModule' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
