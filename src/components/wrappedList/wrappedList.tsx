import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle, } from 'react-native'
import React, { FC } from 'react'

interface WrappedListTypeProps {
    title: string,
    selected: boolean,
    id: number
}
interface WrappedLabelProps {
    data: Array<WrappedListTypeProps>;
    selectedStyle?: StyleProp<ViewStyle>;
    selectedTextStyle?: StyleProp<TextStyle>;
    unselectedStyle?: StyleProp<ViewStyle>;
    unSelectedTextStyle?: StyleProp<TextStyle>;
    onPress: (index: number) => void;
}

export const WrappedList: FC<WrappedLabelProps> = ({
    data,
    selectedStyle,
    selectedTextStyle,
    unselectedStyle,
    unSelectedTextStyle,
    onPress,
}) => {
    return (
        <View style={styles.mainContainer}>
            {data.map((item, index) => (
                <TouchableOpacity activeOpacity={0.8} onPress={() => onPress(index)}
                    style={StyleSheet.flatten([styles.container, item.selected ? selectedStyle : unselectedStyle])}
                    key={index}>
                    <Text
                        style={StyleSheet.flatten([styles.labelStyle, item.selected ? selectedTextStyle : unSelectedTextStyle])}
                        children={item.title}
                    />
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 10,
    },
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginHorizontal: 6,
        marginVertical: 5,
        backgroundColor: '#C3C3C3',
    },
    labelStyle: {
        fontSize: 16,
        lineHeight: 40,
        textAlign: 'left',
        color: 'primaryGrey',
    }
});
