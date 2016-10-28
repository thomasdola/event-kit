import * as types from '../helpers/constants';

export const loadingCategories = (state = false, action) => {
    switch(action.type){
        case types.START_LOADING_CATEGORIES():
            return true;
        case types.FINISH_LOADING_CATEGORIES():
            return false;
        default:
            return state;
    }
};

export const loadingServices = (state = false, action) => {
    switch(action.type){
        case types.START_LOADING_SERVICES():
            return true;
        case types.FINISH_LOADING_SERVICES():
            return false;
        default:
            return state;
    }
};

export const loadingService = (state = false, action) => {
    switch(action.type){
        case types.START_LOADING_SERVICE():
            return true;
        case types.FINISH_LOADING_SERVICE():
            return false;
        default:
            return state;
    }
};