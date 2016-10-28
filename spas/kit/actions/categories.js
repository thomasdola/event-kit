import * as types from '../helpers/constants';

import _ from 'lodash';
import http from 'superagent';

import { fetchServices } from '../actions/services';

export const receiveCategories = (categories) => ({
    type: types.RECEIVE_CATEGORIES(),
    data: categories
});

export const startLoadingCategories = () => ({type: types.START_LOADING_CATEGORIES()});

export const finishLoadingCategories = () => ({type: types.FINISH_LOADING_CATEGORIES()});

export const loadingCategoriesFailed = (error) => ({type: types.LOADING_CATEGORIES_FAILED(), data: error});

export const doSelectCategory = categoryId => {
    return {type: types.SELECT_CATEGORY(), data: categoryId};
};

export const selectCategory = (categoryId) => dispatch => {
    dispatch(doSelectCategory(categoryId));
    return dispatch(fetchServices(categoryId, {from: null, to: null}));
};

export const fetchCategories = (stepId, testUri = null) => dispatch => {
    const uri = testUri ? testUri : `/api/steps/${stepId}/categories`;

    const url = `${types.URL()}${uri}`;   
    
    dispatch(startLoadingCategories());

    return http.get(url)
        .then(({ body }) => {
            dispatch(receiveCategories(body));
            dispatch(finishLoadingCategories());
            return dispatch(selectCategory(_.first(body).id));
        }).catch(error => {
            dispatch(loadingCategoriesFailed(error));
            dispatch(finishLoadingCategories());
        });
};