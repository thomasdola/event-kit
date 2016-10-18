import { ADD_ITEM_TO_CART, HIDE_CART_ITEM, REMOVE_CART_ITEM, SHOW_CART_ITEM, REMOVE_HIDDEN_CART_ITEM } from '../helpers/constants';
import _ from 'lodash';

const toggleItemVisiblity = (collection, item, hidden) => {
    console.log('hidden -> ', hidden);
    const itemIndex = _.findIndex(collection, {id: item.id});
    const changedItem = _.assign({}, item, {hidden: hidden});
    const newCollection = _.reject(collection, {id: item.id});
    newCollection.splice(itemIndex, 0, changedItem);
    console.log('new collection => ', newCollection);
    return newCollection;
};


export default (state = [], action) => {
    switch(action.type){
        case ADD_ITEM_TO_CART:
            return [...state, action.data];
        case SHOW_CART_ITEM:
            return [...toggleItemVisiblity(state, _.find(state, {id: action.data.id}), false)];
        case HIDE_CART_ITEM:
            return [...toggleItemVisiblity(state, _.find(state, {id: action.data.id}), true)];
        case REMOVE_CART_ITEM:
            return _.reject(state, item => item.id === action.data.id);
        case REMOVE_HIDDEN_CART_ITEM:
            return _.reject(state, item => item.id === action.data.id);
        default: 
            return state;
    }
};