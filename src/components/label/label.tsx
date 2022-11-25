import React, { FunctionComponent } from 'react';
import { StyleProp, Text, TextStyle, TextProps } from 'react-native';

export interface LabelProps extends TextProps {
  style?: StyleProp<TextStyle>;
}
export const Label: FunctionComponent<LabelProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <Text style={style} {...props}>
      {children}
    </Text>
  );
};
