import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() selectRecipe = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(recipeToLoad: Recipe) {
    console.log(recipeToLoad.name);
    this.selectRecipe.emit(recipeToLoad);
  }

}