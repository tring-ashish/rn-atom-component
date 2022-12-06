import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React, { FC } from 'react';

export interface DividerSolidLineProps {
  dividerStyle?: StyleProp<ViewStyle>;
}

export const DividerSolidLine: FC<DividerSolidLineProps> = ({
  dividerStyle,
}) => {
  return <View style={StyleSheet.flatten([style.divider, dividerStyle])} />;
};

const style = StyleSheet.create({
  divider: {
    alignSelf: 'center',
    backgroundColor: 'black',
    height: 3,
    width: '90%',
  },
});
