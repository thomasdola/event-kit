import { RECEIVE_SERVICES, VIEW_SERVICE } from '../helpers/constants';

export const selectedService = (state = null, action) => {
    switch(action.type){
        case VIEW_SERVICE:
            return action.data;
        default:
            return state;
    }
};

export default (state = [], action) => {
    switch(action.type){
        case RECEIVE_SERVICES:
            return action.data;
        default: 
            return state;
    }
}