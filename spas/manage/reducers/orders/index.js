import * as types from '../../helpers/constants';
const moment = require('moment');

export const orders = (state = [], action) => {
    switch(action.type){
        case types.FETCH_ORDERS_SUCCESSFUL():
            return [...action.data];
        default: 
            return state;
    }
}; 

export const dateRange = (state = {start: moment(), end: moment()}, action) => {
    switch(action.type){
        case types.CHANGE_DATE_RANGE():
            return action.data;
        default: 
            return state;
    }
};

export const ordersPath = (state = null, action) => {
    switch(action.type){
        case '@@router/LOCATION_CHANGE':
            if(action.payload.pathname === '/manage/orders'){
                const { pathname, search } = action.payload;
                return pathname + search;
            }
        default:
            return state;
    }
};