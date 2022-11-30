import React from 'react';
import { Text } from 'react-native';
import renderNode from '../renderNode';

const mockFunction = jest.fn();

describe('<<< utils >>>', () => {
  it('### Check renderNode toBeDefined', () => {
    expect(renderNode).toBeDefined();
  });

  it('### Check renderNode toBeTruthy', () => {
    expect(renderNode(Text, 'content', { flex: 1 })).toBeTruthy();
  });

  it('### Check renderNode content not present', () => {
    expect(renderNode(Text, { flex: 1 })).toBeTruthy();
  });

  it('### Check renderNode content false', () => {
    expect(renderNode(Text, false, { flex: 1 })).toBe(null);
  });

  it('### Check renderNode content true', () => {
    expect(renderNode(Text, true, { flex: 1 })).toBeTruthy();
  });

  it('### Check renderNode content function', () => {
    expect(renderNode(Text, mockFunction, { flex: 1 })).toBe(undefined);
  });

  it('### Check renderNode content string', () => {
    expect(renderNode(Text, 'mockFunction', { flex: 1 })).toBeTruthy();
  });

  it('### Check renderNode content empty string', () => {
    expect(renderNode(Text, '', { flex: 1 })).toBe(null);
  });

  it('### Check renderNode content number', () => {
    expect(renderNode(Text, 12, { flex: 1 })).toBeTruthy();
  });

  it('### Check renderNode <Text>', () => {
    expect(renderNode(Text, <Text />, { flex: 1 })).toBeTruthy();
  });
});
