import { EventEmitter, Output, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
    @Output() recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "Pasta Tandoori Kip", 
            "Indian Style Pasta", 
            "http://www.fitdutchies.nl/wp-content/uploads/2014/08/1525563_704542109628253_7114454746835537142_n.jpg",
            [new Ingredient('pasta', 1), new Ingredient('chicken', 1)]
        ),
        new Recipe(
            "Chinese dumplings", 
            "A savory pork, shrimp and salted cabbage filling", 
            "http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18132455/051103075-01-pork-shrimp-dumplings-recipe-main.jpg",
            [new Ingredient('pork', 1), new Ingredient('shrimp', 5)]
        ),
    ];

    constructor(private shoppingListService : ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients : Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}