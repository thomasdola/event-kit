import * as types from '../helpers/constants';
import axios from 'axios';

const receiveCategories = (categories) => ({
    type: types.RECEIVE_CATEGORIES,
    data: categories
});

const startLoadingCategories = () => ({type: types.START_LOADING_CATEGORIES});

const finishLoadingCategories = () => ({type: types.FINISH_LOADING_CATEGORIES});

const loadingCategoriesFailed = (error) => ({type: types.LOADING_CATEGORIES_FAILED, data: error});

export const selectCategory = (categoryId) => {
    console.log(categoryId);
    return {type: types.SELECT_CATEGORY, data: categoryId}
};

export const fetchCategories = () => ((dispatch) => {

    dispatch(startLoadingCategories());

    axios.get(`/api/categories`)
        .then(function (response) {           
            dispatch(receiveCategories(response.data));
            dispatch(finishLoadingCategories());
        })
        .catch(function (error) {
            console.log(error);
            dispatch(loadingCategoriesFailed(error));
            dispatch(finishLoadingCategories());
        });
});