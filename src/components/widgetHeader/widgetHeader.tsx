import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  TouchableOpacity,
  ViewStyle,
  Text,
} from 'react-native';
import React, { FC } from 'react';

export type WidgetHeaderProps = {
  leftTitle: string;
  leftTitleStyle?: StyleProp<TextStyle>;
  leftIcon?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  rightTitle?: string;
  rightTitleStyle?: StyleProp<TextStyle>;
  onPressRight?: () => void;
};

export const WidgetHeader: FC<WidgetHeaderProps> = ({
  leftTitle,
  leftTitleStyle,
  leftIcon,
  rightTitle,
  rightTitleStyle,
  onPressRight,
  containerStyle,
}) => {
  const renderLeftElement = () => {
    return (
      <View style={style.leftContainer}>
        {leftIcon && leftIcon()}
        <Text
          style={StyleSheet.flatten([style.leftTitleStyle, leftTitleStyle])}
        >
          {leftTitle}
        </Text>
      </View>
    );
  };

  const renderRightElement = () => {
    return (
      <TouchableOpacity onPress={onPressRight}>
        <Text style={rightTitleStyle}>{rightTitle}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={StyleSheet.flatten([style.container, containerStyle])}>
      {renderLeftElement()}
      {rightTitle && renderRightElement()}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftTitleStyle: {
    marginLeft: 10,
    fontSize: 24,
    lineHeight: 40,
  },
});
