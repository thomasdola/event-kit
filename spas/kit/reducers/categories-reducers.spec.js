import * as categoriesActions from '../actions/categories';
import * as types from '../helpers/constants';

import expect from 'expect';

import categoriesReducer, { 
    selectedCategory as selectedCategoryReducer 
} from './categories-reducer';

describe('categoryReducer', () => {
    
    it('should have categories when passed RECEIVE_CATEGORIES', () => {
        const initialState = [];
        const categories = [{id: 1}, {id: 2}];
        const newState = categoriesReducer(initialState, categoriesActions.receiveCategories(categories));
        expect(newState.length).toEqual(2);
        expect(newState[0].id).toEqual(1);
    });

    describe('selectedCategoryReducer', () => {

        it('should set the selected category when passed SELECT_CATEGORY', () => {
            const initialState = null;
            const category = {id: 1, name: 'category'};
            const action = categoriesActions.doSelectCategory(category.id);
            const newState = selectedCategoryReducer(initialState, action);
            expect(newState).toEqual(1);
        });
    });
});