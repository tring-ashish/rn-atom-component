import { View, StyleSheet, TouchableHighlight, Text, ImageBackground, Image, TouchableWithoutFeedback, Platform, Insets } from 'react-native';
import React, { FC, useEffect, useRef, useState } from 'react';
import Video, { OnLoadData, OnProgressData, OnSeekData } from 'react-native-video';

import { SliderHorizontal } from './SliderHorizontal';
import Orientation, { OrientationType } from 'react-native-orientation-locker';
import { HorizontalProgress } from '../horizontalProgress/HorizontalProgress';

export interface VideoPlayerProps {
    url: string;
    onPressClose?:()=>void;
}

const isIOS = Platform.OS === 'ios';

export const VideoPlayer: FC<VideoPlayerProps> = ({ url,onPressClose }) => {

    const DEFAULT_HIT_SLOP: Insets = { top: 10, bottom: 10, left: 10, right: 10 }
    const videoPlayer = useRef<any>(null);
    const timerRef = useRef<any>(null);
    const hideControlRef = useRef<any>(null);
    const videoPauseRef = useRef<any>(null);

    const [paused, setPaused] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [fullScreen, setFullScreen] = useState<boolean>(false);

    useEffect(() => {
        Orientation.lockToPortrait();
        Orientation.addDeviceOrientationListener(changeOrientation);
        return () => {
            Orientation.removeDeviceOrientationListener(changeOrientation);
            Orientation.lockToPortrait();
            videoPauseRef.current && clearTimeout(videoPauseRef.current);
            timerRef.current && clearTimeout(timerRef.current);
            hideControlRef.current && clearTimeout(hideControlRef.current);
        };
    }, []);

    useEffect(() => {
        showControls ? resetControlTimeout() : clearControlTimeout();
    }, [showControls])

    const changeOrientation = (deviceOrientation: OrientationType) => {
        Orientation.getAutoRotateState(rotationLock => {
            if (rotationLock) {
                if (
                    deviceOrientation === OrientationType['LANDSCAPE-LEFT'] ||
                    deviceOrientation === OrientationType['LANDSCAPE-RIGHT']
                ) {
                    Orientation.lockToLandscape();
                    setFullScreen(true);
                } else if (deviceOrientation === OrientationType['PORTRAIT']) {
                    Orientation.lockToPortrait();
                    setFullScreen(false);
                }
            }
        });
    };

    const convertSecondsToHMS = (seconds: number | string) => {
        seconds = Number(seconds);
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor((seconds % 3600) % 60);

        const hrs = h > 0 ? (h < 10 ? `0${h}:` : `${h}:`) : '';
        const mins = m > 0 ? (m < 10 ? `0${m}:` : `${m}:`) : '00:';
        const scnds = s > 0 ? (s < 10 ? `0${s}` : s) : '00';
        return `${hrs}${mins}${scnds}`;
    };

    const setControlTimeout = () => {
        hideControlRef.current = setTimeout(() => {
            setShowControls(false);
        }, 10000);
    }

    const clearControlTimeout = () => {
        hideControlRef.current && clearTimeout(hideControlRef.current);
    }

    const resetControlTimeout = () => {
        clearControlTimeout();
        setControlTimeout();
    }

    const onScreenTouch = () => {
        resetControlTimeout();
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
            showControls && resetControlTimeout();
        } else {
            timerRef.current = setTimeout(() => {
                toggleControls()
                timerRef.current = null;
            }, 130);
        }
    };

    const changeFullScreen = () => {
        fullScreen ? Orientation.lockToPortrait() : Orientation.lockToLandscape();
        setFullScreen(!fullScreen);
    };


    const togglePlayPause = () => {
        showControls && resetControlTimeout();
        setPaused(!paused);
    }

    const toggleControls = () => setShowControls(!showControls);

    const onSeek = (seek: any) => videoPlayer.current?.seek(seek);

    const onProgress = (data: OnProgressData | OnSeekData) => {
        if (!isLoading) {
            setCurrentTime(data.currentTime);
        }
    };

    const onLoad = (data: OnLoadData) => {
        setDuration(Math.floor(data.duration));
        setIsLoading(false);
        showControls && resetControlTimeout();
    };

    const onLoadStart = () => setIsLoading(true);

    const onEnd = () => {
        videoPlayer.current?.seek(duration);
        videoPauseRef.current = setTimeout(() => {
            setPaused(true);
            videoPlayer.current?.seek(0);
        }, 500);
    };

    const renderCloseButton = () => (
        <TouchableHighlight
            underlayColor={'transparent'}
            activeOpacity={0.3}
            style={styles.control}
            onPress={onPressClose}>
            <View>
                <Image source={require('../assets/image/videoPlayerIcons/close_white_icon.png')} />
                {/* {getSvgImages({ name: ImagesName.CloseWhiteIcon, width: 18, height: 18 })} */}
            </View>
        </TouchableHighlight>
    );

    const renderFullScreen = () => {
        const source = fullScreen ? require('../assets/image/videoPlayerIcons/shrink.png') : require('../assets/image/videoPlayerIcons/expand.png');
        return (
            <TouchableHighlight
                underlayColor={'transparent'}
                activeOpacity={0.3}
                onPress={changeFullScreen}
                hitSlop={DEFAULT_HIT_SLOP}
                style={styles.control}>
                <Image source={source} />
            </TouchableHighlight>
        );
    };

    const renderPlaypause = () => {
        const source = paused === true ? require('../assets/image/videoPlayerIcons/play.png') : require('../assets/image/videoPlayerIcons/pause.png');
        return (
            <TouchableHighlight

                underlayColor={'transparent'}
                activeOpacity={0.3}
                style={styles.control}
                onPress={togglePlayPause}>
                <View>
                    <Image source={source} />
                </View>
            </TouchableHighlight>
        )
    };

    const renderTimer = () => (
        <View style={styles.control}>
            <Text style={styles.timerText}>
                {currentTime > duration ? convertSecondsToHMS(duration) : convertSecondsToHMS(currentTime)}
            </Text>
        </View>
    );

    const renderVideo = () => (
        <Video
            source={{ uri: url }}

            paused={paused}
            onEnd={onEnd}
            onLoad={onLoad}
            ref={(ref: Video) => {
                videoPlayer.current = ref;
            }}
            onLoadStart={onLoadStart}
            onProgress={onProgress}
            onSeek={onProgress}
            resizeMode={'contain'}
            repeat={false}
            style={styles.videoContainer}
        />
    );

    const renderTopControls = () => (
        <ImageBackground
            source={require('../assets/image/videoPlayerIcons/topImage.png')}
            style={styles.topContainerStyle}
            imageStyle={[styles.vignette]}
        >
            <View style={styles.topContainer}>
                <View style={styles.closeButtonContainer}>{renderCloseButton()}</View>
                <View style={styles.closeButtonContainer}>{renderFullScreen()}</View>
            </View>
        </ImageBackground>
    )

    const renderBottomControls = () => (
        <ImageBackground
            source={require('../assets/image/videoPlayerIcons/bottomImage.png')}
            style={styles.bottomContainer}
            imageStyle={styles.vignette}
        >
            <View style={styles.seekbarContainer}>
                <SliderHorizontal

                    currentValue={currentTime}
                    seekUpdate={onSeek}
                    endValue={duration}
                    containerStyle={styles.sliderStyle}
                />
            </View>
            <View style={styles.timeContainer}>
                {renderTimer()}
                {renderPlaypause()}
            </View>
        </ImageBackground>
    )

    return (
        <TouchableWithoutFeedback onPress={onScreenTouch}>
            <View style={styles.container}>
                {renderVideo()}
                <View style={styles.videoControls}>
                    {isLoading && <HorizontalProgress />}
                    {showControls && (
                        <>
                            <View style={styles.container}>{renderTopControls()}</View>
                            <View style={styles.container}>{renderBottomControls()}</View>
                        </>
                    )}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    videoContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    topContainerStyle: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'flex-start'
    },
    topContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    closeButtonContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingTop: 0,
    },
    control: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    videoControls: {
        width: '100%',
        height: '100%',
    },
    seekbarContainer: {
        height: 3,
        paddingHorizontal: isIOS ? 20 : 5,
        paddingVertical: 15,
    },
    bottomContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
    },
    timerText: {
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        fontSize: 11,
        textAlign: 'right',
    },
    timeContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingBottom: 15,
    },
    vignette: {
        resizeMode: 'stretch',
    },
    sliderStyle: {
        width: '100%',
        justifyContent: 'flex-end',
        paddingVertical: 10,
    },
})
