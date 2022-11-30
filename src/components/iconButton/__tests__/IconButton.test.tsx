import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import { IconButton } from '../IconButton';

describe('<<< IconButton >>>', () => {
  let instance: RenderAPI;
  const mockFunction = jest.fn();

  beforeEach(() => {
    const element = <IconButton onPress={mockFunction} icon={mockFunction} />;
    instance = render(element);
  });

  it('### Check Render Method of IconButton', () => {
    expect(instance).toBeDefined();
  });
});
