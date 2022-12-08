import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React, { FC } from 'react';

export type NavigationHeaderProps = {
  leftIcon?: () => void;
  headerIcon: () => void;
  rightIcon?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

export const NavigationHeader: FC<NavigationHeaderProps> = ({
  leftIcon,
  headerIcon,
  rightIcon,
  containerStyle,
}) => {
  return (
    <View style={StyleSheet.flatten([style.container, containerStyle])}>
      {leftIcon && leftIcon()}
      {headerIcon && headerIcon()}
      {rightIcon && rightIcon()}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
