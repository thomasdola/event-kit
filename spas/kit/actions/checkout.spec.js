import * as types from '../helpers/constants';
import * as actions from './checkout';

import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import nock from 'nock';
import thunk from 'redux-thunk';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Checkout Actions Creators', () => {

    describe('proceedToCheckout Action Creator', () => {

        it('should create PROCEED_TO_CHECKOUT action', () => {
            const expectedAction = {type: types.PROCEED_TO_CHECKOUT()};
            const action = actions.proceedToCheckout();
            expect(action).toEqual(expectedAction);
        })
    });

    describe('checkout Action Creator', () => {

        const data = {
            client: {name: 'thomas'},
            order: [
                {
                    id: 'id',
                    amount: 200
                }
            ]
        };

        it('should create START_CHECKING_OUT, FINISH_CHECKING_OUT actions', () => {

            nock(types.URL())
                .post(`/api/orders`, data)
                .reply(200);

            const expectedActions = [
                {type: types.START_CHECKING_OUT()},
                {type: types.FINISH_CHECKING_OUT()}
            ];

            const store = mockStore({});

            return store.dispatch(actions.checkout(data)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('should create START_CHECKING_OUT, CHECKING_OUT_FAILED actions', () => {

            const wrongUri = `/api/dddd`;
            nock(types.URL())
                .post(wrongUri, data)
                .reply(404);

            const expectedActions = [
                {type: types.START_CHECKING_OUT()},
                {type: types.CHECKING_OUT_FAILED()}
            ];

            const store = mockStore({});

            return store.dispatch(actions.checkout(data, wrongUri)).then(() => {
                expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
                expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
            });
        });

    });

    describe('verifyPhoneNumber Action Creator', () => {

        const code = {code: 1234};

        it('should create START_VERIFYING_NUMBER, FINISH_VERIFYING_NUMBER actions', () => {

            nock(types.URL())
                .post(`/api/orders/validate`, code)
                .reply(200);

            const expectedActions = [
                {type: types.START_VERIFYING_NUMBER()},
                {type: types.FINISH_VERIFYING_NUMBER()}
            ];

            const store = mockStore({});

            return store.dispatch(actions.verifyPhoneNumber(code)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('should create START_VERIFYING_NUMBER, VERIFYING_NUMBER_FAILED actions', () => {

            const wrongUri = `/api/orders/validte`;
            nock(types.URL())
                .post(wrongUri, code)
                .reply(404);

            const expectedActions = [
                {type: types.START_VERIFYING_NUMBER()},
                {type: types.VERIFYING_NUMBER_FAILED()}
            ];

            const store = mockStore({});

            return store.dispatch(actions.verifyPhoneNumber(code, wrongUri)).then(() => {
                expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
                expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
            });
        });

    });


    describe('requestNewCode Action Creator', () => {

        const phone = {phone: +233244567823};

        it('should create START_REQUESTING_CODE, FINISH_REQUESTING_CODE actions', () => {

            nock(types.URL())
                .post(`/api/orders/retry`, phone)
                .reply(200);

            const expectedActions = [
                {type: types.START_REQUESTING_CODE()},
                {type: types.FINISH_REQUESTING_CODE()}
            ];

            const store = mockStore({});

            return store.dispatch(actions.requestNewCode(phone)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('should create START_REQUESTING_CODE, REQUESTING_CODE_FAILED actions', () => {

            const wrongUri = `/api/orders/validte`;
            nock(types.URL())
                .post(wrongUri, phone)
                .reply(404);

            const expectedActions = [
                {type: types.START_REQUESTING_CODE()},
                {type: types.REQUESTING_CODE_FAILED()}
            ];

            const store = mockStore({});

            return store.dispatch(actions.requestNewCode(phone, wrongUri)).then(() => {
                expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
                expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
            });
        });

    });

});