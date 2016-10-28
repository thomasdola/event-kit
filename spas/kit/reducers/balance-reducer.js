import * as types from '../helpers/constants';

import _ from 'lodash';

export default (state = {amount: null, isInRange: true}, action) => {
    switch(action.type){
        case types.SAVE_BUDGET():
            return _.assign({}, state, {amount: _.toNumber(action.data)});
        case types.AMOUNT_IN_RANGE():
            return _.assign({}, state, {isInRange: true});
        case types.AMOUNT_OUT_OF_RANGE():
            return _.assign({}, state, {isInRange: false});
        default:
            return state;
    }
};