import * as ordersActions from '../../actions/orders';
import * as types from '../../helpers/constants';
import * as ordersReducers from './index';

import expect from 'expect';

describe('Orders Reducers', () => {
    
    describe('orders', () => {
        
        it('should have orders items when passed FETCH_ORDERS_SUCESSFUL', () => {
            // const params = {status: 'new', start: new Date(), end: new Date()}
            const orders = [];
            const initialState = [];
            // const action = ordersActions.fetchOrders(params.status, params.start, params.end);
            const action = ordersActions.fetchOrdersSuccessful(orders);
            const newState = ordersReducers.orders(initialState, action);
            expect(newState).toEqual(orders);
        });
    });

    describe('dateRange', () => {
        
        it('should have date range when passed ORDERS_DATE_RANGE_CHANGE', () => {
            const dateRange = {start: new Date(), end: new Date()};
            const initialState = dateRange;
            const action = ordersActions.changeDateRange(dateRange.start, dateRange.end);
            const newState = ordersReducers.dateRange(newState, action);
            expect(newState).toEqual(dateRange);
        })
    });
});