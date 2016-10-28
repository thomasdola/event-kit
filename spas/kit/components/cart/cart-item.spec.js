import expect from 'expect';
import Radium from 'radium';
import React from 'react';
import { mount, shallow, render } from 'enzyme';

import { CartItem } from './cart-item';

const props = hidden => (
    {
        item: {
            name: 'item',
            amount: 200,
            hidden
        },
        remove: () => {},
        toggleVisibility: () => {}
    }
);

const setupShallow = hidden => shallow(<CartItem {...props(hidden)}/>);

const setupRender = hidden => render(<CartItem {...props(hidden)}/>);


describe('CartItem Component', () => {

    context('Visibile', () => {

        describe('Item is visible', () => {

            it('renders properly', () => {
                const wrapper = setupShallow(false);
                expect(wrapper.find('div.item').length).toBe(1);
                expect(wrapper.instance()).toBeA(CartItem);
            });

            it('formats the provided data properly', () => {
                const wrapper = setupShallow(false);
                expect(wrapper.find('div.Item__Name').text()).toEqual('item');
                expect(wrapper.find('div.Item__Price span').text()).toEqual('200.00');   
            });

            describe('Hovered', () => {
                
                // it('renders properly', () => {
                //     const wrapper = setupShallow(false);
                //     wrapper.simulate('mouseover');
                //     expect(wrapper.find('.Remove__Button').length).toBe(1);
                // });
            });
        });

        describe('Hidden Item', () => {

            const wrapper = setupShallow(true);

            it('formats the provided data properly', () => {
                expect(wrapper.find('div.Item__Name').text()).toEqual('item');
                expect(wrapper.find('div.Item__Price span').text()).toEqual('200.00'); 
            });
        });
    });

    context('Item Events', () => {

        afterEach(() => {
            expect.restoreSpies();
        });
        
        context('Item Removing', () => {

            // beforeEach(() => {
            //     expect.spyOn(CartItem.prototype, 'remove');
            // });

            // it('handles removing', () => {
            //     const visibleWrapper = setupShallow();
            //     visibleWrapper.find('.Item__Action.Remove__Button').simulate('click');
            //     expect(CartItem.prototype.remove).toHaveBeenCalled();                
            // });

            // it('handles removing hidden item', () => {
            //     const hiddenWrapper = setupShallow(true);
            //     hiddenWrapper.find('.Item__Action.Remove__Button').simulate('click');
            //     expect(CartItem.prototype.remove).toHaveBeenCalled(); 
            // });
        });

        context('Item Visibility', () => {

            // beforeEach(() => {
            //     expect.spyOn(CartItem.prototype, 'toggle');
            // });

            // it('handles hiding', () => {
            //     const visibleWrapper = setup();
            //     visibleWrapper.find('.Item__Action.Visibility__Button').simulate('click');
            //     expect(CartItem.prototype.toggle).toHaveBeenCalled();  
            // });

            // it('handles showing', () => {
            //     const hiddenWrapper = setup(true);
            //     hiddenWrapper.find('.Item__Action.Visibility__Button').simulate('click');
            //     expect(CartItem.prototype.toggle).toHaveBeenCalled();
            // });
        });
    });
});
