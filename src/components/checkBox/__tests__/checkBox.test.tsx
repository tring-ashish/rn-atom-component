import React, { useState } from 'react';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import { CheckBox } from '../checkBox';
import { TouchableOpacity } from 'react-native';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

describe('<<<CheckBox>>>', () => {
    let instance: RenderAPI;
    const mockFunction = jest.fn();
    const setIsSelected = mockFunction;

    beforeEach(() => {
        (useState as jest.Mock).mockImplementation(() => [false, setIsSelected]);
        const element = <CheckBox onChange={mockFunction} />;
        instance = render(element);
    });

    it('### Check Render Method of CheckBox', () => {
        expect(instance).toBeDefined();
    });

    it('Should call onPress ', () => {
        const element = instance.container.findByType(TouchableOpacity);
        fireEvent(element, 'onPress');
        expect(mockFunction).toHaveBeenCalled();
    });
});

describe('<<<CheckBox Test 1>>>', () => {
    let instance: RenderAPI;
    const mockFunction = jest.fn();
    const setIsSelected = mockFunction;
    const mockString = 'test-string';

    beforeEach(() => {
        (useState as jest.Mock).mockImplementation(() => [true, setIsSelected]);
        const element = <CheckBox
            onChange={mockFunction}
            disable={true}
            selected={true}
            containerStyle={{}}
            wrapperStyle={{}}
            label={mockString}
            labelStyle={{}}
            iconRight={true}
            renderSelectedIconComponent={<></>}
        />;
        instance = render(element);
    });

    it('### Check Render Method of CheckBox when disable is true', () => {
        expect(instance).toBeDefined();
    });
});

describe('<<<CheckBox Test 2>>>', () => {
    let instance: RenderAPI;
    const mockFunction = jest.fn();
    const setIsSelected = mockFunction;
    const mockString = 'test-string';

    beforeEach(() => {
        (useState as jest.Mock).mockImplementation(() => [false, setIsSelected]);
        const element = <CheckBox
            onChange={mockFunction}
            disable={true}
            selected={true}
            iconRight={true}
            label={mockString}
            renderIconComponent={<></>}
        />;
        instance = render(element);
    });

    it('### Check Render Method of CheckBox when disable and selected is true', () => {
        expect(instance).toBeDefined();
    });
});

describe('<<<CheckBox Test 3>>>', () => {
    let instance: RenderAPI;
    const mockFunction = jest.fn();
    const setIsSelected = mockFunction;
    const mockString = 'test-string';

    beforeEach(() => {
        (useState as jest.Mock).mockImplementation(() => [true, setIsSelected]);
        const element = <CheckBox
            onChange={mockFunction}
            disable={true}
            selected={true}
            label={mockString}
        />;
        instance = render(element);
    });

    it('### Check Render Method of CheckBox when disable and selected is true', () => {
        expect(instance).toBeDefined();
    });
});

describe('<<<CheckBox Test 4>>>', () => {
    let instance: RenderAPI;
    const mockFunction = jest.fn();
    const setIsSelected = mockFunction;
    const mockString = 'test-string';

    beforeEach(() => {
        (useState as jest.Mock).mockImplementation(() => [true, setIsSelected]);
        const element = <CheckBox
            onChange={mockFunction}
            label={mockString}
            labelStyle={{}}
        />;
        instance = render(element);
    });

    it('### Check Render Method of CheckBox when labelStyle is empty', () => {
        expect(instance).toBeDefined();
    });
});
