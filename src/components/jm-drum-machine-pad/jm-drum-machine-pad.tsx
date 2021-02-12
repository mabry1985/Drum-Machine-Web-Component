import { Component, getAssetPath, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'jm-drum-machine-pad',
  styleUrl: 'jm-drum-machine-pad.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class JmDrumMachinePad {
  @State() pressed: boolean = false;
  @Prop() audioFileName: string;

  @Event({ bubbles: true, composed: true }) jmPadHovered: EventEmitter<string>;

  onPadClick = () => {
    console.log('pad clicked', this.audioFileName);
    this.pressed = true;
    new Audio(getAssetPath(`./assets/${this.audioFileName}`)).play();
    setTimeout(() => (this.pressed = false), 150);
  };
  
  onPadHover = (audioFileName: string) => {
    console.log(audioFileName);
    this.jmPadHovered.emit(audioFileName);
  }

  render() {
    return (
      <Host>
        <div class={this.pressed ? 'pressed drum-pad' : 'drum-pad'} onClick={this.onPadClick}
        onMouseEnter={() => this.onPadHover(this.audioFileName)}></div>
      </Host>
    );
  }
}
