import * as types from '../helpers/constants';

export const openChangeBudgetPopup = () => {
    return {
        type: types.OPEN_CHANGE_BUDGET_POPUP()
    };
};
export const closeChangeBudgetPopup = () => {
    return {
        type: types.CLOSE_CHANGE_BUDGET_POPUP()
    };
};
export const saveBudget = (newBudget) => {
    return {
        type: types.SAVE_BUDGET(),
        data: newBudget
    };
};
