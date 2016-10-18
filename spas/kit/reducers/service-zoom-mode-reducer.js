import { ZOOM_IN_ON_SERVICE, ZOOM_OUT_OF_SERVICE } from '../helpers/constants';

export default (state = false, action) => {
    switch(action.type){
        case ZOOM_IN_ON_SERVICE:
            return true;
        case ZOOM_OUT_OF_SERVICE:
            return false;
        default:
            return state;
    }
};