import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  loadedRecipe: Recipe;
  
  constructor() { }

  ngOnInit() {
  }

  loadRecipe(recipe: Recipe) {
    this.loadedRecipe = recipe;   
  }
}
