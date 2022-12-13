import { fireEvent, render, RenderAPI } from "@testing-library/react-native"
import React from "react-native/node_modules/@types/react";
import { SliderHorizontal } from "../SliderHorizontal";

describe('<<< SliderHorizontal >>>', () => {
    let instance: RenderAPI;
    const mockString = 'mockString';
    const mockFunction = jest.fn();

    beforeEach(() => {
        const component = <SliderHorizontal testId={mockString} seekUpdate={mockFunction} />
        instance = render(component);
    })

    afterEach(() => {
        jest.clearAllMocks();
        instance.unmount();
    });

    it('when render SliderHorizontal ', () => {
        expect(instance).toBeDefined();
    })

    it('Should call Slider onComplete', () => {
        const element = instance.getByTestId(mockString);
        fireEvent(element, 'onSlidingComplete', 0.5);
        expect(mockFunction).toHaveBeenCalled()
    });

    it('Should render component with Currentvalue greater than maximumValue', () => {
        const component = <SliderHorizontal currentValue={2} />
        instance = render(component);
        expect(instance).toBeDefined()
    });
})