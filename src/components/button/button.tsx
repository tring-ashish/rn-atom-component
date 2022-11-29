import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { FC } from 'react';

interface ButtonProps {
  title: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button: FC<ButtonProps> = ({
  title,
  onPress,
  containerStyle,
  textStyle,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={StyleSheet.flatten([style.container, containerStyle])}
        onPress={onPress}
      >
        <Text style={StyleSheet.flatten([style.labelStyle, textStyle])}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  labelStyle: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
});
