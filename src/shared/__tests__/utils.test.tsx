import { isNonEmptyArray, isNotEmpty, isObjectNonEmpty } from '../utils';

const arrayData = [
  { label: 'One', value: '1' },
  { label: 'Two', value: '2' },
  { label: 'Three', value: '3' },
  { label: 'Four', value: '4' },
  { label: 'Five', value: '5' },
];

const objectData = {
  label: 'One',
  value: '1',
};

describe('<<< utils >>>', () => {
  it('### Check isObjectNonEmpty', () => {
    expect(isObjectNonEmpty).toBeDefined();
  });

  it('### Check isObjectNonEmpty true', () => {
    expect(isObjectNonEmpty(objectData)).toBeTruthy();
  });

  it('### Check isObjectNonEmpty False', () => {
    expect(isObjectNonEmpty({})).toBeFalsy();
  });

  it('### Check isNotEmpty', () => {
    expect(isNotEmpty).toBeDefined();
  });

  it('### Check isNotEmpty true', () => {
    expect(isNotEmpty('Example')).toBeTruthy();
  });

  it('### Check isNotEmpty False', () => {
    expect(isNotEmpty('')).toBeFalsy();
  });

  it('### Check isNonEmptyArray', () => {
    expect(isNonEmptyArray).toBeDefined();
  });

  it('### Check isNonEmptyArray true', () => {
    expect(isNonEmptyArray(arrayData)).toBeTruthy();
  });

  it('### Check isNonEmptyArray False', () => {
    expect(isNonEmptyArray([])).toBeFalsy();
  });
});
