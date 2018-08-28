import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective {

  constructor(private el: ElementRef) { }
  // show div details on mouse over
  @HostListener('mouseover')
         showDetails() {

         this.el.nativeElement.children[1].style.top = '50px';
         }

           // hide div details on mouse leave
         @HostListener('mouseleave')
               hideDetails() {
                 this.el.nativeElement.children[1].style.top = '340px';
               }

}
