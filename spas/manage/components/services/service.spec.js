import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

import { Service } from './service';

const props = () => ({
    item: {
        img: '/path/to/image.jpg',
        amount: 2000,
        name: 'service one',
        fixed: true,
        id: 2548
    }
});

const setup = () => shallow(<Service {...props()}/>);



describe('Service Component', () => {
    
    describe('Markup', () => {
        
        it('renders component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(Service);
        });

        it('renders image and price label', () => {
            const wrapper = setup();
            expect(wrapper.find('.Service__Image__And__Amount').length).toBe(1);
        });

        it('renders name', () => {
            const wrapper = setup();
            expect(wrapper.find('.Service__Name').length).toBe(1);
        });
    });

    describe('Data', () => {
        
    });

    describe('Behaviour', () => {
        
    });
});