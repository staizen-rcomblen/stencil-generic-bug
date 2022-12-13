import { Component, Event, EventEmitter } from '@stencil/core';
import { Test } from './test';

@Component({
  tag: 'test-component',
  shadow: true,
})
export class TestComponent<T> {
  @Event({ bubbles: false }) missingGenericArgument: EventEmitter<Array<T>>;
}
