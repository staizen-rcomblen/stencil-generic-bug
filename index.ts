/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'array-shorthand-bug';




export declare interface TestComponent extends Components.TestComponent {
  /**
   *  
   */
  missingGenericArgument: EventEmitter<CustomEvent<Array<T>>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'test-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class TestComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['missingGenericArgument']);
  }
}
