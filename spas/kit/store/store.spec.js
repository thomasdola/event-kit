import * as cartActions from '../actions/cart';

import expect from 'expect';
import { createStore } from 'redux';

import rootReducer from '../reducers';

const store = createStore(rootReducer);



describe('Store', () => {
    
    context('Cart Actions', () => {

        context('Cart Items', () => {

            const item = {
                    id: 1,
                    name: 'item',
                    amount: 200
                };
            
            it('should handle adding item', () => {
                const action = cartActions.addItemToCart(item);
                store.dispatch(action);

                expect(store.getState().cartItems.length).toEqual(1);
                expect(store.getState().cartItems[0].name).toEqual(item.name);
                expect(store.getState().cartItems[0].hidden).toNotEqual(true);
            });

            it('should handle removing item', () => {
                const addAction = cartActions.addItemToCart(item);
                store.dispatch(addAction);

                const removeAction = cartActions.removeCartItem(item);
                store.dispatch(removeAction);

                expect(store.getState().cartItems.length).toEqual(0);
            });

            it('should handle hiding item', () => {
                const addAction = cartActions.addItemToCart(item);
                store.dispatch(addAction);

                const hideAction = cartActions.hideCartItem(item);
                store.dispatch(hideAction);

                expect(store.getState().cartItems.length).toEqual(1);
                expect(store.getState().cartItems[0].hidden).toEqual(true);
            });

            it('should handle showing item', () => {
                const addAction = cartActions.addItemToCart(item);
                store.dispatch(addAction);
                const hideAction = cartActions.hideCartItem(item);
                store.dispatch(hideAction);
                expect(store.getState().cartItems.length).toEqual(1);
                expect(store.getState().cartItems[0].hidden).toEqual(true);

                const showAction = cartActions.showCartItem(item);
                store.dispatch(showAction);

                expect(store.getState().cartItems.length).toEqual(1);
                expect(store.getState().cartItems[0].hidden).toEqual(false);
            });
        });

        context('Cart Review Mode', () => {

            it('should handle entering review mode', () => {
                store.dispatch(cartActions.reviewCartItems());
                expect(store.getState().cartReviewMode).toBe(true);
            });

            it('should handle closing review mode', () => {
                store.dispatch(cartActions.reviewCartItems());
                expect(store.getState().cartReviewMode).toBe(true);
                
                store.dispatch(cartActions.closeCartReview());
                expect(store.getState().cartReviewMode).toBe(false);
            });
        });
    });

    
});