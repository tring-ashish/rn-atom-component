import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { FC } from 'react';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  displayBackground: boolean;
  displayIcon: boolean;
  imageUrl?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button: FC<ButtonProps> = ({
  title,
  onPress,
  displayBackground,
  displayIcon,
  imageUrl,
  containerStyle,
  textStyle,
}) => {
  return (
      <View>
          {!displayIcon ?
              <TouchableOpacity
                  style={displayBackground && StyleSheet.flatten([style.container, containerStyle])}
                  onPress={onPress}
              >
                  <Text style={StyleSheet.flatten([style.labelStyle, textStyle])}>
                      {title}
                  </Text>
              </TouchableOpacity>
              :
              <TouchableOpacity
                  style={[style.imageButtonContainer, containerStyle]}
                  onPress={onPress}
              >
                  <Text style={StyleSheet.flatten([style.labelStyle, textStyle])}>
                      {title}
                  </Text>
                  {imageUrl &&
                      <Image
                          style={style.tinyLogo}
                          source={{
                              uri: imageUrl,
                          }}
                      />
                  }


              </TouchableOpacity>
          }

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
  imageButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  },
  tinyLogo: {
      width: 30,
      height: 30,
      marginLeft: 10
  },
  labelStyle: {
      textAlign: 'center',
      color: 'black',
      fontSize: 20,
  },
});
