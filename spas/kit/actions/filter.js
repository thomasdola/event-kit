import * as types from '../helpers/constants';

export const performFilter = (from, to) => ({
    type: types.PERFORM_FILTER(),
    data: {from, to}
})

export const openFilter = () => ({type: types.OPEN_FILTER_POPUP()});

export const closeFilter = () => ({type: types.CLOSE_FILTER_POPUP()});