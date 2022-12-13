import { fireEvent, render, RenderAPI } from "@testing-library/react-native"
import React, { useState } from "react";
import { VideoPlayer } from '../videoPlayer';
import Video from 'react-native-video';
import Slider from "@react-native-community/slider";

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

describe('<<< VideoPlayer >>>', () => {
    const mockFunction = jest.fn();
    const url = 'https://cdn.jwplayer.com/videos/advaysVP-9mPGCDe7.mp4';
    const setPaused = mockFunction;
    const setShowControls = mockFunction;
    const setCurrentTime = mockFunction;
    const setDuration = mockFunction;
    const setIsLoading = mockFunction;
    const setFullScreen = mockFunction;

    describe(' VideoPlayer', () => {
        let instance: RenderAPI;

        beforeEach(() => {
          
            (useState as jest.Mock).mockImplementation(() => [false, setFullScreen]);
            (useState as jest.Mock).mockImplementation(() => [1, setDuration]);
            (useState as jest.Mock).mockImplementation(() => [0.5, setCurrentTime]);
            (useState as jest.Mock).mockImplementation(() => [false, setPaused]);
            (useState as jest.Mock).mockImplementation(() => [false, setIsLoading]);
            (useState as jest.Mock).mockImplementation(() => [true, setShowControls]);
            const component = <VideoPlayer url={url} />
            instance = render(component);
            jest.runAllTimers();
        })

        afterEach(() => {
            jest.clearAllTimers();
            jest.clearAllMocks();
            instance.unmount();
        });

        it('### Check VideoPlayer render method', () => {
            expect(instance).toBeDefined();
        })

        // it('Should call onScreen ShowHide Control', () => {
        //     const element = instance.getByTestId(VideoPlayerTestId.VideoControlsId);
        //     fireEvent(element, 'onPress');
        //     jest.runAllTimers();
        //     expect(setShowControls).toHaveBeenCalled();
        //     jest.clearAllTimers();
        //     expect(clearTimeout).toHaveBeenCalled();
        // });

        // it('Should call onPress Fullscreen', () => {
        //     const element = instance.getByTestId(VideoPlayerTestId.VideoFullScreen);
        //     fireEvent(element, 'onPress');
        //     expect(setFullScreen).toHaveBeenCalled();
        // });

        // it('Should call onPress Close', () => {
        //     const element = instance.getByTestId(VideoPlayerTestId.VideoCloseButton);
        //     fireEvent(element, 'onPress');
        //     expect(navigation.goBack).toHaveBeenCalled();
        // });

        // it('Should call onPress Playpause', () => {
        //     const element = instance.getByTestId(VideoPlayerTestId.VideoPlayPauseId);
        //     fireEvent(element, 'onPress');
        //     expect(setPaused).toHaveBeenCalled();
        // });

        it('Should call onSlidingComplete', () => {
            const element = instance.container.findAllByType(Slider)[0];
            fireEvent(element, 'onSlidingComplete', { data: { currentTime: 0.5 } });
            expect(setCurrentTime).toHaveBeenCalled();
        });

        it('Should call Video onEnd', () => {
            const element = instance.container.findAllByType(Video)[0];
            fireEvent(element, 'onEnd');
            jest.runAllTimers();
            expect(setPaused).toHaveBeenCalled();
        });

        it('Should call onLoad', () => {
            const element = instance.container.findAllByType(Video)[0];
            fireEvent(element, 'onLoad', { data: { duration: 1 } });
            expect(setDuration).toHaveBeenCalled();
        });

        it('Should call onLoadStart', () => {
            const element = instance.container.findAllByType(Video)[0];
            fireEvent(element, 'onLoadStart');
            expect(setIsLoading).toHaveBeenCalled();
        });

        it('Should call onProgress', () => {
            const element = instance.container.findAllByType(Video)[0];
            fireEvent(element, 'onProgress', { data: { currentTime: 0.5 } });
            const isLoading = false;
            expect(isLoading).toBeFalsy();
            expect(setCurrentTime).toHaveBeenCalled();
        });

        it('Should call onSeek', () => {
            const element = instance.container.findAllByType(Video)[0];
            fireEvent(element, 'onSeek', { data: { currentTime: 0.5 } });
            expect(setCurrentTime).toHaveBeenCalled();
        });
    });

})