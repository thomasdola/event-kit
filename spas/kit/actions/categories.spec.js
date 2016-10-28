import * as types from '../helpers/constants';
import * as categoriesActions from './categories';

import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import nock from 'nock';
import thunk from 'redux-thunk';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);


describe('Categories Actions Creator', () => {
    
    describe('receiveCategories', () => {
        it('should create RECEIVE_CATEGOREIS action', () => {
            // const categoryId = 'id';
            // const expectedAction = {type: types.SELECT_CATEGORY(), data: categoryId};
            // const actualAction = categoriesActions.selectCategory(categoryId);
            // expect(expectedAction).toEqual(actualAction);
        });
    });

    describe('fetchCategories', () => {
        

        it('should create START_LOADING_CATEGORIES, RECEIVE_CATEGORIES and FINISH_LOADING_CATEGORIES actions', () => {

            nock(types.URL())
                .get(`/api/categories`)
                .reply(200, []);
            
            const expectedActions = [
                {type: types.START_LOADING_CATEGORIES()},
                {
                    type: types.RECEIVE_CATEGORIES(),
                    data: []
                },
                {type: types.FINISH_LOADING_CATEGORIES()}
            ];

            const store = mockStore({});

            return store.dispatch(categoriesActions.fetchCategories()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);                
            });
        });

        it('should create START_LOADING_CATEGORIES, LOADING_CATEGORIES_FAILED and FINISH_LOADING_CATEGORIES actions', () => {
            
            const wrongUri = '/api/category';
            
            nock(types.URL())
                .get(wrongUri)
                .reply(500);
            
            const expectedActions = [
                {type: types.START_LOADING_CATEGORIES()},
                {type: types.LOADING_CATEGORIES_FAILED()},
                {type: types.FINISH_LOADING_CATEGORIES()}
            ];

            const store = mockStore({});

            return store.dispatch(categoriesActions.fetchCategories(wrongUri)).then(() => {
                expect(store.getActions()[0]).toEqual(expectedActions[0]);                
                expect(store.getActions()[1].type).toEqual(expectedActions[1].type);                
                expect(store.getActions()[2]).toEqual(expectedActions[2]);                
            });
        });
    });

});