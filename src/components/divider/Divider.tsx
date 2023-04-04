import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React, { FC } from 'react';

export interface DividerProps {
  dividerStyle?: StyleProp<ViewStyle>;
  height?: number;
  thickness?: number;
  color?: string;
}

export const Divider: FC<DividerProps> = ({
  dividerStyle,
  height,
  thickness,
  color,
}) => {
  const addStyle: StyleProp<ViewStyle> = {};
  if (height) {
    addStyle.marginVertical = (height - (thickness ?? 1)) / 2;
  }

  if (thickness) {
    addStyle.height = thickness;
  }

  if (color) {
    addStyle.backgroundColor = color;
  }

  return <View style={StyleSheet.flatten([style.divider, addStyle, dividerStyle])} />;
};

const style = StyleSheet.create({
  divider: {
    alignSelf: 'center',
    backgroundColor: 'black',
    height: 1,
    width: '100%',
  },
});
