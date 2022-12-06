import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { FC } from 'react'

interface WrappedListTypeProps {
    title: string,
    selected: boolean,
    id: number
}
interface WrappedLabelProps {
    data: Array<WrappedListTypeProps>,
    onPress: (index: number) => void;
}

export const WrappedList: FC<WrappedLabelProps> = ({
    data,
    onPress,
}) => {
    return (
        <View style={styles.mainContainer}>
            {data.map((item, index) => (
                <TouchableOpacity activeOpacity={0.8} onPress={() => onPress(index)}
                    style={styles.container}
                     key={index}>
                    <Text style={styles.labelStyle}>{item.title}</Text>
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
    },
    labelStyle: {
        fontSize: 16,
        lineHeight: 40,
        textAlign: 'left',
        color: 'primaryGrey',
    }
});
