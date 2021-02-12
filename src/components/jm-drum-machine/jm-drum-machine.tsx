import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'jm-drum-machine',
  styleUrl: 'jm-drum-machine.css',
  shadow: true,
})
export class JmDrumMachine {
  @State() audioFileNamesArray = ["closed-hh-01.wav", "kick-01.wav", "kick-02.wav", "open-hh-01.wav", "snare-01.wav", "snare-02.wav", "tom-01.wav", "tom-02.wav"];

  render() {
    return (
      <Host>
        <div class="drum-machine-container">
          <div class="controls-container">
            <jm-drum-machine-lcd />
          <div class="mock-speaker-container">
            <div class="mock-speaker-slot" />
            <div class="mock-speaker-slot" />
            <div class="mock-speaker-slot" />
            <div class="mock-speaker-slot" />
            <div class="mock-speaker-slot" />
            <div class="mock-speaker-slot" />
            <div class="mock-speaker-slot" />
            <div class="mock-speaker-slot" />
            <div class="mock-speaker-slot" />
            <div class="mock-speaker-slot" />
          </div>
          </div>
          <div class="drum-pad-container">
            {this.audioFileNamesArray.map(fileName => (
              <div>
                <jm-drum-machine-pad audioFileName={fileName}></jm-drum-machine-pad>
              </div>
            ))}
          </div>
        </div>
      </Host>
    );
  }
}
