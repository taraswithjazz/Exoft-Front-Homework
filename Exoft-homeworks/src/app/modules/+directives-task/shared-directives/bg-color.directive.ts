import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[bgColor]'
})
export class BgColorDirective {
  @Input() color: string;
  
    constructor(private el: ElementRef) {
    }
    ngOnChanges(changes: SimpleChanges): void {
      let currVal = changes.color.currentValue
if(currVal.match(/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)){
  this.highlight(this.color)
} else {
  this.highlight('FFFFFF')
}
    }
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor  = `#${color}`;
    }
}