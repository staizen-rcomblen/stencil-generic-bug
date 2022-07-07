import { Component, Event, EventEmitter } from '@stencil/core';
import { Test } from './test';

@Component({
  tag: 'test-component',
  shadow: true,
})
export class TestComponent {
  @Event({ bubbles: false }) works: EventEmitter<Array<Test>>;
  @Event({ bubbles: false }) fails: EventEmitter<Test[]>;
}
