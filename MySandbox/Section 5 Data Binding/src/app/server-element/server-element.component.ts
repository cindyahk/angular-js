import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent 
implements OnInit, 
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading') heading: ElementRef;

  constructor() {
    console.log("Constructor called");
   }

  ngOnChanges(change: SimpleChanges ) {
    console.log("ngOnChanges called");
    console.log(change);
  }

  ngOnInit() {
    console.log("ngOnInit called");
    console.log(this.heading.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
    console.log(this.heading.nativeElement.textContent);        
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    console.log(this.heading.nativeElement.textContent);    
  }

  ngAfterViewChecked() {
    console.log("ngAfterContentChecked called");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called");
  }




}
