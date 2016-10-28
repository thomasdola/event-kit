import * as types from '../helpers/constants';

import _ from 'lodash';

export const selectedCategory = (state = null, action) => {
    switch(action.type){
        case types.SELECT_CATEGORY():
            return action.data;
        default:
            return state;
    }
}; 

export default (state = [], action) => {
    switch(action.type){
        case types.RECEIVE_CATEGORIES():
            return action.data;
        default:
            return state;
    }
};