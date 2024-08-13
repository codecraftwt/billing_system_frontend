import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingSysytemComponent } from './billing-sysytem/billing-sysytem.component';

const routes: Routes = [
  { path: '', redirectTo: 'billings', pathMatch: 'full' },
  { path: 'billings', component: BillingSysytemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderBillingRoutingModule { }
