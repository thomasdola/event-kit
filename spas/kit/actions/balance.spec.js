import * as types from '../helpers/constants';
import * as balanceActions from './balance';

import expect from 'expect';

describe('Balance Actions Creator', () => {

    describe('balanceIsOutOfRange', () => {
        it('should create AMOUNT_OUT_RANGE action', () => {
            // arrange
            const expectedAction = {type: types.AMOUNT_OUT_OF_RANGE()};

            // act
            const actualAction = balanceActions.balanceIsOutOfRange();

            // test
            expect(actualAction).toEqual(expectedAction);
        });
    });

    describe('balanceIsInRange', () => {
        it('should create AMOUNT_IN_RANGE action', () => {
            // arrange
            const expectedAction = {type: types.AMOUNT_IN_RANGE()};

            // act
            const actualAction = balanceActions.balanceIsInRange();

            // test
            expect(actualAction).toEqual(expectedAction);
        });
    });
});