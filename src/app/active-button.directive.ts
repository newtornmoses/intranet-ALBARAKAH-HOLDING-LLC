import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appActiveButton]'
})
export class ActiveButtonDirective {

  constructor(public elem: ElementRef,  ) { }
  @HostListener('click')  btnclick() {

    this.elem.nativeElement.style.background = 'rgb(75, 94, 109)';
    this.elem.nativeElement.style.color = 'white !important';
    if (this.elem.nativeElement.previousElementSibling ) {
    this.elem.nativeElement.previousElementSibling.style.background = 'none';

    }

    if (this.elem.nativeElement.nextElementSibling ) {
      this.elem.nativeElement.nextElementSibling.style.background = 'none';

      }




  }
}
