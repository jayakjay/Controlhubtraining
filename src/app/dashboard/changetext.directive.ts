import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangetext]'
})
export class ChangetextDirective {

  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText = "Text is changed by changeText Directive.";
    Element.nativeElement.style.backgroundColor = 'green'
 }
}
