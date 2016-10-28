import * as servicesActions from '../actions/services';
import * as types from '../helpers/constants';

import expect from 'expect';

import servicesReducer, { serviceInZoom, selectedService, servicesImages } from './services-reducers';

describe('Service Reducers', () => {
    
    describe('servicesReducer', () => {
        const services = [{id: 1, name: 'service'}];

        it('should add services when passed RECEIVE_SERVICES', () => {
            const action = servicesActions.receiveServices(services);
            const newState = servicesReducer([], action);
            expect(newState.length).toEqual(1);
        });

        it('should maintain state when passed UNKNOWN_ACTION', () => {
            const action = {type: types.UNKNOWN_ACTION()}
            const newState = servicesReducer([], action);
            expect(newState.length).toEqual(0);
        });
    });

    describe('servicesImagesReducer', () => {

        const service = {id: 'id', images: ['img1', 'img2']};
        
        it('should add new service images whe passed RECEIVE_SERVICE', () => {
            const action = servicesActions.receiveService(service);
            const newState = servicesImages([], action);
            expect(newState.length).toEqual(1);
            expect(newState[0].id).toEqual('id');
            expect(newState[0].images.length).toEqual(2);
        });

        it('should maintain state when passed UNKNOWN_ACTION', () => {
            const newState = servicesImages([], {type: types.UNKNOWN_ACTION()});
            expect(newState.length).toEqual(0);
        });
    });

    describe('serviceInZoom', () => {

        it('should add service when passed OPEN_SERVICE_ZOOM_MODAL', () => {
            const service = {id: 1, name: 'service', amount: 200};
            const action = servicesActions.openServiceZoomModal(service);
            const newState = serviceInZoom({}, action);
            expect(newState.id).toEqual(1);
        });

        it('should maintain when passed UNKNOWN_ACTION', () => {
            const newState = serviceInZoom({}, {type: types.UNKNOWN_ACTION()});
            expect(newState).toEqual({});
        });
    });

    // describe('selectedService', () => {

    //     it('should add service when passed OPEN_SERVICE_ZOOM_MODAL', () => {
    //         const service = {id: 1, name: 'service', amount: 200};
    //         const action = servicesActions.openServiceZoomModal(service);
    //         const newState = serviceInZoom({}, action);
    //         expect(newState.id).toEqual(1);
    //     });

    //     it('should maintain when passed UNKNOWN_ACTION', () => {
    //         const newState = selectedService({}, {type: types.UNKNOWN_ACTION()});
    //         expect(newState).toEqual({});
    //     });
    // });

});
