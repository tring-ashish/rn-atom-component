import Slider from '@react-native-community/slider';
import React, { FC } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, Platform } from 'react-native';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';


export interface SliderHorizontalProps {
    initialValue?: number;
    endValue?: number;
    step?: number;
    seekUpdate?: (value: number) => void;
    currentValue?: number;
    containerStyle?: StyleProp<ViewStyle>;
    testId?: string;
}
const isIOS = Platform.OS === 'ios';
export const SliderHorizontal: FC<SliderHorizontalProps> = ({ initialValue = 0.0, endValue = 1.0, seekUpdate, currentValue = 0, containerStyle, testId, step = 0.1 }) => {

    const onSeek = (value: number) => {
        seekUpdate && seekUpdate(value);
    }

    return (
        <View style={StyleSheet.flatten([styles.container, containerStyle, styles.sliderContainer])}>
            <NativeViewGestureHandler
                disallowInterruption={true}
                enabled
                shouldActivateOnStart={true}>
                <Slider
                testID={testId}
                    style={[styles.sliderStyle, isIOS && styles.directionStyle]}
                    minimumValue={initialValue}
                    maximumValue={endValue}
                    step={step}
                    minimumTrackTintColor={'#FFFFFF'}
                    maximumTrackTintColor={'#666666'}
                    thumbTintColor={'#FFFFFF'}
                    value={currentValue > endValue ? endValue : currentValue}
                    tapToSeek
                    inverted={isIOS ? false : true}
                    onSlidingComplete={(value: any) => {
                        onSeek(value);
                    }}
                />
            </NativeViewGestureHandler>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    sliderStyle: {
        width: isIOS ? '200%' : '100%',
        height: 30,
        alignSelf: 'center'
    },
    directionStyle: {
        direction: 'ltr',
    },
    sliderContainer: {
        transform: [{ scaleX: isIOS ? 0.5 : 1 }, { scaleY: isIOS ? 0.5 : 1 }]
    }
});
