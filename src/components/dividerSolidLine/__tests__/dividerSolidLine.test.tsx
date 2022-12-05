import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import { DividerSolidLine } from '../dividerSolidLine';

describe('<<< DividerSolidLine >>>', () => {
  let instance: RenderAPI;
  beforeEach(() => {
    const element = <DividerSolidLine />;
    instance = render(element);
  });

  it('### Check Render Method of DividerSolidLine', () => {
    expect(instance).toBeDefined();
  });
});
