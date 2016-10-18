import { STATE } from './constants';
import schema from './state-schema';

export const getCurrentState = () => {
    return JSON.parse(localStorage.getItem(STATE)) || undefined;
};
export const saveCurrentState = (state) => {
    localStorage.setItem(STATE, JSON.stringify(state));
};

export const updateCurrentStateItem = ({key, value}) => {
    const currentState = getCurrentState() || {};
    currentState[key] = value;
    saveCurrentState(currentState);
};

// export const init = () => {
//     console.log(schema);
//     saveCurrentState(schema);
//     console.log('local storage ready...');
// };