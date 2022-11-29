import React, { FC, ReactElement, useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  ListRenderItem,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface DropDownItemProps {
  label: string;
  value: string;
}

interface DropDownProps {
  label: string;
  data: Array<DropDownItemProps>;
  onSelect?: (item: { label: string; value: string }) => void;
  mainContainerStyle?: StyleProp<ViewStyle>;
  listContainerStyle?: StyleProp<ViewStyle>;
}

export const Dropdown: FC<DropDownProps> = ({
  label,
  data,
  onSelect,
  mainContainerStyle,
  listContainerStyle,
}) => {
  const DropdownButton = useRef<any>();

  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<DropDownItemProps | undefined>(
    undefined
  );
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton.current.measure(
      (_fx: any, _fy: any, _w: any, h: any, _px: any, py: any) => {
        setDropdownTop(py + h);
      }
    );
    setVisible(true);
  };

  const onItemPress = (item: DropDownItemProps) => {
    setSelected(item);
    if (onSelect) {
      onSelect(item);
    }
    setVisible(false);
  };

  const renderItem: ListRenderItem<DropDownItemProps> = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={StyleSheet.flatten([styles.overlay, mainContainerStyle])}
          onPress={() => setVisible(false)}
        >
          <View
            style={StyleSheet.flatten([
              styles.dropdown,
              listContainerStyle,
              { top: dropdownTop },
            ])}
          >
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>
        {(selected && selected.label) || label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    height: 50,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});
