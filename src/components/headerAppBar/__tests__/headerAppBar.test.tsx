import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import { HeaderAppBar } from '../headerAppBar';

describe('<<< HeaderAppBar >>>', () => {
  let instance: RenderAPI;
  const mockFunction = jest.fn();

  beforeEach(() => {
    const component = (
      <HeaderAppBar
        rightIcon={mockFunction}
        centerIcon={mockFunction}
        leftIcon={mockFunction}
      />
    );
    instance = render(component);
  });

  afterEach(() => {
    jest.clearAllMocks();
    instance.unmount();
  });

  it('when render HeaderAppBar ', () => {
    expect(instance).toBeDefined();
  });
});
