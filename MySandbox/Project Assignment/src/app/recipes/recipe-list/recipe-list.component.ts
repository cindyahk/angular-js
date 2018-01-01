import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Pasta Tandoori Kip", "Indian Style Pasta", "http://www.fitdutchies.nl/wp-content/uploads/2014/08/1525563_704542109628253_7114454746835537142_n.jpg"),
    new Recipe("Pasta Tandoori Kip", "Indian Style Pasta", "http://www.fitdutchies.nl/wp-content/uploads/2014/08/1525563_704542109628253_7114454746835537142_n.jpg"),
    new Recipe("Pasta Tandoori Kip", "Indian Style Pasta", "http://www.fitdutchies.nl/wp-content/uploads/2014/08/1525563_704542109628253_7114454746835537142_n.jpg")    
  ];
  
  constructor() { }

  ngOnInit() {
  }

}