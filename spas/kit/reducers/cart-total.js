import { ADD_ITEM_TO_CART, HIDE_CART_ITEM, REMOVE_CART_ITEM, SHOW_CART_ITEM } from '../helpers/constants';
import _ from 'lodash';

export default (state = null, action) => {
    switch(action.type){
        case ADD_ITEM_TO_CART:
            return _.add(_.toNumber(state), _.toNumber(action.data.amount));
        case SHOW_CART_ITEM:
            return _.add(_.toNumber(state), _.toNumber(action.data.amount));
        case HIDE_CART_ITEM:
            return _.subtract(_.toNumber(state), _.toNumber(action.data.amount)); 
        case REMOVE_CART_ITEM:
            return _.subtract(_.toNumber(state), _.toNumber(action.data.amount));
        default:
            return state;
    }
};