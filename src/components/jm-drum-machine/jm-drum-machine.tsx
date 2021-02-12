import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'jm-drum-machine',
  styleUrl: 'jm-drum-machine.css',
  shadow: true,
})
export class JmDrumMachine {
  @State() audioFileNamesArray: string[];
  @Prop() audioFileNames: string;

  componentWillLoad() {
    this.audioFileNamesArray = this.convertFileNamesToArray(this.audioFileNames);
  }

  convertFileNamesToArray(fileNames: string) {
    return fileNames.split(' ');
  }

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
