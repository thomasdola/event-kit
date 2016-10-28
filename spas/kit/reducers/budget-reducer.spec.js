import * as budgetActions from '../actions/budget';
import * as types from '../helpers/constants';

import expect from 'expect';

import budgetReduer, { budgetChangingMode as budgetChangeModeReducer } from './budget-reducer';

describe('budgetReducer', () => {

    const initialState = null;

    it('should maintain state when passed UNKNOWN_ACTION', () => {
        const newState = budgetReduer(initialState, {type: types.UNKNOWN_ACTION});
        expect(newState).toBe(null);
    });

    it('should save budget when passed SAVE_BUDGET', () => {
        const action = budgetActions.saveBudget(2000);
        const newState = budgetReduer(initialState, action);
        expect(newState).toEqual(2000);
    });
});



describe('budgetChangeModeReducer', () => {
    
    it('should maintain state when passed UNKNOWN_ACTION', () => {
        const initialState = false;
        const newState = budgetChangeModeReducer(initialState, {type: types.UNKNOWN_ACTION});
        expect(newState).toBe(initialState);
    });

    it('should change state when passed OPEN_CHANGE_BUDGET_POPUP', () => {
        const initialState = false;
        const action = budgetActions.openChangeBudgetPopup();
        const newState = budgetChangeModeReducer(initialState, action);
        expect(newState).toBe(true);
    });

    it('should change state when passed CLOSE_CHANGE_BUDGET_POPUP', () => {
        const initialState = true;
        const action = budgetActions.closeChangeBudgetPopup();
        const newState = budgetChangeModeReducer(initialState, action);
        expect(newState).toBe(false);
    });
});
