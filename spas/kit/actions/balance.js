import { AMOUNT_OUT_RANGE, AMOUNT_IN_RANGE } from '../helpers/constants';

export const balanceIsOutOfRange = () => ({type: AMOUNT_OUT_RANGE});

export const balanceIsInRange = () => ({type: AMOUNT_IN_RANGE});