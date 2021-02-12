import { newSpecPage } from '@stencil/core/testing';
import { JmDrumMachinePad } from '../jm-drum-machine-pad';

describe('jm-drum-machine-pad', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JmDrumMachinePad],
      html: `<jm-drum-machine-pad></jm-drum-machine-pad>`,
    });
    expect(page.root).toEqualHtml(`
      <jm-drum-machine-pad>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jm-drum-machine-pad>
    `);
  });
});
