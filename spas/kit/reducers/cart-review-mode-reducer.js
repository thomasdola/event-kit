import { REVIEW_CART, CLOSE_CART_REVIEW } from '../helpers/constants';

export default (state = false, action) => {
    switch(action.type){
        case REVIEW_CART:
            return true;
        case CLOSE_CART_REVIEW:
            return false;
        default:
            return state;
    }
};