import { CLOSE_CART_REVIEW, REVIEW_CART, ADD_ITEM_TO_CART, HIDE_CART_ITEM, REMOVE_CART_ITEM, SHOW_CART_ITEM, REMOVE_HIDDEN_CART_ITEM } from '../helpers/constants';

export const addItemToCart = ({ id, name, amount}) => ({
    type: ADD_ITEM_TO_CART,
    data: {
        id,
        name,
        amount,
        hidden: false
    }
}); 

export const hideCartItem = ({ id, amount }) => ({
    type: HIDE_CART_ITEM, 
    data: {
        id, amount
    }
});

export const showCartItem = ({ id, amount }) => ({
    type: SHOW_CART_ITEM, 
    data: {
        id, amount
    }
});

export const removeCartItem = ({ id, amount, hidden }) => {
    console.log(hidden);
    const type = hidden ? REMOVE_HIDDEN_CART_ITEM : REMOVE_CART_ITEM;
    return {
        type, 
        data: {
            id, amount
        }
    }
};

export const reviewCartItems = () => ({ type: REVIEW_CART });

export const closeCartReview = () => ({ type: CLOSE_CART_REVIEW });