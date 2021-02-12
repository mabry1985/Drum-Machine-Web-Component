import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jm-drum-machine-lcd',
  styleUrl: 'jm-drum-machine-lcd.css',
  shadow: true,
})
export class JmDrumMachineLcd {
  @Prop() AudioFileName: string;

  render() {
    return (
      <Host>
        <div class="lcd-container">
          <h2 class="header">Drum Machine</h2>
          <p class="audio-file-name">test{this.AudioFileName}</p>
        </div>
      </Host>
    );
  }
}
