import { SAVE_BUDGET } from '../helpers/constants'

export default (state = null, action) => {
    switch(action.type){
        case SAVE_BUDGET: 
            return action.data;
        default:
            return state;
    }
};