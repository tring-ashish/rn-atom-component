import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import { Spinner } from '../Spinner';

describe('<<< Spinner >>>', () => {
  let instance: RenderAPI;

  beforeEach(() => {
    const element = <Spinner />;
    instance = render(element);
  });

  it('### Check Render Method of Spinner', () => {
    expect(instance).toBeDefined();
  });
});
