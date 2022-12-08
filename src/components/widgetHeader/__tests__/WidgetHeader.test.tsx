import { render, RenderAPI } from '@testing-library/react-native';
import React from 'react';
import { WidgetHeader } from '../widgetHeader';

describe('<<< WidgetHeader >>>', () => {
  let instance: RenderAPI;
  const mockFunction = jest.fn();

  beforeEach(() => {
    const component = (
      <WidgetHeader
        leftTitle={'leftTitle'}
        rightTitle={'rightTitle'}
        leftIcon={mockFunction}
      />
    );
    instance = render(component);
  });

  afterEach(() => {
    jest.clearAllMocks();
    instance.unmount();
  });

  it('### Check WidgetHeader', () => {
    expect(instance).toBeDefined();
  });
});
