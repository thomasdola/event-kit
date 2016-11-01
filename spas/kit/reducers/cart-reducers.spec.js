import * as cartActions from '../actions/cart';
import * as types from '../helpers/constants';

import _ from 'lodash';
import expect from 'expect';

import cartReducer, { 
    cartReviewMode as cartReviewModeReducer,
    cartTotal as cartTotalReducer, packageChoosingMode,
    cartItemEditMode, selectedCartItem, serviceToBePicked,
    generatingPdf
} from './cart-reducers';
import { openServiceZoomModal } from '../actions/services';

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
            expect(newState).toEqual(initialState);
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
            expect(newState).toEqual(initialState);
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
            expect(newState).toEqual(initialState);
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

    describe('serviceToBePickedReducer', () => {

        it('should have selected cart item when passed CHOOSE_ITEM_PACKAGE', () => {
            const initialState = null;
            const item = 1;
            const newState = serviceToBePicked(initialState, cartActions.chooseItemPackage(item));
            expect(newState).toEqual(item);
        });

        it('should maintain state when passed UNKNOWN_ACTION', () => {
            const initialState = null;
            const newState = serviceToBePicked(initialState, {type: types.UNKNOWN_ACTION});
            expect(newState).toEqual(initialState);
        });
    });


    describe('packageChoosingModeReducer', () => {

        it('should change to true when passed CHOOSE_ITEM_PACKAGE', () => {
            const initialState = false;
            const newState = packageChoosingMode(initialState, cartActions.chooseItemPackage(1));
            expect(newState).toEqual(true);
        });

        it('should change to false when passed DONE_CHOOSING_PACKAGE', () => {
            const initialState = true;
            const newState = packageChoosingMode(initialState, cartActions.doneChoosingPackage());
            expect(newState).toEqual(false);
        });

        it('should change to false when passed OPEN_SERVICE_ZOOM_MODAL', () => {
            const initialState = true;
            const newState = packageChoosingMode(initialState, openServiceZoomModal());
            expect(newState).toEqual(false);
        });

        it('should change to false when passed REVIEW_CART', () => {
            const initialState = true;
            const newState = packageChoosingMode(initialState, cartActions.reviewCartItems());
            expect(newState).toEqual(false);
        });

        it('should maintain state when passed UNKNOWN_ACTION', () => {
            const initialState = true;
            const newState = packageChoosingMode(initialState, {type: types.UNKNOWN_ACTION()});
            expect(newState).toEqual(initialState);
        });
    });
});