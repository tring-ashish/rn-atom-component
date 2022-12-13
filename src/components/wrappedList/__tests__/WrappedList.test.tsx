import React from 'react';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import { WrappedList } from '../wrappedList';
import { TouchableOpacity } from 'react-native';

describe('<<< WrappedList >>>', () => {
    let instance: RenderAPI;
    const mockFunction = jest.fn();

    const data = [
        { title: 'One', id: 1, selected: true },
        { title: 'Two', id: 2, selected: false },
        { title: 'Three', id: 3, selected: false },
        { title: 'Four', id: 4, selected: false },
        { title: 'Five', id: 5, selected: false },
    ];

    beforeEach(() => {
        const element = <WrappedList data={data} onPress={mockFunction} />;
        instance = render(element);
    });

    it('### Check Render Method of WrappedList', () => {
        expect(instance).toBeDefined();
    });

    it('Should call onPress ', () => {
        const element = instance.container.findAllByType(TouchableOpacity)[0];
        fireEvent(element, 'onPress');
        expect(mockFunction).toHaveBeenCalled();
    });
});