import React, { ReactNode, useEffect, useImperativeHandle } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  TextInputProps,
  View,
  I18nManager,
} from 'react-native';
import { renderNode } from '../utilities';

export interface InputFieldProps
  extends React.ComponentPropsWithRef<typeof TextInput> {
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  disabledInputStyle?: StyleProp<TextStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  leftIcon?: any;
  leftIconContainerStyle?: StyleProp<ViewStyle>;
  rightIcon?: any;
  rightIconContainerStyle?: StyleProp<ViewStyle>;
  labelContainerStyle?: StyleProp<ViewStyle>;
  errorContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  errorProps?: object;
  errorStyle?: StyleProp<TextStyle>;
  errorMessage?: string;
  label?: string | ReactNode;
  labelStyle?: StyleProp<TextStyle>;
  labelProps?: object;
  renderErrorMessage?: boolean;
  inputProps?: TextInputProps;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
}

const renderText = (content: any, defaultProps: any, style: StyleProp<any>) =>
  renderNode(Text, content, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });

const Input: React.ForwardRefRenderFunction<TextInput, InputFieldProps> = (
  {
    containerStyle,
    disabled,
    disabledInputStyle,
    inputContainerStyle,
    leftIcon,
    leftIconContainerStyle,
    rightIcon,
    rightIconContainerStyle,
    labelContainerStyle,
    errorContainerStyle,
    inputStyle,
    errorProps,
    errorStyle,
    errorMessage,
    label,
    labelStyle,
    labelProps,
    renderErrorMessage,
    inputProps,
    onChangeText,
    onSubmitEditing,
  },
  ref: any
) => {
  const inputRef = React.useRef<any>();

  useEffect(() => {
    I18nManager.isRTL && I18nManager.forceRTL(true);
  }, []);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    blur: () => {
      inputRef.current.blur();
    },
    clear: () => {
      inputRef.current.clear();
    },
    isFocused: () => {
      inputRef.current.isFocused();
    },
    setNativeProps: (nativeProps: Partial<TextInputProps>) => {
      inputRef.current.setNativeProps(nativeProps);
    },
  }));

  const hideErrorMessage = !renderErrorMessage && !errorMessage;

  const renderLeftIcon = () => {
    if (!leftIcon) return null;
    return (
      <View
        style={StyleSheet.flatten([
          styles.iconContainer,
          leftIconContainerStyle,
        ])}
      >
        {renderNode(null, leftIcon)}
      </View>
    );
  };

  const renderRightIcon = () => {
    if (!rightIcon) return null;
    return (
      <View
        style={StyleSheet.flatten([
          styles.iconContainer,
          rightIconContainerStyle,
        ])}
      >
        {renderNode(null, rightIcon)}
      </View>
    );
  };

  const renderErrorText = () => (
    <View
      style={StyleSheet.flatten([
        styles.defaultLabelContainer,
        errorContainerStyle,
      ])}
    >
      <Text
        {...errorProps}
        style={StyleSheet.flatten([
          styles.defaultErrorStyle,
          errorStyle && errorStyle,
          hideErrorMessage && styles.hideErrorStyle,
        ])}
      >
        {errorMessage}
      </Text>
    </View>
  );

  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      <View
        style={StyleSheet.flatten([
          styles.defaultLabelContainer,
          labelContainerStyle,
        ])}
      >
        {renderText(
          label,
          { style: labelStyle, ...labelProps },
          styles.defaultLabelStyle
        )}
      </View>
      <View
        style={StyleSheet.flatten([
          styles.defaultInputContainerStyle,
          inputContainerStyle,
        ])}
      >
        {renderLeftIcon()}
        <TextInput
          ref={inputRef}
          underlineColorAndroid="transparent"
          editable={!disabled}
          style={StyleSheet.flatten([
            styles.defaultInputStyle,
            inputStyle,
            disabled && styles.disabledInput,
            disabled && disabledInputStyle,
            I18nManager.isRTL && styles.rtlInputStyle,
          ])}
          onChangeText={onChangeText && onChangeText}
          onSubmitEditing={onSubmitEditing && onSubmitEditing}
          {...inputProps}
        />
        {renderRightIcon()}
      </View>
      {renderErrorText()}
    </View>
  );
};

export const InputField = React.forwardRef(Input);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
  },
  disabledInput: {
    opacity: 0.5,
  },
  iconContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 4,
    marginVertical: 4,
  },
  defaultLabelStyle: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
  },
  defaultInputContainerStyle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: 'grey',
  },
  defaultInputStyle: {
    color: 'black',
    fontSize: 18,
    flex: 1,
    minHeight: 40,
    textAlign: 'left',
  },
  defaultErrorStyle: {
    marginVertical: 5,
    fontSize: 12,
    color: 'red',
  },
  hideErrorStyle: {
    height: 0,
    margin: 0,
    padding: 0,
  },
  rtlInputStyle: {
    textAlign: 'right',
  },
  defaultLabelContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
});
