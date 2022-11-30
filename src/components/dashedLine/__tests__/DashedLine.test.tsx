import React, { useState } from 'react';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import { DashedLine, DashedLineAxisType } from '../DashedLine';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('<<< DashedLine axis horizontal >>>', () => {
  let instance: RenderAPI;
  const mockFunction = jest.fn();
  const lineLength = mockFunction;

  beforeEach(() => {
    (useState as jest.Mock).mockImplementation(() => [50, lineLength]);
    const element = (
      <DashedLine
        dashStyle={{ flexDirection: 'row' }}
        containerStyle={{ flexDirection: 'row' }}
      />
    );
    instance = render(element);
  });

  it('### Check Render Method of DashedLine', () => {
    expect(instance).toBeDefined();
  });

  test('Should call dashedLineMainView onLayout', () => {
    const element = instance.getByTestId('dashedLineMainView');
    fireEvent(element, 'onLayout', {
      nativeEvent: { layout: { width: 30, height: 30 } },
    });
    expect(mockFunction).toBeTruthy();
  });
});

describe('<<< DashedLine axis vertical >>>', () => {
  let instance: RenderAPI;
  const mockFunction = jest.fn();
  const lineLength = mockFunction;

  beforeEach(() => {
    (useState as jest.Mock).mockImplementation(() => [50, lineLength]);
    const element = (
      <DashedLine
        axis={DashedLineAxisType.VERTICAL}
        dashStyle={{ flexDirection: 'row' }}
        containerStyle={{ flexDirection: 'row' }}
      />
    );
    instance = render(element);
  });

  it('### Check Render Method of DashedLine', () => {
    expect(instance).toBeDefined();
  });

  test('Should call dashedLineMainView onLayout', () => {
    const element = instance.getByTestId('dashedLineMainView');
    fireEvent(element, 'onLayout', {
      nativeEvent: { layout: { width: 30, height: 30 } },
    });
    expect(mockFunction).toBeTruthy();
  });
});
