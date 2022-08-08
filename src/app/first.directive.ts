import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {

  constructor(private elementref:ElementRef , private renderer :  Renderer2) { 
     //DOM//this.elementref.nativeElement.style.backgroundColor = "yellow";
       this.renderer.setStyle(this.elementref.nativeElement , 'background-color', 'yellow');
    }

}
