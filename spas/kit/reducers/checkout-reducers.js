import * as types from '../helpers/constants';

import { assign } from 'lodash';

export const clientDetails = (state = {officialName: null, address: null, email: null, phoneNumber: null}, action) => {
    switch(action.type){
        case types.SUBMIT_CLIENT_DETAILS():
            return assign({}, state, action.data);
        default:
            return state;
    }
};


export const clientDetailsMode = (state = false, action) => {
    switch(action.type){
        case types.PROCEED_TO_CHECKOUT():
            return true;
        case types.CLOSE_CLIENT_DETAILS_MODAL():
        case types.DONE_CHECKING_OUT():
            return false;
        default:
            return state;
    }
};

export const phoneVerificationMode = (state = false, action) => {
    switch(action.type){
        case types.FINISH_CHECKING_OUT():
            return true;
        case types.DONE_CHECKING_OUT():
            return false;
        default:
            return state;
    }
};

export const congratulationsMode = (state = false, action) => {
    switch(action.type){
        case types.DONE_CHECKING_OUT():
            return true;
        case types.CLOSE_CONGRATULATIONS_MODAL():
            return false;
        default:
            return state;
    }
};

export const checkingOut = (state = false, action) => {
    switch(action.type){
        case types.START_CHECKING_OUT():
            return true;
        case types.CHECKING_OUT_FAILED():
        case types.FINISH_CHECKING_OUT():
            return false;
        default:
            return state;
    }
};

export const verifyingNumber = (state = false, action) => {
    switch(action.type){
        case types.START_VERIFYING_NUMBER():
            return true;
        case types.VERIFYING_NUMBER_FAILED():
        case types.FINISH_VERIFYING_NUMBER():
            return false;
        default:
            return state;
    }
};

export const requestingCode = (state = false, action) => {
    switch(action.type){
        case types.START_REQUESTING_CODE():
            return true;
        case types.FINISH_REQUESTING_CODE():
        case types.REQUESTING_CODE_FAILED():
            return false;
        default:
            return state;
    }
}