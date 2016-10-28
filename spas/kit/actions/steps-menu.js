import * as types from '../helpers/constants';

import _ from 'lodash';
import http from 'superagent';

import { fetchCategories } from './categories';

export const openStepsMenu = () => ({ type: types.OPEN_STEPS_MENU() });

export const closeStepsMenu = () => ({ type: types.CLOSE_STEPS_MENU() });

export const doSelectStep = id => ({type: types.SELECT_STEP(), data: id}); 

export const startLoadingSteps = () => ({ type: types.START_LOADING_STEPS()});

export const finishLoadingSteps = () => ({ type: types.FINISH_LOADING_STEPS()});

export const receiveSteps = steps => ({ type: types.RECEIVE_STEPS(), data: steps});

export const loadingStepsFailed = error => ({ type: types.LOADING_STEPS_FAILED(), data: error});

export const selectStep = stepId => dispatch => {
    dispatch(doSelectStep(stepId));

    return dispatch(fetchCategories(stepId));
};

export const fetchSteps = (testUri = null) => dispatch => {

    const uri = testUri 
                ? testUri
                : `/api/steps`;

    const url = `${types.URL()}${uri}`;

    dispatch(startLoadingSteps());

    return http.get(url)
        .then(({ body }) => {
            console.log(body);
            dispatch(receiveSteps(body));
            dispatch(finishLoadingSteps());
            return dispatch(selectStep(_.first(body).id));
        })
        .catch(error => {
            dispatch(loadingStepsFailed(error));
            dispatch(finishLoadingSteps());
        })
};