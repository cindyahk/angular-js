import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number: Number;
  
  incrementNumber(newNumber) {
    this.number = newNumber;
    console.log(this.number);
  }
}
