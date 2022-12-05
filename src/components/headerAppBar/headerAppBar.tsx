import React, { FunctionComponent } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export interface HeaderAppBarProps {
  onPressRightIcon?: () => void;
  onPressLeftIcon?: () => void;
  rightIcon: () => void;
  centerIcon: () => void;
  leftIcon: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export const HeaderAppBar: FunctionComponent<HeaderAppBarProps> = ({
  onPressRightIcon,
  onPressLeftIcon,
  rightIcon,
  centerIcon,
  leftIcon,
  containerStyle,
}) => {
  const renderLeftComponent = () => {
    return (
      <TouchableOpacity onPress={onPressLeftIcon}>
        <View style={styles.itemContainer}>{leftIcon && leftIcon()}</View>
      </TouchableOpacity>
    );
  };

  const renderRightComponent = () => {
    return (
      <TouchableOpacity onPress={onPressRightIcon}>
        <View style={styles.rightItemContainer}>
          {rightIcon && rightIcon()}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={StyleSheet.flatten([styles.containerStyle, containerStyle])}>
      {renderRightComponent()}
      <View style={styles.titleContainerWrapper}>
        {centerIcon && centerIcon()}
      </View>
      {renderLeftComponent()}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    height: 55,
    paddingHorizontal: 0.04 * width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  titleContainerWrapper: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    height: 30,
    width: 140,
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rightItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
