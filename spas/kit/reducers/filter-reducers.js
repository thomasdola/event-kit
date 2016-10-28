import * as types from '../helpers/constants';

import _ from 'lodash';

export const filterPriceRange = (state = {from: '', to: ''}, action) => {
    switch(action.type){
        case types.PERFORM_FILTER():
            return _.assign({}, state, action.data);
        default:
            return state;
    }
};

export const filterMode = (state = false, action) => {
    switch(action.type){
        case types.OPEN_FILTER_POPUP():
            return true;
        case types.CLOSE_FILTER_POPUP():
            return false;
        default:
            return state;
    }
};