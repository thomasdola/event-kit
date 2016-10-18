import * as types from '../helpers/constants';


export default (state = false, action) => {
    switch(action.type){
        case types.START_LOADING_CATEGORIES:
            return true;
        case types.FINISH_LOADING_CATEGORIES:
            return false;
        default:
            return state;
    }
};