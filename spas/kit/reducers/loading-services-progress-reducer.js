import * as types from '../helpers/constants';

export default (state = false, action) => {
    switch(action.type){
        case types.START_LOADING_SERVICES:
            return true;
        case types.FINISH_LOADING_SERVICES:
            return false;
        default:
            return state;
    }
};

export const loadingServiceProgress = (state = false, action) => {
    switch(action.type){
        case types.START_LOADING_SERVICE:
            return true;
        case types.FINISH_LOADING_SERVICE:
            return false;
        default:
            return state;
    }
};