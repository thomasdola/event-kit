import * as types from '../helpers/constants';
import * as checkoutReducers from './checkout-reducers';

import expect from 'expect';

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

    describe('generatingPdfReducer', () => {

        it('should be set to true when passed START_GENERATING_PDF', () => {
            const initialState = false;
            const newState = checkoutReducers.generatingPdf(initialState, {type: types.START_GENERATING_PDF()});
            expect(newState).toEqual(true);
        });

        it('should be set to false when passed FINIHS_GENERATING_PDF or GENERATING_PDF_FAILED', () => {
            const initialState = true;
            const newState = checkoutReducers.generatingPdf(initialState, {type: types.FINISH_GENERATING_PDF()});
            expect(newState).toEqual(false);

            const newState2 = checkoutReducers.generatingPdf(initialState, {type: types.GENERATING_PDF_FAILED()});
            expect(newState2).toEqual(false);
        });

        it('should maintain state when passed UNKNOWN_ACTION', () => {
            const initialState = false;
            const newState = checkoutReducers.generatingPdf(initialState, {type: types.UNKNOWN_ACTION});
            expect(newState).toEqual(initialState);
        });
    });
});
