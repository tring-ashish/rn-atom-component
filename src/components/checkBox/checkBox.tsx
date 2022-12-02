import React, { useState, FunctionComponent, isValidElement } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TouchableOpacity,
  Image,
} from 'react-native';

interface CheckBoxProps {
  renderIconComponent?: React.ReactElement<{}>;
  renderSelectedIconComponent?: React.ReactElement<{}>;
  selected?: boolean;
  onChange: (isSelected: boolean) => void;
  label?: string;
  btnTestID?: string;
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  disable?: boolean;
  iconRight?: boolean;
  labelStyle?: StyleProp<ViewStyle>;
}

export const CheckBox: FunctionComponent<CheckBoxProps> = ({
  selected = false,
  renderIconComponent,
  renderSelectedIconComponent,
  onChange,
  label,
  btnTestID,
  containerStyle,
  wrapperStyle,
  disable = false,
  iconRight = false,
  labelStyle,
}) => {
  const [isSelected, setIsSelected] = useState(selected);

  const renderIcon = () => {
    if (isSelected && isValidElement(renderSelectedIconComponent))
      return renderSelectedIconComponent;
    if (!isSelected && isValidElement(renderIconComponent))
      return renderIconComponent;
    return isSelected ? (
      <Image source={require('../assets/image/checkedIcon.png')} />
    ) : (
      <Image source={require('../assets/image/unCheckedIcon.png')} />
    );
  };

  return (
    <TouchableOpacity
      testID={btnTestID}
      accessibilityLabel={btnTestID}
      activeOpacity={disable ? 0.5 : 1}
      onPress={() => {
        setIsSelected(!isSelected);
        onChange(isSelected);
      }}
      disabled={disable}
    >
      <View style={wrapperStyle ? wrapperStyle : checkBoxStyle.wrapper}>
        {iconRight && label && (
          <View style={checkBoxStyle.labelContainer}>
            <Text style={labelStyle ? labelStyle : checkBoxStyle.lableStyle}>
              {label}
            </Text>
          </View>
        )}
        <View style={containerStyle ? containerStyle : checkBoxStyle.container}>
          {renderIcon()}
        </View>
        {!iconRight && label && (
          <View
            style={[checkBoxStyle.labelContainer, checkBoxStyle.spaceStyle]}
          >
            <Text style={labelStyle ? labelStyle : checkBoxStyle.lableStyle}>
              {label}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export const checkBoxStyle = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  labelContainer: {
    flex: 1,
    padding: 5,
  },
  lableStyle: {
    color: 'greyLight',
    fontSize: 12,
    marginLeft: 10,
    lineHeight: 18,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceStyle: {
    marginRight: 5,
  },
});
