import * as types from '../helpers/constants';
import _ from 'lodash';


export const selectedCategory = (state = null, action) => {
    switch(action.type){
        case types.SELECT_CATEGORY:
            return action.data;
        default:
            return state;
    }
}; 

export const serviceBeingZoomed = (state = {name: null, id: null, amount: null, images: []}, action) => {
    switch(action.type){
        case types.VIEW_SERVICE:
            return _.assign({}, state, {
                id: action.data.id, 
                name: action.data.name, 
                amount: action.data.amount
            });
        case types.RECEIVE_SERVICE:
            return _.assign({}, state, {
                name: action.data.name,
                amount: action.data.amount,
                id: action.data.id,
                images: action.data.images
            })
        default:
            return state;
    }
}; 

export default (state = [], action) => {
    switch(action.type){
        case types.RECEIVE_CATEGORIES:
            return action.data;
        default:
            return state;
    }
};