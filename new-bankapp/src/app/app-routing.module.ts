import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreOwnerComponent } from './store-owner/store-owner.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { StoreActionsComponent } from './store-actions/store-actions.component';

const routes: Routes = [
  {path: 'store-owner', component: StoreOwnerComponent},
  {path: 'report-details/:type/:time', component: ReportDetailsComponent},
  {path: 'store-actions', component: StoreActionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
