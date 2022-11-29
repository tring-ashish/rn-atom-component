import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import { Label } from '../label';

describe('<<< Label >>>', () => {
    let instance: RenderAPI;
    beforeEach(() => {
        const element = <Label children={'Hello Test Label'} />
        instance = render(element);
    })

    it('### Check Render Method of Label', () => {
        expect(instance).toBeDefined();
    });
})
