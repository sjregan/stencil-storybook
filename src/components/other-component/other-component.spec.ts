import { newSpecPage } from '@stencil/core/testing';
import { setupSpec, getComponentNameFromFilename } from '../../utils/tests/setup';
import { OtherComponent } from './other-component';

const componentName = getComponentNameFromFilename(__filename);

describe(componentName, () => {
  it('default', async () => {
    const { component } = await setupSpec(OtherComponent);
    expect(component.outerHTML).toMatchSnapshot();
  });

  it('vs. default manually', async () => {
    const { root } = await newSpecPage({
      components: [OtherComponent],
      html: `<${componentName}></${componentName}>`,
    });
    expect(root).toMatchSnapshot();
  });
});
