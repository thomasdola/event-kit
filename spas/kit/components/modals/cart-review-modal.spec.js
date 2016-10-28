import expect from 'expect';
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { assign } from 'lodash';

import { CartReviewModal } from './cart-review-modal';

const props = {
    cartItems: [
        {
            id: 'one',
            name: 'one',
            amount: 100,
            hidden: false
        },
        {
            id: 'two',
            name: 'two',
            amount: 200,
            hidden: true
        }
    ],
    budget: 100,
    cartTotal: 100,
    cartReviewMode: false
};

const setupRender = () => render(<CartReviewModal {...props}/>);

const setupShallow = (withItems = false) => {
    const lprops = withItems ? props : assign({}, props, {cartItems: [], cartTotal: 0});
    return shallow(<CartReviewModal {...lprops}/>)
};

const setupMount = () => mount(<CartReviewModal {...props}/>);


describe('CartReviewModal Component', () => {
    
    context('Markup', () => {
        
        const cartReviewModalShallowWrapper = setupShallow();
        
        it('renders the correct instance', () => {
            expect(cartReviewModalShallowWrapper.instance()).toBeA(CartReviewModal);
        });

        it('renders properly', () => {
            expect(cartReviewModalShallowWrapper.find('.Cart__Review__Modal').length).toBe(1);
        });

        it('renders content properly', () => {
            expect(cartReviewModalShallowWrapper.find('.Cart__Review__Modal__Content').length).toBe(1);
        });

        it('renders close, download, and submit button', () => {
            expect(cartReviewModalShallowWrapper.find('.Close__Modal').length).toBe(1);
            expect(cartReviewModalShallowWrapper.find('.Submit__Review').length).toBe(1);
            expect(cartReviewModalShallowWrapper.find('.Download__Review').length).toBe(1);
        });
    });

    context('Data', () => {
        
        const cartReviewModalShallowWrapper = setupShallow(true);

        it('formats the budget and cart total properly', () => {
            expect(cartReviewModalShallowWrapper.find('.Review__Budget b').text()).toEqual('100.00');
            expect(cartReviewModalShallowWrapper.find('.Review__Cart__Total b').text()).toEqual('100.00');
        });
        
        it('renders one item', () => {
            expect(cartReviewModalShallowWrapper.find('.Cart__Review__Item').length).toBe(1);
            expect(cartReviewModalShallowWrapper.find('.Cart__Review__Item').length).toNotBe(2);
        });
    });

    describe('Behavior', () => {

        context('Events', () => {

            let handleCloseSpy, handleSubmitSpy;

            beforeEach(() => {
                handleSubmitSpy = expect.spyOn(CartReviewModal.prototype, 'handleSubmit')
                handleCloseSpy = expect.spyOn(CartReviewModal.prototype, 'handleClose')
            });

            afterEach(() => {
                expect.restoreSpies();
            });

            it('handles the onSubmit event', () => {
                const cartReviewModalShallowWrapper = setupShallow();
                cartReviewModalShallowWrapper.find('.Submit__Review').simulate('click');
                expect(handleSubmitSpy).toHaveBeenCalled();
                expect(handleCloseSpy).toNotHaveBeenCalled();
            });

            it('handles the close event', () => {
                const cartReviewModalShallowWrapper = setupShallow();
                cartReviewModalShallowWrapper.find('.Close__Modal').simulate('click');
                expect(CartReviewModal.prototype.handleClose).toHaveBeenCalled();            
                expect(handleSubmitSpy).toNotHaveBeenCalled();
            });
        });

        context('Data', () => {

            it('disables both download and submit buttons if there is no visible item - default', () => {
                const cartReviewModalShallowWrapper = setupShallow();
                expect(cartReviewModalShallowWrapper.find('.Close__Modal').hasClass('disabled')).toBe(false);
                expect(cartReviewModalShallowWrapper.find('.Submit__Review').hasClass('disabled')).toBe(true);
                expect(cartReviewModalShallowWrapper.find('.Download__Review').hasClass('disabled')).toBe(true);
            });

            it('enables both download and submit buttons if there is visible item', () => {
                const cartReviewModalShallowWrapper = setupShallow(true);
                expect(cartReviewModalShallowWrapper.find('.Close__Modal').hasClass('disabled')).toBe(false);
                expect(cartReviewModalShallowWrapper.find('.Submit__Review').hasClass('disabled')).toBe(false);
                expect(cartReviewModalShallowWrapper.find('.Download__Review').hasClass('disabled')).toBe(false);
            });
        });
    });
});