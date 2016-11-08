import * as types from '../../helpers/constants';
import * as actions from './index';

import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import nock from 'nock';
import thunk from 'redux-thunk';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Oders Action Creators', () => {
    
    describe('fetchOrdersSuccessfull', () => {
        
        it('should create FETCH_ORDERS_SUCCESSFUL action', () => {
            expect(actions.fetchOrdersSuccessful([])).toEqual({type: types.FETCH_ORDERS_SUCCESSFUL(), data: []});
        })
    });

    describe('fetchOrders', () => {
        
        // it('should create START_FETCHING_ORDERS, FETCH_ORDERS_SUCCESSFUL actions', () => {

        //     const queries = {status: 'new', start: new Date(), end: new Date()};

        //     nock(types.URL())
        //         .get(`/api/manage/orders?status=${queries.status}&start=${queries.start}&end=${queries.end}`)
        //         .reply(200, []);

        //     const expectedActions = [
        //         {type: types.START_FETCHING_ORDERS()},
        //         {
        //             type: types.FETCH_ORDERS_SUCCESSFUL(),
        //             data: []
        //         }
        //     ];

        //     const store = mockStore({});

        //     return store.dispatch(actions.fetchOrders(queries.status, queries.start, queries.end)).then(() => {
        //         expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
        //         expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
        //     });
        // });
    });

    describe('fetchOrder', () => {
        
        it('should create START_FETCHING_ORDER, FETCH_ORDER_SUCCESSFUL actions', () => {

            const orderId = 4655465;
            const order = {
                    orderId: 4655465,
                    status: 'in-progress',
                    clientName: 'thomas paulson',
                    phoneNumber: '0248089578',
                    date: '12/12/2016',
                    amount: 50000,
                    category: 'wedding',
                    items: []
                };

            nock(types.URL())
                .get(`/api/manage/orders/${orderId}`)
                .reply(200, order);

            const expectedActions = [
                {type: types.START_FETCHING_ORDER()},
                {
                    type: types.FETCH_ORDER_SUCCESSFUL(),
                    data: order
                }
            ];

            const store = mockStore({});

            return store.dispatch(actions.fetchOrder(orderId)).then(() => {
                // expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});
