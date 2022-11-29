import React, { useMemo, useState } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, LayoutChangeEvent } from 'react-native';

export enum DashedLineAxisType {
    HORIZONTAL,
    VERTICAL,
};

export type DashedLineType = {
    axis?: DashedLineAxisType,
    dashGap?: number,
    dashLength?: number,
    dashThickness?: number,
    dashColor?: string,
    dashStyle: StyleProp<ViewStyle>,
    containerStyle: StyleProp<ViewStyle>,
}

export const DashedLine = ({
    axis = DashedLineAxisType.HORIZONTAL,
    dashGap = 2,
    dashLength = 4,
    dashThickness = 2,
    dashColor = '#000',
    dashStyle,
    containerStyle,
}: DashedLineType) => {
    const [lineLength, setLineLength] = useState(0);

    const isRow = axis === DashedLineAxisType.HORIZONTAL;
    const numOfDashes = Math.ceil(lineLength / (dashGap + dashLength));

    const dashStyles = useMemo(
        () => ({
            width: isRow ? dashLength : dashThickness,
            height: isRow ? dashThickness : dashLength,
            marginRight: isRow ? dashGap : 0,
            marginBottom: isRow ? 0 : dashGap,
            backgroundColor: dashColor,
        }),
        [dashColor, dashGap, dashLength, dashThickness, isRow],
    );

    const onLayout = (event: LayoutChangeEvent) => {
        const { width, height } = event.nativeEvent.layout;
        setLineLength(isRow ? width : height);
    }

    return (
        <View onLayout={onLayout} style={[containerStyle, isRow ? styles.row : styles.column]} >
            {[...Array(numOfDashes)].map((_, i) => {
                return <View key={i} style={[dashStyles, dashStyle]} />;
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
});
