import { CHANGE_BUDGET, CLOSE_CHANGE_BUDGET_FORM } from '../helpers/constants';

export default (prevState = false, action) => {
    switch(action.type){
        case CHANGE_BUDGET:
            return true;
        case CLOSE_CHANGE_BUDGET_FORM:
            return false;
        default:
            return prevState;
    }
};