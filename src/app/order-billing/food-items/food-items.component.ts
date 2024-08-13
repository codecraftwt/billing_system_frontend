import { Component, OnInit } from '@angular/core';
import { food_categories } from 'src/app/data/food-items';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.scss']
})
export class FoodItemsComponent implements OnInit {

  food_items = food_categories;

  constructor(private foodservice: FoodService) {

  }

  ngOnInit(): void {
  }

  onClickFoodCategory(food: any) {
    localStorage.setItem('food_items', JSON.stringify(food));
    this.foodservice.updateData(food)
  }
}
