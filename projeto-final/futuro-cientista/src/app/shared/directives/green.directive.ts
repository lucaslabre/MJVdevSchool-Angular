import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGreen]'
})
export class GreenDirective {

  constructor(private element: ElementRef) { 
    this.element.nativeElement.style.color = 'green';
  }

}
