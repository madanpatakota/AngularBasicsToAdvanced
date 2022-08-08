import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, 
  Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSecond]'
})
export class SecondDirective implements OnChanges {


  @Input('color') color : string | undefined;

  @HostBinding('style.backgroundColor') bgcolor : string | undefined;

  constructor(private elementref:ElementRef , 
    private renderer :  Renderer2) { 

  }

  ngOnChanges(): void {
    // this.renderer.setStyle(this.elementref.nativeElement , 
    //   'background-color', this.color);

    this.bgcolor = this.color;
  }


  @HostListener('mouseenter') mouseenter(){
    // this.renderer.setStyle(this.elementref.nativeElement , 
    //   'background-color', 'white');
    this.bgcolor = 'white'
  }

  @HostListener('mouseleave') mouseleave(){
    // this.renderer.setStyle(this.elementref.nativeElement , 
    //   'background-color',this.color);
    this.bgcolor = this.color;
  }









}
