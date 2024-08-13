import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  food_items_lS: any = localStorage.getItem('food_items')
  private foodSubject = new BehaviorSubject<any>(this.food_items_lS ? JSON.parse(this.food_items_lS) : '')
  data$ = this.foodSubject.asObservable();

  private OrderedfoodSubject = new BehaviorSubject<any>('')
  orderedMenu$ = this.OrderedfoodSubject.asObservable();
  private orderedMenuList: any[] = [];

  constructor() {

  }

  updateData(newData: any) {
    this.foodSubject.next(newData);
  }

  updateOrderedMenu(data: any) {
    this.orderedMenuList = [...this.orderedMenuList, data];
    this.OrderedfoodSubject.next(this.orderedMenuList);
  }

}
