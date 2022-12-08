import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface MultipleSelectListDataProps {
  id: number;
  title: string;
}

export interface MultipleSelectListProps {
  data: Array<MultipleSelectListDataProps>;
  onPress?: () => void;
  mainContainerStyle?: StyleProp<ViewStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  selectedLabelViewStyle?: StyleProp<ViewStyle>;
  selectedLabelStyle?: StyleProp<TextStyle>;
  notSelectedLabelViewStyle?: StyleProp<ViewStyle>;
  notSelectedLabelStyle?: StyleProp<TextStyle>;
}

export const MultipleSelectList: FC<MultipleSelectListProps> = ({
  data,
  onPress,
  mainContainerStyle,
  itemContainerStyle,
  selectedLabelViewStyle,
  selectedLabelStyle,
  notSelectedLabelViewStyle,
  notSelectedLabelStyle,
}) => {
  const [renderData, setRenderData] = useState(data);

  const onPressHandler = (item: {
    id?: number;
    title?: string;
    selected: any;
  }) => {
    let renderNewData = [...renderData];
    for (let render of renderNewData) {
      if (render.id === item.id) {
        render.selected = render.selected == null ? true : !render.selected;
        break;
      }
    }
    setRenderData(renderNewData);
    onPress && onPress();
  };

  useEffect(() => {
    setRenderData(data);
  }, []);

  return (
    <View style={mainContainerStyle}>
      <FlatList
        data={renderData}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onPressHandler(item)}
            style={StyleSheet.flatten([
              styles.itemContainer,
              itemContainerStyle,
            ])}
          >
            <View
              style={
                item.selected === true
                  ? StyleSheet.flatten([
                      styles.selectedView,
                      selectedLabelViewStyle,
                    ])
                  : StyleSheet.flatten([
                      styles.notSelectedView,
                      notSelectedLabelViewStyle,
                    ])
              }
            >
              <Text
                style={
                  item.selected === true
                    ? selectedLabelStyle
                    : notSelectedLabelStyle
                }
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
  },
  selectedView: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#406073',
  },
  notSelectedView: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#A9A8A8',
  },
});
