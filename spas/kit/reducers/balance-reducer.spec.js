import * as balanceActions from '../actions/balance';
import * as types from '../helpers/constants';

import expect from 'expect';

import balanceReducer from './balance-reducer';
import { saveBudget } from '../actions/budget';

describe('balanceReducer', () => {
    
    it('should save amount when passed SAVE_BUDGET', () => {
        const initialState = {
            amount: null,
            isInRange: true
        };

        const action = saveBudget(200);

        const newState = balanceReducer(initialState, action);

        expect(newState.amount).toEqual(200);
        expect(newState.isInRange).toBe(true);
    });

    describe('Balance (being in range) State', () => {

        it('set to true when passed AMOUNT_IN_RANGE', () => {
            const initialState = {
                isInRange: false
            }

            const action = balanceActions.balanceIsInRange();

            const newState = balanceReducer(initialState, action);

            expect(newState.isInRange).toBe(true);
        });

        it('set to false when passed AMOUNT_OUT_OF_RANGE', () => {
            const initialState = {
                isInRange: true
            }

            const action = balanceActions.balanceIsOutOfRange();

            const newState = balanceReducer(initialState, action);

            expect(newState.isInRange).toBe(false);
        });

    });

    it('should maintain state when passed UNKNOWN_ACTION', () => {
        const unknown_action = () => ({
            type: types.UNKNOWN_ACTION
        });

        const initialState = {
            amount: null,
            isInRange: true
        };

        const action = unknown_action();

        const newState = balanceReducer(initialState, action);

        expect(newState.amount).toEqual(null);
        expect(newState.isInRange).toBe(true);
    });

});