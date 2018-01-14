import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipe: String;
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("Pasta Tandoori Kip", "Indian Style Pasta", "http://www.fitdutchies.nl/wp-content/uploads/2014/08/1525563_704542109628253_7114454746835537142_n.jpg"),
    new Recipe("Chinese dumplings", "A savory pork, shrimp and salted cabbage filling", "http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18132455/051103075-01-pork-shrimp-dumplings-recipe-main.jpg"),
    new Recipe("Pasta Tandoori Kip", "Indian Style Pasta", "http://www.fitdutchies.nl/wp-content/uploads/2014/08/1525563_704542109628253_7114454746835537142_n.jpg")    
  ];
  
  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }


}