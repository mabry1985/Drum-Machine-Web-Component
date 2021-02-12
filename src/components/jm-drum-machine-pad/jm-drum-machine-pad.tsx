import { Component, getAssetPath, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'jm-drum-machine-pad',
  styleUrl: 'jm-drum-machine-pad.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class JmDrumMachinePad {
  @State() pressed: boolean = false;
  @Prop() audioFileName: string;
  @Prop() title: string;

  onPadClick = () => {
    console.log('pad clicked', this.audioFileName);
    this.pressed = true;
    new Audio(getAssetPath(`./assets/${this.audioFileName}`)).play();
    setTimeout(() => (this.pressed = false), 150);
  };

  render() {
    return (
      <Host>
        <h1>{this.title}</h1>
        <div class={this.pressed ? 'pressed drum-pad' : 'drum-pad'} onClick={this.onPadClick}></div>
      </Host>
    );
  }
}
