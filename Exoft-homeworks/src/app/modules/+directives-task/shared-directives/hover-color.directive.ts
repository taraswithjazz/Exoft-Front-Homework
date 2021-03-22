import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverColor]',
})
export class HoverColorDirective {
  @Input() color: string;
  @Input() defValue:string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {  
    if(this.color.match(/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)){  
          this.highlight(this.color);
        } else {
          this.highlight('fe0000');
        }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('000');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = `#${color}`;
  }
}
