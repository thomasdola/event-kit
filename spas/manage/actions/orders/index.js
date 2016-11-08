import * as types from '../../helpers/constants';

import http from 'superagent';
import { push, goBack } from 'react-router-redux'

const moment = require('moment');


export const fetchOrdersSuccessful = orders => ({
    type: types.FETCH_ORDERS_SUCCESSFUL(),
    data: orders
});

export const changeDateRange = (start, end, status) => (dispatch) => {

    dispatch(updateOrdersPath(status, start, end));
    
    dispatch(
        {
            type: types.CHANGE_DATE_RANGE(),
            data: {start, end}
        }
    );
};

export const updateOrdersPath = (status, start, end) => dispatch => {
    dispatch(push(`/manage/orders?status=${status}&start=${moment(start).format('L')}&end=${moment(end).format('L')}`));
};

export const goBackToOrders = () => dispatch => {
    dispatch(goBack());
};

export const fetchOrders = (path, testUri = null) => dispatch => {
    const url = testUri ? testUri : `${types.URL()}${testUri}`;
    console.log('orders path has changed from fetchOrders action creator -> ', path);

    dispatch({type: types.START_FETCHING_ORDERS()});

    // return http.get(url)
    //     .then(({ body }) => {
    //         dispatch({type: types.FETCH_ORDERS_SUCCESSFUL(), data: body});
    //     })
    //     .catch(error => {
    //         dispatch({type: types.FETCH_ORDERS_FAILED(), data: error});
    //     });
};

export const fetchOrder = (orderId, testUri = null) => dispatch => {
    const uri = testUri ? testUri : `/api/manage/orders/${orderId}`;
    const url = `${types.URL()}${uri}`; 
    dispatch({type: types.START_FETCHING_ORDER()});

    return http.get(url)
        .then(({ body }) => {
            dispatch({type: types.FETCH_ORDER_SUCCESSFUL(), data: body});
        })
        .catch(error => {
            dispatch({type: types.FETCH_ORDER_FAILED(), data: error});
        });
};