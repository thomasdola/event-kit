import * as types from '../helpers/constants';
import * as loadingReducers from './loading-reducers';

import expect from 'expect';

import { startLoadingCategories, finishLoadingCategories } from '../actions/categories';
import { startLoadingService, startLoadingServices, finishLoadingService, finishLoadingServices } from '../actions/services';

describe('Loading Reducers', () => {
    
    describe('loadingCategories', () => {

        it('should maintain state when passed UNKNOWN_ACTION', () => {
            expect(loadingReducers.loadingCategories(false, {type: types.UNKNOWN_ACTION()}))
                .toEqual(false)
        });

        it('should set to true when passed START_LOADING_CATEGORIES', () => {
            expect(loadingReducers.loadingCategories(false, startLoadingCategories()))
                .toEqual(true);
        });

        it('should set to false when passed FINISH_LOADING_CATEGORIES', () => {
            expect(loadingReducers.loadingCategories(true, finishLoadingCategories()))
                .toEqual(false);
        });
    });

    describe('loadingServices', () => {

        it('should maintain state when passed UNKNOWN_ACTION', () => {
            expect(loadingReducers.loadingServices(false, {type: types.UNKNOWN_ACTION()}))
                .toEqual(false);
        });

        it('should set to true when passed START_LOADING_SERVICES', () => {
            expect(loadingReducers.loadingServices(false, startLoadingServices()))
                .toEqual(true);
        });

        it('should set to false when passed FINISH_LOADING_SERVICES', () => {
            expect(loadingReducers.loadingServices(true, finishLoadingServices()))
                .toEqual(false);
        });        
    });

    describe('loadingService', () => {

        it('should maintain state when passed UNKNOWN_ACTION', () => {
            expect(loadingReducers.loadingService(false, {type: types.UNKNOWN_ACTION()}))
                .toEqual(false);
        });

        it('should set to true when passed START_LOADING_SERVICE', () => {
            expect(loadingReducers.loadingService(false, startLoadingService()))
                .toEqual(true);
        });

        it('should set to false when passed FINISH_LOADING_SERVICE', () => {
            expect(loadingReducers.loadingService(true, finishLoadingService()))
                .toEqual(false);
        });
    });
});
