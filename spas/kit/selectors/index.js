import _ from 'lodash';
import { createSelector } from 'reselect';

const getBudget = ({ budget }) => budget;

export const askForInitialBudget = createSelector([getBudget], budget => _.isNull(budget));

const getServices = ({ services }) => services;

const getCartTotal = ({ cartTotal }) => cartTotal;

export const getBalanceSelector = createSelector(
    [getBudget, getCartTotal], (budget, cartTotal) => {
        return _.subtract(budget, cartTotal);
    });

const getServiceInZoomId = ({ serviceInZoom }) => serviceInZoom;

const getServicesImages = ({ servicesImages }) => servicesImages;

export const getServiceInZoomSelector = createSelector(
    [getServiceInZoomId, getServices], (id, services) => {
        return _.find(services, {id}) || {};
    }
);

export const getServiceInZoomImagesSelector = createSelector(
    [getServiceInZoomId, getServicesImages], 
    (serviceInZoomId, servicesImages) => {
        return _.find(servicesImages, {id: serviceInZoomId});
    }
);
