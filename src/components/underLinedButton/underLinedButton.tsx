import React, { FunctionComponent } from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TextProps,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export enum textDecorationStyleType {
  solid = 'solid',
  double = 'double',
  dotted = 'dotted',
  dashed = 'dashed',
}

export interface UnderLinedButtonProps extends TextProps {
  onPress: () => void;
  underline: boolean;
  underlineColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  textDecorationLineStyle?: textDecorationStyleType;
}

export const UnderLinedButton: FunctionComponent<UnderLinedButtonProps> = ({
  children,
  onPress,
  underline,
  underlineColor,
  containerStyle,
  textStyle,
  textDecorationLineStyle,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <Text
        style={[
          underline && {
            textDecorationLine: 'underline',
            textDecorationColor: underlineColor ? underlineColor : 'black',
            textDecorationStyle: textDecorationLineStyle
              ? textDecorationLineStyle
              : 'solid',
          },
          textStyle,
        ]}
        {...props}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};
