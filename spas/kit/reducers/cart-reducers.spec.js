import * as cartActions from '../actions/cart';
import * as types from '../helpers/constants';

import _ from 'lodash';
import expect from 'expect';

import cartReducer, { 
    cartReviewMode as cartReviewModeReducer,
    cartTotal as cartTotalReducer,
    cartItemEditMode, selectedCartItem 
} from './cart-reducers';

describe('cartItemsReducer', () => {

    const item = (hidden = false) => ({
        id: 1, 
        name: 'item', 
        amount: 1500, 
        hidden,
        fixed: false,
        packages: [
            {
                amount: 1500,
                range: [0,50]
            },
            {
                amount: 3000,
                range: [51,150]
            },
            {
                amount: 5000,
                range: [151,250]
            }
        ]
    });
    
    it('should add item to the cart when passed ADD_ITEM_TO_CART', () => {
        const initialState = [];
        const action = cartActions.addItemToCart(item());
        const newState = cartReducer(initialState, action);
        expect(newState.length).toEqual(1);
        expect(newState[0].id).toEqual(1);
    });

    it('should show item when passed SHOW_CART_ITEM', () => {
        const initialState = [item(true)];
        const action = cartActions.showCartItem(item());
        const newState = cartReducer(initialState, action);
        expect(newState.length).toEqual(1);
        expect(newState[0].hidden).toBe(false);
    });

    it('should hide item when passed HIDE_CART_ITEM', () => {
        const initialState = [item()];
        const action = cartActions.hideCartItem(item());
        const newState = cartReducer(initialState, action);
        expect(newState.length).toEqual(1);
        expect(newState[0].hidden).toBe(true);
    });

    it('should have updated cartItem when passed UPDATE_CART_ITEM_PACKAGE', () => {
        const initialState = [item()];
        const updatedItem = _.assign({}, item(), {amount: 3000});
        const action = cartActions.updateCartItemPackage(updatedItem);
        const newState = cartReducer(initialState, action);
        expect(newState.length).toBe(1);
        expect(newState[0].amount).toEqual(3000);
    });

    it('should maintain state when passed UNKNOWN_ACTION', () => {
        const initialState = [item()];
        const newState = cartReducer(initialState, {type: types.UNKNOWN_ACTION});
        expect(newState.length).toEqual(1);
        expect(newState[0].hidden).toBe(false);
    });

    describe('Wether hidden or visible', () => {
        
        it('should remove when passed REMOVE_CART_ITEM', () => {
            const initialState = [item()];
            const action = cartActions.removeCartItem(item());
            const newState = cartReducer(initialState, action);
            expect(newState.length).toEqual(0);
        });

        it('should remove item when passed REMOVE_HIDDEN_CART_ITEM', () => {
            const initialState = [item(true)];
            const action = cartActions.removeCartItem(item(true));
            const newState = cartReducer(initialState, action);
            expect(newState.length).toEqual(0);
        });
    });

    describe('cartTotalReducer', () => {
        
        it('should add to total amount when passed ADD_ITEM_TO_CART', () => {
            const initialState = 0;
            const newState = cartTotalReducer(initialState, cartActions.addItemToCart(item()));
            expect(newState).toEqual(item().amount);
        });

        it('should add to total amount when passed SHOW_CART_ITEM', () => {
            const initialState = 200;
            const newState = cartTotalReducer(initialState, cartActions.showCartItem(item()));
            expect(newState).toEqual((200 + item().amount));
        });

        it('should subtract from total amount when passed HIDE_CART_ITEM', () => {
            const initialState = 200;
            const newState = cartTotalReducer(initialState, cartActions.hideCartItem(item()));
            expect(newState).toEqual((200 - item().amount));
        });

        it('should subtract from total amount when passed REMOVE_CART_ITEM', () => {
            const initialState = 200;
            const newState = cartTotalReducer(initialState, cartActions.removeCartItem(item()));
            expect(newState).toEqual((200 - item().amount));
        });

        it('should maintain state when passed UNKNOWN_ACTION', () => {
            const initialState = 0;
            const newState = cartTotalReducer(initialState, {type: types.UNKNOWN_ACTION});
            expect(newState).toEqual(0);
        });
    });

    describe('cartReviewModeReducer', () => {
        
        it('should change to true when passed REVIEW_CART', () => {
            const initialState = false;
            const newState = cartReviewModeReducer(initialState, cartActions.reviewCartItems());
            expect(newState).toEqual(true);
        });

        it('should change to false when passed CLOSE_CART_REVIEW', () => {
            const initialState = true;
            const newState = cartReviewModeReducer(initialState, cartActions.closeCartReview());
            expect(newState).toEqual(false);
        });

        it('should maintain state when passed UNKNOWN_ACTION', () => {
            const initialState = true;
            const newState = cartReviewModeReducer(initialState, {type: types.UNKNOWN_ACTION});
            expect(newState).toEqual(true);
        });
    });

    describe('cartItemEditModeReducer', () => {
        
        it('should change to true when passed EDIT_PACKAGE', () => {
            const initialState = false;
            const newState = cartItemEditMode(initialState, cartActions.editItemPackage());
            expect(newState).toEqual(true);
        });

        it('should change to false when passed CLOSE_PACKAGES_POPUP', () => {
            const initialState = true;
            const newState = cartItemEditMode(initialState, cartActions.closePackagesPopup());
            expect(newState).toEqual(false);
        });

        it('should maintain state when passed UNKNOWN_ACTION', () => {
            const initialState = true;
            const newState = cartItemEditMode(initialState, {type: types.UNKNOWN_ACTION});
            expect(newState).toEqual(true);
        });
    });

    describe('selectedCartItemReducer', () => {
        
        it('should have selected cart item when passed EDIT_ITEM_PACKAGE', () => {
            const initialState = {};
            const item = {id: 1, name: 'service one'};
            const newState = selectedCartItem(initialState, cartActions.editItemPackage(item));
            expect(newState).toEqual(item);
        });

        it('should maintain state when passed UNKNOWN_ACTION', () => {
            const initialState = {};
            const newState = selectedCartItem(initialState, {type: types.UNKNOWN_ACTION});
            expect(newState).toEqual({});
        });
    });
});