import { Component, Host, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'jm-drum-machine-lcd',
  styleUrl: 'jm-drum-machine-lcd.css',
  shadow: true,
})
export class JmDrumMachineLcd {
  @Prop() AudioFileName: string;

  @Listen('jmPadHovered', { target: "body" })
  onDrumPadHovered(event: CustomEvent) {
    if (event.detail && event.detail !== this.AudioFileName) {
      this.AudioFileName = event.detail;
    }
  }

  render() {
    return (
      <Host>
        <div class="lcd-container">
          <h2 class="header">Drum Machine</h2>
          <p class="audio-file-name">{this.AudioFileName}</p>
        </div>
      </Host>
    );
  }
}
