import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() onIncrementNumber = new EventEmitter<Number>();
  newNumber: number = -1;
  timer;
  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    var _this = this;
    this.timer = setInterval(function() { 
      _this.onIncrementNumber.emit(_this.newNumber++);
      //console.log(this);
    }, 1000);  
  }

  onStopGame() {
    clearInterval(this.timer);
  }
}
