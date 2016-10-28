import * as types from '../helpers/constants';

import { assign } from 'lodash';

export const addItemToCart = (item) => ({
    type: types.ADD_ITEM_TO_CART(),
    data: assign({}, item, {hidden: false})
}); 

export const hideCartItem = ({ id, amount }) => ({
    type: types.HIDE_CART_ITEM(), 
    data: {
        id, amount
    }
});

export const showCartItem = ({ id, amount }) => ({
    type: types.SHOW_CART_ITEM(), 
    data: {
        id, amount
    }
});

export const removeCartItem = ({ id, amount, hidden }) => {
    const type = hidden ? types.REMOVE_HIDDEN_CART_ITEM() : types.REMOVE_CART_ITEM();
    return {
        type, 
        data: {
            id, amount
        }
    }
};

export const reviewCartItems = () => ({ type: types.REVIEW_CART() });

export const closeCartReview = () => ({ type: types.CLOSE_CART_REVIEW() });

export const editItemPackage = cartItem => ({ type: types.EDIT_ITEM_PACKAGE(), data: cartItem });

export const closePackagesPopup = () => ({ type: types.CLOSE_PACKAGES_POPUP() });

export const updateCartItemPackage = cartItem => ({type: types.UPDATE_CART_ITEM_PACKAGE(), data: cartItem});