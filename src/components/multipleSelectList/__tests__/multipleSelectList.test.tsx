import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import { MultipleSelectList } from '../multipleSelectList';

const multipleListData = [
  {
    id: 1,
    title: 'Sile',
  },
  {
    id: 2,
    title: 'Clementia',
  },
  {
    id: 3,
    title: 'Brita',
  },
  {
    id: 4,
    title: 'Duke',
  },
  {
    id: 5,
    title: 'Hedvig',
  },
  {
    id: 6,
    title: 'Paulie',
  },
  {
    id: 7,
    title: 'Munmro',
  },
  {
    id: 8,
    title: 'Dyanna',
  },
  {
    id: 9,
    title: 'Shanta',
  },
  {
    id: 10,
    title: 'Bambi',
  },
];

describe('<<< MultipleSelectList >>>', () => {
  let instance: RenderAPI;
  beforeEach(() => {
    const element = <MultipleSelectList data={multipleListData} />;
    instance = render(element);
  });

  it('### Check Render Method of MultipleSelectList', () => {
    expect(instance).toBeDefined();
  });
});
