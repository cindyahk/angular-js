import { Ingredient } from '../shared/ingredient.model';
import { Output, EventEmitter } from '@angular/core';

export class ShoppingListService {
    @Output() ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients : Ingredient[] = [
        new Ingredient("Tomatoes", 2),
        new Ingredient("Apples", 5)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients : Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}