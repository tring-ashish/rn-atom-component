import { render, RenderAPI } from '@testing-library/react-native';
import { NavigationHeader } from '../navigationHeader';
import React from 'react';

describe('<<< NavigationHeader >>>', () => {
  let instance: RenderAPI;
  const mockFunction = jest.fn();

  beforeEach(() => {
    const component = (
      <NavigationHeader
        leftIcon={mockFunction}
        headerIcon={mockFunction}
        rightIcon={mockFunction}
      />
    );
    instance = render(component);
  });

  afterEach(() => {
    jest.clearAllMocks();
    instance.unmount();
  });

  it('### Check NavigationHeader', () => {
    expect(instance).toBeDefined();
  });
});
