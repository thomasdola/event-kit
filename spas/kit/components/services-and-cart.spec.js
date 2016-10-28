import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

import Cart from './cart/cart';
import ServicesAndCart from './services-and-cart';
import ServicesContainer from './services/services-container';

const props = {

};

const setup = () => shallow(<ServicesAndCart {...props}/>);


describe('ServicesAndCart Component', () => {
    
    describe('Markup', () => {

        it('renders the component', () => {
            const wrapper = setup();
            expect(wrapper.find('.Services__And__Cart').length).toBe(1);
        });

        it('renders the cart', () => {
            const wrapper = setup();
            expect(wrapper.find(Cart).length).toBe(1);
        });

        it('renders the services container', () => {
            const wrapper = setup();
            expect(wrapper.find(ServicesContainer).length).toBe(1);
        });
    });
});
