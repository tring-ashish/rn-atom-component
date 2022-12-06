import {render, RenderAPI} from '@testing-library/react-native';
import React from 'react';
import {HorizontalProgress} from '../HorizontalProgress';

describe('<HorizontalProgress />', () => {
  let instance: RenderAPI;
  beforeEach(() => {
    const component = <HorizontalProgress />;
    instance = render(component);
  });

  afterEach(() => {
    instance.unmount();
  });

  it('should render component', () => {
    expect(instance).toBeDefined();
  });
});
