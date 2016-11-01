
import * as types from '../helpers/constants';

import expect from 'expect';

import * as checkoutReducers from './checkout-reducers';

describe('checkoutReducers', () => {

    describe('clientDetailsReducer', () => {

        const client = {firstName: 'first name', lastName: 'last name'};
        const initialState = {};

        // it('should maintain state when passed UNKNOWN_ACTION', () => {
        //     const newState = checkoutReducers.clientDetails(initialState, {type: types.UNKNOWN_ACTION()});
        //     expect(newState).toBe(initialState);
        // });
    });

    describe('clientDetailsReducer', () => {

        it('should maintain state when passed UNKNOWN_ACTION', () => {
            const initialState = false;
            const newState = checkoutReducers.clientDetailsMode(initialState, {type: types.UNKNOWN_ACTION()});
            expect(newState).toBe(initialState);
        });

        it('should change state to true when passed PROCEED_TO_CHECKOUT', () => {
            const initialState = false;
            const newState = checkoutReducers.clientDetailsMode(initialState, {type: types.PROCEED_TO_CHECKOUT()});
            expect(newState).toBe(true);
        });
    });
});
