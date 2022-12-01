import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import { Button } from '../button';

describe('<<< Button >>>', () => {
  let instance: RenderAPI;
  const mockFunction = jest.fn();

  beforeEach(() => {
    const element = <Button title="Button1" onPress={mockFunction} displayBackground={false} displayIcon={false} />;
    instance = render(element);
  });

  it('### Check Render Method of Button', () => {
    expect(instance).toBeDefined();
  });

  it('### Check Render Method of Button', () => {
    expect(render(<Button title="Button1" onPress={mockFunction} displayBackground={true} displayIcon={true} imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBR3L4yel5z6mk5aROTKu9TfVE8fCa3U1g37rdj-ZCTQ&s'}/>)).toBeDefined();
  });

  it('### Check Render Method of Button', () => {
    expect(render(<Button title="Button1" onPress={mockFunction} displayBackground={true} displayIcon={false} />)).toBeDefined();
  });
});
