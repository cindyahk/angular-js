import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secretPassword = 'Secret Password is tuna';
  isHidden = false;
  logItems = [];

  toggleDisplay() {
    this.isHidden = !this.isHidden;
    this.logItems.push(this.logItems.length + 1);
  }
}
