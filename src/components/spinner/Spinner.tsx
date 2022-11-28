import {
  View,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import React from 'react';

export enum SpinnerSizeType {
  large = 'large',
  small = 'small',
}

export type SpinnerType = {
  containerStyle?: StyleProp<ViewStyle>;
  color?: string;
  size?: SpinnerSizeType;
};

export const Spinner = ({
  containerStyle,
  color,
  size = SpinnerSizeType.large,
}: SpinnerType) => {
  return (
    <View
      testID={'loading_view'}
      style={StyleSheet.flatten([loadingStateStyle.container, containerStyle])}
    >
      <ActivityIndicator
        testID={'activityIndicator'}
        size={size}
        color={color}
      />
    </View>
  );
};

export const loadingStateStyle = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
