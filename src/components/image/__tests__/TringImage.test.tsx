import React from 'react';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import { TringImage } from '../TringImage';
import FastImage from 'react-native-fast-image';

describe('<<< TringImage >>>', () => {
  let instance: RenderAPI;
  const mockFunction = jest.fn();

  beforeEach(() => {
    const element = <TringImage />;
    instance = render(element);
  });

  it('### Check Render Method of TringImage', () => {
    expect(instance).toBeDefined();
  });

  it('### Check Render Method of TringImage name, round', () => {
    expect(render(<TringImage name={'arrow'} type={'round'} />)).toBeDefined();
  });

  it('Should call FastImage onError', () => {
    const element = instance.container.findByType(FastImage);
    fireEvent(element, 'onError');
    expect(mockFunction).toBeTruthy();
  });
});
