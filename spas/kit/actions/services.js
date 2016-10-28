import * as types from '../helpers/constants';

import _ from 'lodash';
import http from 'superagent';

import { getServiceInZoomImages } from '../selectors';

export const openFilterPopup = () => ({type: types.OPEN_FILTER_POPUP()}); 

export const closeFilterPopup = () => ({type: types.CLOSE_FILTER_POPUP()});

export const performFilter = (from, to) => ({
    type: types.PERFORM_FILTER(),
    data: {from, to}
});

export const receiveServices = (services) => ({
    type: types.RECEIVE_SERVICES(),
    data: services
});

export const startLoadingServices = () => ({type: types.START_LOADING_SERVICES()});

export const finishLoadingServices = () => ({type: types.FINISH_LOADING_SERVICES()});

export const loadingServicesFailed = (error) => ({type: types.LOADING_SERVICES_FAILED(), data: error});


export const receiveService = (service) => ({
    type: types.RECEIVE_SERVICE(),
    data: service
});

export const startLoadingService = () => ({type: types.START_LOADING_SERVICE()});

export const finishLoadingService = () => ({type: types.FINISH_LOADING_SERVICE()});

export const loadingServiceFailed = (error) => ({type: types.LOADING_SERVICE_FAILED(), data: error});


export const zoomOnService = id => dispatch => {
    dispatch(openServiceZoomModal(id));
    return dispatch(fetchServiceIfNeeded(id));
};

export const openServiceZoomModal = id => ({
    type: types.OPEN_SERVICE_ZOOM_MODAL(),
    data: id
});

export const closeServiceZoomModal = () => ({
    type: types.CLOSE_SERVICE_ZOOM_MODAL()
});

const shouldFetchNewService = ({ servicesImages }, serviceId) => {
    return _.find(servicesImages, {id: serviceId});
};

export const fetchServiceIfNeeded = 
    (serviceId, testUri = null) => (dispatch, getState) => {
        const serImgs = shouldFetchNewService(getState(), serviceId);
        if(_.isEmpty(serImgs)){
            return dispatch(fetchService(serviceId, testUri));
        }else{
            dispatch(receiveService(serImgs));
            return Promise.resolve();
        }
    };

export const fetchService = (serviceId, testUri = null) => dispatch => {
    
    const uri = testUri 
                ? testUri
                : `/api/services/${serviceId}`;

    const url = `${types.URL()}${uri}`;

    dispatch(startLoadingService());

    return http.get(url)
        .then(response => {
            dispatch(receiveService(response.body));
            dispatch(finishLoadingService());
        }, error => {
            dispatch(loadingServiceFailed(error));
            dispatch(finishLoadingService());
        });
};

export const fetchServices = (categoryId, {from, to}, testUri = null) => dispatch => {

    dispatch(startLoadingServices());

    const uri = testUri 
                ? testUri 
                : `/api/categories/${categoryId}/services?from=${from}&to=${to}`;
    
    const url = `${types.URL()}${uri}`;

    return http.get(url)
        .then(function (response) {           
            dispatch(receiveServices(response.body));
            dispatch(finishLoadingServices());
        }, (error) => {
            dispatch(loadingServicesFailed(error));
            dispatch(finishLoadingServices());
        });
};