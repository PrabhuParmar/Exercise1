import { Directive, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSpanDirective]'
})
export class SpanDirectiveDirective implements OnInit {
  spanTag: NodeList | any;
  spanElement: NodeList | any = '';
  selectElement: NodeList | any = '';
  constructor(elRef: ElementRef) {
    this.selectElement = elRef.nativeElement;
  };
  ngOnInit(): void {
    this.spanTag = this.selectElement.querySelectorAll('span');
    for (let data = 0; data <= this.spanTag.length; data++) {
      this.spanElement = this.spanTag[data].style.backgroundColor = 'yellow';
    };
  };
}; 
