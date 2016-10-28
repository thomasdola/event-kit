import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';

import CartItem from './cart-item';
import { CartItemList } from './cart-item-list';

function setup(){
    const props = {
        hideCartItem: () => {},
        showCartItem: () => {},
        removeCartItem: () => {},
        cartItems: [
            {
                name: 'visible item',
                amount: '200',
                hidden: false,
                id: 1
            },
            {
                name: 'hidden item',
                amount: '250',
                hidden: true,
                id: 2
            }
        ]
    };

    return mount(<CartItemList {...props}/>);
}

describe('CartItemList', () => {
    
    const cartItemListWrapper = setup();

    it('renders properly', () => {
        expect(cartItemListWrapper.instance()).toBeA(CartItemList);        
        expect(cartItemListWrapper.find('div.Cart__Item__List').length).toBe(1);
        expect(cartItemListWrapper.find('div.Cart__Item__List > div.divided.list').length).toBe(1);
    });

    it('renders child components', () => {
        expect(cartItemListWrapper.find('div.Cart__Item').length).toBe(2);
        expect(cartItemListWrapper.find(CartItem).length).toBe(2);
    });

    it('contains the provided data', () => {
        expect(cartItemListWrapper.find(CartItem).first().prop('item').hidden).toBe(false);        
        expect(cartItemListWrapper.find(CartItem).at(1).prop('item').hidden).toBe(true);        
    });
});
