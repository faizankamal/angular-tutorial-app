import { Directive, ElementRef, OnInit, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnChanges {

  constructor(private elementRef: ElementRef, private render: Renderer2) {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    this.changecolor();
  }

  ngOnChanges() {
    console.log('OnChanges called');
    this.changecolor();
  }

  private changecolor() {
    console.log('text--' + this.elementRef.nativeElement.innerText);
    const status = this.elementRef.nativeElement.innerText;
    if (status === 'Saved') {
      this.render.setStyle(this.elementRef.nativeElement, 'color', 'green');
    } else {
      this.render.setStyle(this.elementRef.nativeElement, 'color', 'red');
    }
  }
}
