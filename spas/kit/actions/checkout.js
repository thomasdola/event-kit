import * as types from '../helpers/constants';

import _ from 'lodash';
import http from 'superagent';

// import http from 'axios';

export const proceedToCheckout = () => ({type: types.PROCEED_TO_CHECKOUT()});

export const checkout = (data, testUri = null) => dispatch => {

    const uri = testUri ? testUri : `/api/orders`;

    const url = `${types.URL()}${uri}`;

    dispatch({type: types.START_CHECKING_OUT()});

    return http.post(url, data).then(resp => {
        console.log(resp.status);
        dispatch({type: types.FINISH_CHECKING_OUT()});
    }).catch(error => {
        dispatch({type: types.CHECKING_OUT_FAILED(), data: error});
    });
};

export const verifyPhoneNumber = (code, testUri = null) => dispatch => {

    const uri = testUri ? testUri : `/api/orders/validate`;

    const url = `${types.URL()}${uri}`;

    dispatch({type: types.START_VERIFYING_NUMBER()});

    return http.post(url, code)
        .then(resp => {
            dispatch({type: types.FINISH_VERIFYING_NUMBER()})
        }).catch(error => {
            dispatch({type: types.VERIFYING_NUMBER_FAILED(), data: error})
        })
};

export const requestNewCode = (phone, testUri = null) => dispatch => {

    const uri = testUri ? testUri : `/api/orders/retry`;

    const url = `${types.URL()}${uri}`;

    dispatch({type: types.START_REQUESTING_CODE()});

    return http.post(url, phone)
        .then(resp => {
            dispatch({type: types.FINISH_REQUESTING_CODE()})
        })
        .catch(error => {
            dispatch({type: types.REQUESTING_CODE_FAILED(), data: error})
        })
};

export const closeClientDetailsModal = () => ({type: types.CLOSE_CLIENT_DETAILS_MODAL()});


// export const checkoutFailed = error => ({type: types.CHECKOUT_FAILED(), data: error});

