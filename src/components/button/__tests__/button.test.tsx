import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import { Button } from '../button';

describe('<<< Button >>>', () => {
  let instance: RenderAPI;
  const mockFunction = jest.fn();

  beforeEach(() => {
    const element = <Button title="Button1" onPress={mockFunction} />;
    instance = render(element);
  });

  it('### Check Render Method of Button', () => {
    expect(instance).toBeDefined();
  });
});
