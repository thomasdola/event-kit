import * as types from '../helpers/constants'

export default (state = null, action) => {
    switch(action.type){
        case types.SAVE_BUDGET(): 
            return action.data;
        default:
            return state;
    }
};

export const budgetChangingMode = (state = false, action) => {
    switch(action.type){
        case types.OPEN_CHANGE_BUDGET_POPUP():
            return true;
        case types.CLOSE_CHANGE_BUDGET_POPUP():
            return false;
        default:
            return state;
    }
};