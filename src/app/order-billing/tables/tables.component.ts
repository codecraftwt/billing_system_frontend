import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  tables: any;
  food_items: any;

  constructor(private foodservice: FoodService) {
  }


  ngOnInit(): void {

    //get food_items from subscription
    this.foodservice.data$.subscribe((newData: any) => {
      this.food_items = newData.food_items;
    })

  }

  getBorderColor(type: string): object {
    let color = 'red';

    switch (type) {
      case 'veg':
        color = 'green';
        break;
      case 'nonveg':
        color = 'red';
        break;
      case 'mixed':
        color = 'yellow';
        break;
      // Add more cases as needed
    }

    return {
      'border-left': `5px solid ${color}`
    };
  }

  onclickMenu(menu: any) {
    this.foodservice.updateOrderedMenu(menu);
  }
}
