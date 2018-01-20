import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers : number[] = [];
  oddNumbers : number[] = [];
  
  incrementNumber(newNumber: number) {
    if (newNumber % 2 == 0) {
      this.evenNumbers.push(newNumber);
    } else {
      this.oddNumbers.push(newNumber);
    }
  }
}
