import * as stepsActions from '../actions/steps-menu';
import * as types from '../helpers/constants';

import expect from 'expect';

import { stepsMenuOpened, steps, activeStep } from '../reducers/steps-menu-reducer'

describe('StepsMenu Reducer', () => {
    
    it('should set open menu to true when passed OPEN_STEPS_MENU', () => {
        const state = stepsMenuOpened(false, stepsActions.openStepsMenu());
        expect(state).toBe(true);
    });

    it('should set open menu to true when passed OPEN_STEPS_MENU', () => {
        const state = stepsMenuOpened(true, stepsActions.closeStepsMenu());
        expect(state).toBe(false);
    });

    it('should maintain when passed UNKNOWN_ACTION', () => {
        const state = stepsMenuOpened(false, {type: types.UNKNOWN_ACTION()});
        expect(state).toBe(false);
    });

    describe('Steps Reducer', () => {

        const data = [
            {
                id: 1,
                name: 'step 1'
            }
        ];
    
        it('should set open menu to true when passed OPEN_STEPS_MENU', () => {
            const action = stepsActions.receiveSteps(data);
            const newState = steps([], action);
            expect(newState.length).toEqual(1);
            expect(newState).toEqual(data);
        });

        it('should maintain when passed UNKNOWN_ACTION', () => {
            const state = steps([], {type: types.UNKNOWN_ACTION()});
            expect(state).toEqual([]);
        });

    });

    describe('ActiveStep Reducer', () => {

        it('should maintain when passed SELECT_STEP', () => {
            const state = activeStep(null, {type: types.SELECT_STEP(), data: 1});
            expect(state).toEqual(1);
        });

        it('should maintain when passed UNKNOWN_ACTION', () => {
            const state = activeStep(null, {type: types.UNKNOWN_ACTION()});
            expect(state).toBe(null);
        });
    });
});

