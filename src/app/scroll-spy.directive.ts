import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[scrollSpy]'
})
export class ScrollSpyDirective {
  @Input() public spiedTags: string[] = [];
  @Output() public sectionChange: EventEmitter<string> = new EventEmitter<string>();
  private currentSection: string | undefined;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    let currentSection: string = '';
    const children = this.el.nativeElement.children;
    const scrollPosition = window.scrollY;

    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
        if (element.offsetTop - 100 <= scrollPosition) {
          currentSection = element.id;
        }
      }
    }

    if (currentSection && currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }
}
