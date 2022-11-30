import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import { InputField } from '../inputField';

describe('<<< InputField >>>', () => {
  let instance: RenderAPI;

  beforeEach(() => {
    const element = <InputField />;
    instance = render(element);
  });

  it('### Check Render Method of InputField', () => {
    expect(instance).toBeDefined();
  });
});
