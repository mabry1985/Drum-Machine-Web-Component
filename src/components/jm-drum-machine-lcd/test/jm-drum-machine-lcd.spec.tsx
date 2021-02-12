import { newSpecPage } from '@stencil/core/testing';
import { JmDrumMachineLcd } from '../jm-drum-machine-lcd';

describe('jm-drum-machine-lcd', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JmDrumMachineLcd],
      html: `<jm-drum-machine-lcd></jm-drum-machine-lcd>`,
    });
    expect(page.root).toEqualHtml(`
      <jm-drum-machine-lcd>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jm-drum-machine-lcd>
    `);
  });
});
