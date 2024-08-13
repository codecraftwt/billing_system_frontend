import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderBillingRoutingModule } from './order-billing-routing.module';
import { FoodItemsComponent } from './food-items/food-items.component';
import { TablesComponent } from './tables/tables.component';
import { BillingSysytemComponent } from './billing-sysytem/billing-sysytem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FoodItemsComponent,
    TablesComponent,
    BillingSysytemComponent
  ],
  imports: [
    CommonModule,
    OrderBillingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class OrderBillingModule { }
