import { OnInit, ElementRef, Directive } from '@angular/core';

@Directive({
    selector: "[appBasicHighlight]"
})

export class BasicHighlight implements OnInit {

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}