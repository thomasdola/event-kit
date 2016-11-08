import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { orders, dateRange, ordersPath } from './orders';

export default combineReducers({
    routing: routerReducer,
    orders,
    dateRange,
    ordersPath
});