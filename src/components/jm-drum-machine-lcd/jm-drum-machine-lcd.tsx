import { Component, Host, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'jm-drum-machine-lcd',
  styleUrl: 'jm-drum-machine-lcd.css',
  shadow: true,
})
export class JmDrumMachineLcd {
  @State() audioFileName: string;

  @Listen('jmPadHovered', { target: "body" })
  onDrumPadHovered(event: CustomEvent) {
    if (event.detail && event.detail !== this.audioFileName) {
      this.audioFileName = event.detail;
    }
  }

  render() {
    return (
      <Host>
        <div class="lcd-container">
          <h2 class="header">Drum Machine</h2>
          <p class="audio-file-name">{this.audioFileName}</p>
        </div>
      </Host>
    );
  }
}
