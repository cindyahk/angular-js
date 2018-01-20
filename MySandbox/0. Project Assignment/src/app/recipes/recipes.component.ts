import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  
  constructor(private recipesService : RecipesService) { }

  ngOnInit() {
    this.recipesService.recipeSelected.subscribe( 
      (recipeSelected : Recipe) => { this.selectedRecipe = recipeSelected}
    );
  }

}
