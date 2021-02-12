import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'jm-drum-machine',
  styleUrl: 'jm-drum-machine.css',
  shadow: true,
})
export class JmDrumMachine {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
