import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    let el: ElementRef;
    const directive = new HighlightDirective(el);
    expect(directive).toBeTruthy();
  });
});
