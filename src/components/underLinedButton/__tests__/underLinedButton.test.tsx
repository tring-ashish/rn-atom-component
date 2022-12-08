import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import { textDecorationStyleType, UnderLinedButton } from '../underLinedButton';
import { StyleSheet } from 'react-native';

describe('<<< underLinedButton >>>', () => {
  let instance: RenderAPI;
  beforeEach(() => {
    const element = (
      <UnderLinedButton
        containerStyle={styles.underLinedButtonContainer}
        children={'Submit'}
        onPress={() => console.log('Submit')}
        underline={true}
        underlineColor={'red'}
        textDecorationLineStyle={textDecorationStyleType.dashed}
      />
    );
    instance = render(element);
  });

  it('### Check Render Method of underLinedButton1', () => {
    expect(instance).toBeDefined();
  });

  it('### Check Render Method of underLinedButton2', () => {
    expect(
      render(
        <UnderLinedButton
          containerStyle={styles.underLinedButtonContainer}
          children={'Submit'}
          onPress={() => console.log('Submit')}
          underline={true}
        />
      )
    ).toBeDefined();
  });

  it('### Check Render Method of underLinedButton3', () => {
    expect(
      render(
        <UnderLinedButton
          containerStyle={styles.underLinedButtonContainer}
          children={'Submit'}
          onPress={() => console.log('Submit')}
          underline={false}
        />
      )
    ).toBeDefined();
  });
});

const styles = StyleSheet.create({
  underLinedButtonContainer: {
    margin: 100,
  },
});
