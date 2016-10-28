import * as filterActions from '../actions/filter';
import * as types from '../helpers/constants';

import expect from 'expect';

import { filterMode, filterPriceRange } from './filter-reducers';

describe('filterReducers', () => {

    describe('fitlerModeReducer', () => {

        it('should set to true when passed OPEN_FILTER_POPUP', () => {
            const initialState = false;
            expect(filterMode(initialState, filterActions.openFilter())).toEqual(true);
        });

        it('should set to false when passed CLOSE_FILTER_POPUP', () => {
            expect(filterMode(true, filterActions.closeFilter())).toEqual(false);            
        });

        it('should maintain state when passed UNKNOWN_ACTION', () => {
            expect(filterMode(true, {type: types.UNKNOWN_ACTION()})).toEqual(true);            
        });
    });

    describe('filterPriceRangeReducer', () => {

        const initialState = {from: null, to: null};

        it('should set price range when passed PERFORM_FILTER', () => {
            const range = {from: 100, to: 200};
            const newState = filterPriceRange(initialState, filterActions.performFilter(range.from, range.to));
            expect(newState.from).toEqual(100);
            expect(newState.to).toEqual(200);
        });

        it('should maintain state when passed UNKNOWN_ACTION', () => {
            expect(filterPriceRange(initialState, {type: types.UNKNOWN_ACTION()})).toEqual(initialState);            
        });
    });
    
});