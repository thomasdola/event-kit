import * as types from '../helpers/constants';
import * as budgetActions from './budget';

import expect from 'expect';

describe('Budget Actions Creator', () => {
    describe('openChangeBudgetPopup', () => {
        it('should create OPEN_CHANGE_BUDGET_POPUP action', () => {
            // arrange
            const expectedAction = {type: types.OPEN_CHANGE_BUDGET_POPUP()};

            // act
            const actualAction = budgetActions.openChangeBudgetPopup();

            // test
            expect(expectedAction).toEqual(actualAction);
        });
    });

    describe('closeChangeBudgetPopup', () => {
        it('should create CLOSE_CHANGE_BUDGET_POPUP action', () => {
            // arrange
            const expectedAction = {type: types.CLOSE_CHANGE_BUDGET_POPUP()};

            // act
            const actualAction = budgetActions.closeChangeBudgetPopup();

            // test
            expect(expectedAction).toEqual(actualAction);
        });
    });

    describe('saveBudget', () => {
        it('should create SAVE_BUDGET action', () => {
            const amount = 2000;
            const expectedAction = {type: types.SAVE_BUDGET(), data: amount};
            const actualAction = budgetActions.saveBudget(amount);
            expect(expectedAction).toEqual(actualAction);
        });
    });
});