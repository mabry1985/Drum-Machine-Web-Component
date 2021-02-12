import { newE2EPage } from '@stencil/core/testing';

describe('jm-drum-machine-pad', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jm-drum-machine-pad></jm-drum-machine-pad>');

    const element = await page.find('jm-drum-machine-pad');
    expect(element).toHaveClass('hydrated');
  });
});
