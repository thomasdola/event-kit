import * as types from '../helpers/constants';
import axios from 'axios';


export const launchFilter = () => ({type: types.FILTER_BY_PRICE}); 

export const closeForm = () => ({type: types.CLOSE_FILTER_PRICE_FORM});

export const performFilter = (from, to) => ({
    type: types.PERFORM_FILTER,
    data: {from, to}
});

const receiveServices = (services) => ({
    type: types.RECEIVE_SERVICES,
    data: services
});

const startLoadingServices = () => ({type: types.START_LOADING_SERVICES});

const finishLoadingServices = () => ({type: types.FINISH_LOADING_SERVICES});

const loadingServicesFailed = (error) => ({type: types.LOADING_SERVICES_FAILED, data: error});


const receiveService = (services) => ({
    type: types.RECEIVE_SERVICE,
    data: services
});

const startLoadingService = () => ({type: types.START_LOADING_SERVICE});

const finishLoadingService = () => ({type: types.FINISH_LOADING_SERVICE});

const loadingServiceFailed = (error) => ({type: types.LOADING_SERVICE_FAILED, data: error});


export const zoomOnService = service => ({
    type: types.VIEW_SERVICE,
    data: service
});


export const fetchService = serviceId => dispatch => {
    dispatch(startLoadingService());

    axios.get(`/api/services/${serviceId}`)
        .then(response => {
            dispatch(receiveService(response.data));
            dispatch(finishLoadingService());
        }).catch(error => {
            console.log(error);
            dispatch(loadingServiceFailed(error));
            dispatch(finishLoadingService());
        })
};

export const fetchServices = (categoryId, {from, to}) => dispatch => {

    dispatch(startLoadingServices());

    axios.get(`/api/categories/${categoryId}/services?from=${from}&to=${to}`)
        .then(function (response) {           
            dispatch(receiveServices(response.data));
            dispatch(finishLoadingServices());
        })
        .catch(function (error) {
            console.log(error);
            dispatch(loadingServicesFailed(error));
            dispatch(finishLoadingServices());
        });
};