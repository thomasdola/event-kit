import * as types from '../helpers/constants';

export const balanceIsOutOfRange = () => ({type: types.AMOUNT_OUT_OF_RANGE()});

export const balanceIsInRange = () => ({type: types.AMOUNT_IN_RANGE()});