import * as types from '../helpers/constants';

import _ from 'lodash';

// export const selectedService = (state = null, action) => {
//     switch(action.type){
//         case types.OPEN_SERVICE_ZOOM_MODAL():
//             return action.data;
//         default:
//             return state;
//     }
// };

export const serviceZoomMode = (state = false, action) => {
    switch(action.type){
        case types.OPEN_SERVICE_ZOOM_MODAL():
            return true;
        case types.CLOSE_SERVICE_ZOOM_MODAL():
            return false;
        default:
            return state;
    }
};

export const serviceInZoom = (state = null, action) => {
    switch(action.type){
        case types.OPEN_SERVICE_ZOOM_MODAL():
            return action.data
        default:
            return state;
    }
}; 

export const servicesImages = (state = [], action) => {
    switch(action.type){
        case types.RECEIVE_SERVICE():
            const { id, images } = action.data;
            const ImagesObj = {id, images};
            return [..._.reject(state, {id: id}), ImagesObj];
        default:
            return state;
    }
};

export default (state = [], action) => {
    switch(action.type){
        case types.RECEIVE_SERVICES():
            return action.data;
        default: 
            return state;
    }
}