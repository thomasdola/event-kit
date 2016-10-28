import * as types from '../helpers/constants';

import _ from 'lodash';

// const updateItemAndMaintainPoisition = (collection, item, {key, value}) => {
//     const itemIndex = _.findIndex(collection, {id: item.id});
//     const changedItem = _.assign({}, item, {key: value});
//     const newCollection = _.reject(collection, {id: item.id});
//     newCollection.splice(itemIndex, 0, changedItem);
//     return newCollection;
// };

const updateItemAndMaintainPoisition = (collection, item, key, newValue) => {
    const itemIndex = _.findIndex(collection, {id: item.id});
    const changedItem = _.assign({}, item, {[key]: newValue});
    const newCollection = _.reject(collection, {id: item.id});
    newCollection.splice(itemIndex, 0, changedItem);
    return newCollection;
};


export default (state = [], action) => {
    switch(action.type){
        case types.ADD_ITEM_TO_CART():
            return [...state, action.data];
        case types.SHOW_CART_ITEM():
            return [
                ...updateItemAndMaintainPoisition(
                    state, _.find(state, {id: action.data.id}), 
                    'hidden', false)
                ];
        case types.HIDE_CART_ITEM():
            return [
                ...updateItemAndMaintainPoisition(
                    state, _.find(state, {id: action.data.id}), 
                    'hidden', true)
                ];
        case types.UPDATE_CART_ITEM_PACKAGE():
            return [
                ...updateItemAndMaintainPoisition(
                    state, _.find(state, {id: action.data.id}), 
                    'amount', action.data.amount)
                ];
        case types.REMOVE_CART_ITEM():
        case types.REMOVE_HIDDEN_CART_ITEM():
            return _.reject(state, item => item.id === action.data.id);
        default: 
            return state;
    }
};

export const cartTotal = (state = null, action) => {
    switch(action.type){
        case types.ADD_ITEM_TO_CART():
            return _.add(
                _.toNumber(state), 
                _.toNumber(action.data.amount)
                );
        case types.SHOW_CART_ITEM():
            return _.add(
                _.toNumber(state), 
                _.toNumber(action.data.amount)
                );
        case types.HIDE_CART_ITEM():
            return _.subtract(
                _.toNumber(state), 
                _.toNumber(action.data.amount)
                ); 
        case types.REMOVE_CART_ITEM():
            return _.subtract(
                _.toNumber(state), 
                _.toNumber(action.data.amount)
                );
        default:
            return state;
    }
};

export const cartReviewMode = (state = false, action) => {
    switch(action.type){
        case types.REVIEW_CART():
            return true;
        case types.CLOSE_CART_REVIEW():
            return false;
        default:
            return state;
    }
};

export const cartItemEditMode = (state = false, action) => {
    switch(action.type){
        case types.EDIT_ITEM_PACKAGE():
            return true;
        case types.CLOSE_PACKAGES_POPUP():
            return false;
        default: 
            return state;
    }
}

export const selectedCartItem = (state = {packages: []}, action) => {
    switch(action.type){
        case types.EDIT_ITEM_PACKAGE():
            return action.data;
        default:
            return state;
    }
}