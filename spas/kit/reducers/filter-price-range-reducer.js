import { PERFORM_FILTER } from '../helpers/constants';
import _ from 'lodash';

export default (state = {from: null, to: null}, action) => {
    switch(action.type){
        case PERFORM_FILTER:
            return _.assign({}, state, action.data);
        default:
            return state;
    }
};