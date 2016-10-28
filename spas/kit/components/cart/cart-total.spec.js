import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';

import { CartTotal } from './cart-total';

function setup(){
    const props = {
        cartTotal: 200
    };

    return shallow(<CartTotal {...props}/>);
}

describe('CartTotal Component', () => {
    
    const cartTotalWrapper = setup();

    it('renders correctly', () => {
        expect(cartTotalWrapper.find('div.Cart__Total').length).toBe(1);
        expect(cartTotalWrapper.find('div.Cart__Total__Figure').length).toBe(1);
    });

    it('format the amount passed properly', () => {
        expect(cartTotalWrapper.find('div.Cart__Total__Figure > span').text()).toBe('200.00');        
    });
});
