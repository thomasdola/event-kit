import * as types from '../helpers/constants';

export const stepsMenuOpened = (state = true, action) => {
    switch(action.type){
        case types.OPEN_STEPS_MENU():
            return true;
        case types.CLOSE_STEPS_MENU():
            return false;
        default:
            return state;
    }
}

export const steps = (state = [], action) => {
    switch(action.type){
        case types.RECEIVE_STEPS():
            return [...action.data];
        default:
            return state;
    }
}

export const activeStep = (state = null, action) => {
    switch(action.type){
        case types.SELECT_STEP():
            return action.data;
        default: 
            return state;
    }
}