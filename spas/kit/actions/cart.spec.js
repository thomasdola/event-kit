import * as types from '../helpers/constants';
import * as cartActions from './cart';

import _ from 'lodash';
import expect from 'expect';

describe('Cart Actions Creator', () => {
    describe('addItemToCart', () => {
        it('should create ADD_ITEM_TO_CART action', () => {
            const item = {id: 'id', name: 'name', amount: 2000};
            const expectedAction = {
                type: types.ADD_ITEM_TO_CART(), 
                data: _.assign({}, item, {hidden: false})
            };
            const actualAction = cartActions.addItemToCart(item);
            expect(expectedAction).toEqual(actualAction);
        });
    });

    describe('hideCartItem', () => {
        it('should create HIDE_CART_ITEM action', () => {
            const item = {id: 'id', amount: 2000};
            const expectedAction = {
                type: types.HIDE_CART_ITEM(),
                data: item
            };
            const actualAction = cartActions.hideCartItem(item);
            expect(expectedAction).toEqual(actualAction);
        });
    });

    describe('showCartItem', () => {
        it('should create SHOW_CART_ITEM action', () => {
            const item = {id: 'id', amount: 2000};
            const expectedAction = {
                type: types.SHOW_CART_ITEM(),
                data: item
            };
            const actualAction = cartActions.showCartItem(item);
            expect(expectedAction).toEqual(actualAction);
        });
    });

    describe('removeCartItem', () => {
        it('should create REMOVE_CART_ITEM action', () => {
            const item = {id: 'id', amount: 2000};
            const expectedAction = {
                type: types.REMOVE_CART_ITEM(),
                data: item
            };
            const actualAction = cartActions.removeCartItem(_.assign({}, item, {hidden: false}));
            expect(expectedAction).toEqual(actualAction);
        });

        it('should create REMOVE_HIDDEN_CART_ITEM action', () => {
            const item = {id: 'id', amount: 2000};
            const expectedAction = {
                type: types.REMOVE_HIDDEN_CART_ITEM(),
                data: item
            };
            const actualAction = cartActions.removeCartItem(_.assign({}, item, {hidden: true}));
            expect(expectedAction).toEqual(actualAction);
        });
    });

    describe('reviewCartItems', () => {
        it('should create REVIEW_CART action', () => {
            const expectedAction = {type: types.REVIEW_CART()};
            const actualAction = cartActions.reviewCartItems();
            expect(expectedAction).toEqual(actualAction);
        });
    });

    describe('closeCartReview', () => {
        it('should create CLOSE_CART_REVIEW action', () => {
            const expectedAction = {type: types.CLOSE_CART_REVIEW()};
            const actualAction = cartActions.closeCartReview();
            expect(expectedAction).toEqual(actualAction);
        });
    });

    describe('editItemPackage', () => {
        it('should create EDIT_ITEM_PACKAGE action', () => {
            const item = {id: 1, name: 'service one'};
            const expectedAction = {type: types.EDIT_ITEM_PACKAGE(), data: item};
            const actualAction = cartActions.editItemPackage(item);
            expect(expectedAction).toEqual(actualAction);
        });
    });

    describe('closePackagesPopup', () => {
        it('should create CLOSE_PACKAGES_POPUP action', () => {
            const expectedAction = {type: types.CLOSE_PACKAGES_POPUP()};
            const actualAction = cartActions.closePackagesPopup();
            expect(expectedAction).toEqual(actualAction);
        });
    });

    describe('updateCartItemPackage', () => {
        it('should create UPDATE_CART_ITEM_PACKAGE action', () => {
            const item = {id: 1, name: 'service one'};
            const expectedAction = {type: types.UPDATE_CART_ITEM_PACKAGE(), data: item};
            const actualAction = cartActions.updateCartItemPackage(item);
            expect(expectedAction).toEqual(actualAction);
        });
    });

    describe('chooseItemPackage', () => {
        it('should create CHOOSE_ITEM_PACKAGE action', () => {
            const item = {id: 1, name: 'service one'};
            const expectedAction = {type: types.CHOOSE_ITEM_PACKAGE(), data: item.id};
            const actualAction = cartActions.chooseItemPackage(item.id);
            expect(expectedAction).toEqual(actualAction);
        });
    });

    describe('doneChoosingPackage', () => {
        it('should create CHOOSE_ITEM_PACKAGE action', () => {
            const expectedAction = {type: types.DONE_CHOOSING_PACKAGE()};
            const actualAction = cartActions.doneChoosingPackage();
            expect(expectedAction).toEqual(actualAction);
        });
    });
});