import { 
    SAVE_BUDGET, 
    ADD_ITEM_TO_CART, 
    HIDE_CART_ITEM, 
    REMOVE_CART_ITEM, 
    AMOUNT_IN_RANGE, 
    AMOUNT_OUT_OF_RANGE 
} from '../helpers/constants';
import _ from 'lodash';

export default (state = {amount: null, isInRange: true}, action) => {
    switch(action.type){
        case SAVE_BUDGET:
            return _.assign({}, state, {amount: _.toNumber(action.data)});
        // case ADD_ITEM_TO_CART:
        //     return _.assign({}, state, {amount: _.subtract(_.toNumber(state.amount), _.toNumber(action.data.amount))});
        // case ADD_ITEM_TO_CART:
        //     return _.assign({}, state, {amount: _.add(_.toNumber(state.amount), _.toNumber(action.data.amount))});
        // case ADD_ITEM_TO_CART:
        //     return _.assign({}, state, {amount: _.add(_.toNumber(state.amount), _.toNumber(action.data.amount))});
        case AMOUNT_IN_RANGE:
            return _.assign({}, state, {isInRange: true});
        case AMOUNT_OUT_OF_RANGE:
            return _.assign({}, state, {isInRange: false});
        default:
            return state;
    }
};