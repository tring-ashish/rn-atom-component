import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import { Divider } from '../Divider';

describe('<<< DividerSolidLine >>>', () => {
  let instance: RenderAPI;
  beforeEach(() => {
    const element = <Divider />;
    instance = render(element);
  });

  it('### Check Render Method of DividerSolidLine', () => {
    expect(instance).toBeDefined();
  });
});
