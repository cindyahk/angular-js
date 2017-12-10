import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secretPassword = 'Secret Password is tuna';
  isHidden = false;
  numOfClicks = 0;
  logClick = [];

  toggleDisplay() {
    this.isHidden = !this.isHidden;
    this.logClick.push(++this.numOfClicks);
  }
}
