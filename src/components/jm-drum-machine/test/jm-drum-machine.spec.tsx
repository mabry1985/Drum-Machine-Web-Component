import { newSpecPage } from '@stencil/core/testing';
import { JmDrumMachine } from '../jm-drum-machine';

describe('jm-drum-machine', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JmDrumMachine],
      html: `<jm-drum-machine></jm-drum-machine>`,
    });
    expect(page.root).toEqualHtml(`
      <jm-drum-machine>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jm-drum-machine>
    `);
  });
});
