import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-billing-sysytem',
  templateUrl: './billing-sysytem.component.html',
  styleUrls: ['./billing-sysytem.component.scss']
})
export class BillingSysytemComponent implements OnInit {

  orderedMenu: any;
  quantity: number = 1;
  constructor(private foodservice: FoodService) { }


  ngOnInit(): void {

    this.foodservice.orderedMenu$.subscribe((menu: any) => {
      console.log(menu, 'menus');

      this.orderedMenu = menu;
      console.log(this.orderedMenu, 'orderedMenu');
    })
  }

}
