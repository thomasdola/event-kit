import {FILTER_BY_PRICE, CLOSE_FILTER_PRICE_FORM } from '../helpers/constants';

export default (state = false, action) => {
    switch(action.type){
        case FILTER_BY_PRICE:
            return true;
        case CLOSE_FILTER_PRICE_FORM:
            return false;
        default:
            return state;
    }
};