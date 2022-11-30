import React, { useState } from 'react';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import { Dropdown } from '../dropDown';
import { FlatList, TouchableOpacity } from 'react-native';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const data = [
  { label: 'One', value: '1' },
  { label: 'Two', value: '2' },
  { label: 'Three', value: '3' },
  { label: 'Four', value: '4' },
  { label: 'Five', value: '5' },
];

describe('<<< Dropdown >>>', () => {
  let instance: RenderAPI;
  const mockFunction = jest.fn();
  const visible = mockFunction;

  beforeEach(() => {
    (useState as jest.Mock).mockImplementation(() => [true, visible]);
    const element = (
      <Dropdown label={'Select'} data={data} onSelect={mockFunction} />
    );
    instance = render(element);
  });

  it('### Check Render Method of Dropdown', () => {
    expect(instance).toBeDefined();
  });

  it('when mainTouchableOpacity onPress', () => {
    const element = instance.getByTestId('mainTouchableOpacity');
    fireEvent(element, 'onPress');
    expect(mockFunction).toBeTruthy();
  });

  it('when renderDropdownTouchableOpacity onPress', () => {
    const element = instance.getByTestId('renderDropdownTouchableOpacity');
    fireEvent(element, 'onPress');
    expect(mockFunction).toBeTruthy();
  });

  test('Should call FlatList renderItem', () => {
    const element = instance.container.findByType(FlatList);
    fireEvent(element, 'renderItem', { item: data[0] });
    expect(mockFunction).toBeTruthy();
  });

  test('Should call TouchableOpacity onPress', () => {
    const element = instance.container.findAllByType(TouchableOpacity)[2];
    fireEvent(element, 'onPress', { item: data[0] });
    expect(mockFunction).toBeTruthy();
  });
});

describe('<<< Dropdown Test>>>', () => {
  let instance: RenderAPI;
  const mockFunction = jest.fn();
  const visible = mockFunction;

  beforeEach(() => {
    (useState as jest.Mock).mockImplementation(() => [true, visible]);
    const element = <Dropdown label={'Select'} data={data} />;
    instance = render(element);
  });

  it('### Check Render Method of Dropdown', () => {
    expect(instance).toBeDefined();
  });

  it('when mainTouchableOpacity onPress', () => {
    const element = instance.getByTestId('mainTouchableOpacity');
    fireEvent(element, 'onPress');
    expect(mockFunction).toBeTruthy();
  });

  it('when renderDropdownTouchableOpacity onPress', () => {
    const element = instance.getByTestId('renderDropdownTouchableOpacity');
    fireEvent(element, 'onPress');
    expect(mockFunction).toBeTruthy();
  });

  test('Should call FlatList renderItem', () => {
    const element = instance.container.findByType(FlatList);
    fireEvent(element, 'renderItem', { item: data[0] });
    expect(mockFunction).toBeTruthy();
  });

  test('Should call TouchableOpacity onPress', () => {
    const element = instance.container.findAllByType(TouchableOpacity)[2];
    fireEvent(element, 'onPress', { item: data[0] });
    expect(mockFunction).toBeTruthy();
  });
});

describe('<<< Dropdown Test 2>>>', () => {
  let instance: RenderAPI;
  const mockFunction = jest.fn();
  const visible = mockFunction;

  beforeEach(() => {
    (useState as jest.Mock).mockImplementation(() => [false, visible]);
    const element = <Dropdown label={'Select'} data={data} />;
    instance = render(element);
  });

  it('### Check Render Method of Dropdown', () => {
    expect(instance).toBeDefined();
  });

  it('when mainTouchableOpacity onPress', () => {
    const element = instance.getByTestId('mainTouchableOpacity');
    fireEvent(element, 'onPress');
    expect(mockFunction).toBeTruthy();
  });
});
