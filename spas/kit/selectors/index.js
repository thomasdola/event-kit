import _ from 'lodash';
import { createSelector } from 'reselect';

const getBudget = ({ budget }) => budget;

export const askForInitialBudget = createSelector([getBudget], budget => _.isNull(budget));

const getCartItems = ({ cartItems }) => cartItems;

export const getVisibleItemsSelector = createSelector(
    [getCartItems], items => _.filter(items, {hidden: false})
);

const getCartItemsAmount = ({ cartItems }) => _.map(cartItems, item => item.hidden ? 0 : item.amount);

const getServices = ({ services }) => services;

export const getCartTotalSelector = createSelector(
    [getCartItemsAmount], (cartItemsAmount) => {
        return _.sum(cartItemsAmount);
    });

export const getBalanceSelector = createSelector(
    [getBudget, getCartTotalSelector], (budget, cartTotal) => {
        // console.log(`budget => ${budget} and total => ${cartTotal}`);
        return _.subtract(Number.parseInt(budget, 10), Number.parseInt(cartTotal, 10));
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

export const getOrderSelector = createSelector(
    [getVisibleItemsSelector], items => {
        items.map(({ id, amount }) => ({id, amount}))
    }
);
