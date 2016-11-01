import * as types from '../helpers/constants';
import * as servicesActions from './services';

import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import nock from 'nock';
import thunk from 'redux-thunk';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);


describe('Services Actions Creator', () => {

    describe('openFilterPopup', () => {
        it('should create OPEN_FILTER_POPUP action', () => {
            expect(types.OPEN_FILTER_POPUP()).toEqual(servicesActions.openFilterPopup().type);
        });
    });

    describe('closeFilterPopup', () => {
        it('should create CLOSE_FILTER_POPUP action', () => {
            expect(types.CLOSE_FILTER_POPUP()).toEqual(servicesActions.closeFilterPopup().type);
        });
    });

    describe('performFilter', () => {
        it('should create PERFORM_FILTER action', () => {
            const from = 100;
            const to = 200;
            expect({type: types.PERFORM_FILTER(), data: {from, to}}).toEqual(servicesActions.performFilter(from, to));
        });
    });

    describe('openServiceZoomModal', () => {
        it('should create OPEN_SERVICE_ZOOM_MODAL action', () => {
            expect(types.OPEN_SERVICE_ZOOM_MODAL()).toEqual(servicesActions.openServiceZoomModal().type);
        });
    });

    describe('closeServiceZoomModal', () => {
        it('should create CLOSE_SERVICE_ZOOM_MODAL action', () => {
            expect(types.CLOSE_SERVICE_ZOOM_MODAL()).toEqual(servicesActions.closeServiceZoomModal().type);
        });
    });

    describe('fetchServices', () => {
        const categoryId = 1,
                from = 200,
                to = 300;

        it('should create START_LOADING_SERVICES, RECEIVE_SERVICES and FINISH_LOADING_SERVICES actions', () => {

            nock(types.URL())
                .get(`/api/categories/${categoryId}/services?from=${from}&to=${to}`)
                .reply(200, []);

            const expectedActions = [
                {type: types.START_LOADING_SERVICES()},
                {type: types.RECEIVE_SERVICES(), data: []},
                {type: types.FINISH_LOADING_SERVICES()}
            ];

            const store = mockStore({});
            return store.dispatch(servicesActions.fetchServices(categoryId, {from, to})).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('should create START_LOADING_SERVICES, FAILED_LOADING_SERVICES and FINISH_LOADING_SERVICES actions', () => {

            const wrongUri = `/api/categories/${categoryId}/servic?from=${from}&to=${to}`;
            nock(types.URL())
                .get(wrongUri)
                .reply(500);

            const expectedActions = [
                {type: types.START_LOADING_SERVICES()},
                {type: types.LOADING_SERVICES_FAILED()},
                {type: types.FINISH_LOADING_SERVICES()}
            ];

            const store = mockStore({});
            return store.dispatch(servicesActions.fetchServices(categoryId, {from, to}, wrongUri))
                .then(() => {
                    expect(store.getActions()[0]).toEqual(expectedActions[0]);
                    expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
                    expect(store.getActions()[2]).toEqual(expectedActions[2]);
                });
        });
    });

    describe('fetchService', () => {

        const serviceId = 1;

        it('should create START_LOADING_SERVICE, RECEIVE_SERVICE and FINISH_LOADING_SERVICE actions', () => {

            nock(types.URL())
                .get(`/api/services/${serviceId}`)
                .reply(200, {});

            const expectedActions = [
                {type: types.START_LOADING_SERVICE()},
                {type: types.RECEIVE_SERVICE(), data: {}},
                {type: types.FINISH_LOADING_SERVICE()}
            ];

            const store = mockStore({});
            return store.dispatch(servicesActions.fetchService(serviceId)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('should create START_LOADING_SERVICE, RECEIVE_SERVICE and FINISH_LOADING_SERVICE actions if needed', () => {

            nock(types.URL())
                .get(`/api/services/${serviceId}`)
                .reply(200, {});

            const expectedActions = [
                {type: types.START_LOADING_SERVICE()},
                {type: types.RECEIVE_SERVICE(), data: {}},
                {type: types.FINISH_LOADING_SERVICE()}
            ];

            const store = mockStore({});
            return store.dispatch(servicesActions.fetchServiceIfNeeded(serviceId)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('should create RECEIVE_SERVICE if not needed', () => {
            nock(types.URL())
                .get(`/api/services/${serviceId}`)
                .reply(200, {});

            const expectedActions = [
                {type: types.RECEIVE_SERVICE(), data: {id: serviceId, images: []}}
            ];

            const store = mockStore({servicesImages: [{id: 1, images: []}], selectedService: 1});
            return store.dispatch(servicesActions.fetchServiceIfNeeded(serviceId)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('should create START_LOADING_SERVICE, FAILED_LOADING_SERVICE and FINISH_LOADING_SERVICE actions', () => {

            const wrongUri = `/api/service/${serviceId}`;

            nock(types.URL())
                .get(wrongUri)
                .reply(500);

            const expectedActions = [
                {type: types.START_LOADING_SERVICE()},
                {type: types.LOADING_SERVICE_FAILED()},
                {type: types.FINISH_LOADING_SERVICE()}
            ];

            const store = mockStore({});
            return store.dispatch(servicesActions.fetchService(serviceId, wrongUri))
                .then(() => {
                    expect(store.getActions()[0]).toEqual(expectedActions[0]);
                    expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
                    expect(store.getActions()[2]).toEqual(expectedActions[2]);
                });

        });
    });

});