import * as types from '../helpers/constants';
import * as actions from './steps-menu';

import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import nock from 'nock';
import thunk from 'redux-thunk';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Steps Menu Actions Creator', () => {

    describe('openStepsMenu', () => {

        it('should create OPEN_STEPS_MENU action', () => {
            expect(actions.openStepsMenu().type).toEqual(types.OPEN_STEPS_MENU());
        });
    });

    describe('closeStepsMenu', () => {

        it('should create CLOSE_STEPS_MENU action', () => {
            expect(actions.closeStepsMenu().type).toEqual(types.CLOSE_STEPS_MENU());
        });
    });

    describe('fetchSteps', () => {

        it('should create START_LOADING_STEPS, RECEIVE_STEPS, FINIISH_LOADING_STEPS actions', () => {
            nock(types.URL())
                .get('/api/steps')
                .reply(200, [{id: 1}]);

            const expectedActions = [
                {type: types.START_LOADING_STEPS()},
                {type: types.RECEIVE_STEPS(), data: []},
                {type: types.FINISH_LOADING_STEPS()}
            ];

            const store = mockStore({});
            return store.dispatch(actions.fetchSteps()).then(() => {
                expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
                expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
                expect(store.getActions()[2].type).toEqual(expectedActions[2].type);
            });
        });

        it('should create START_LOADING_STEPS, LOADING_STEPS_FAILED, FINIISH_LOADING_STEPS actions', () => {
            const testUri = '/api/stes';
            nock(types.URL())
                .get(testUri)
                .reply(404);

            const expectedActions = [
                {type: types.START_LOADING_STEPS()},
                {type: types.LOADING_STEPS_FAILED(), data: []},
                {type: types.FINISH_LOADING_STEPS()}
            ];

            const store = mockStore({});
            return store.dispatch(actions.fetchSteps(testUri)).then(() => {
                expect(store.getActions()[0]).toEqual(expectedActions[0]);
                expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
                expect(store.getActions()[2]).toEqual(expectedActions[2]);
            });
        });
    });
});