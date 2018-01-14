import { 
  Component, 
  OnInit, 
  ViewChild, 
  ElementRef, 
  EventEmitter, 
  Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
@ViewChild('nameInput') nameInput: ElementRef;
@ViewChild('amountInput') amountInput: ElementRef;
@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const newName = this.nameInput.nativeElement.value;
    const newAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(newName, newAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}