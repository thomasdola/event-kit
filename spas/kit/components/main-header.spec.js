import expect from 'expect';
import React from 'react';
import { shallow, render } from 'enzyme';

import ChangeBudgetPopup from './popups/change-budget-popup';
import { MainHeader } from './main-header';

const props = {
    budget: 2000,
    balance: {
        amount: 300,
        isInRange: true
    },
    cartTotal: 1700,
    stepsMenuOpened: true,
    saveBudget: () => {},
    balanceIsOutOfRange: () => {},
    balanceIsInRange: () => {},
    openChangeBudgetPopup: () => {},
    closeChangeBudgetPopup: () => {},
    reviewCartItems: () => {},
    closeCartReview: () => {},
    openStepsMenu: () => {},
    closeStepsMenu: () => {}
};

const setup = () => shallow(<MainHeader {...props}/>);



describe('MainHeader Component', () => {
    
    describe('Markup', () => {

        it('renders the component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(MainHeader);
        })

        it('renders the change budget button', () => {
            const wrapper = setup();
            expect(wrapper.find('.Open__Change__Budget__Popup').length).toBe(1);
        });

        it('rendres the cart review button', () => {
            const wrapper = setup();
            expect(wrapper.find('.Review__Button').length).toBe(1);
        });

        it('rendres the toggle steps menu button', () => {
            const wrapper = setup();
            expect(wrapper.find('.Steps__Menu__Button').length).toBe(1);
        });

        it('renders the change budget popup component', () => {
            const wrapper = setup();
            expect(wrapper.find(ChangeBudgetPopup).length).toBe(1);
        });
    })

    describe('Data', () => {

        it('formats the balance and budget properly', () => {
            const wrapper = setup();
            expect(wrapper.find('.Open__Change__Budget__Popup span b').text()).toEqual('2,000.00');
            expect(wrapper.find('.Balance__Box span b').text()).toEqual('300.00');
        })
    })

    describe('Behaviour', () => {

        it('triggers the appropriate method on cart review', () => {
            expect.spyOn(MainHeader.prototype, 'reviewCart');
            const wrapper = setup();
            wrapper.find('.Review__Button').simulate('click');
            expect(MainHeader.prototype.reviewCart).toHaveBeenCalled();
        });

        it('triggers the appropriate method on cart review', () => {
            expect.spyOn(MainHeader.prototype, 'toggleStepsMenu');
            const wrapper = setup();
            wrapper.find('.Steps__Menu__Button').simulate('click');
            expect(MainHeader.prototype.toggleStepsMenu).toHaveBeenCalled();
        });

        it('triggers the appropriate method on open change budget popup', () => {
            expect.spyOn(MainHeader.prototype, 'handleToggle');
            const wrapper = setup();
            wrapper.find('.Open__Change__Budget__Popup').simulate('click');
            expect(MainHeader.prototype.handleToggle).toHaveBeenCalled();
        });

        it('triggers the appropriate method on close change budget popup', () => {
            expect.spyOn(MainHeader.prototype, 'handleToggle');
            const wrapper = setup();
            const e = {preventDefault: () => {}}
            wrapper.find(ChangeBudgetPopup).find('.Cancel__Button').at(0).simulate('click', e);
            expect(MainHeader.prototype.handleToggle).toHaveBeenCalled();
        });

        it('triggers the appropriate method on save budget');
    })
});