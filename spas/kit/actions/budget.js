import { CLOSE_CHANGE_BUDGET_FORM, CHANGE_BUDGET, SAVE_BUDGET } from '../helpers/constants';

export const changeBudget = () => {
    return {
        type: CHANGE_BUDGET
    };
};
export const closeForm = () => {
    return {
        type: CLOSE_CHANGE_BUDGET_FORM
    };
};
export const saveBudget = (newBudget) => {
    return {
        type: SAVE_BUDGET,
        data: newBudget
    };
};
