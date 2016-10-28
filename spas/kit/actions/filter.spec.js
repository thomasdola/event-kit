import * as filterActions from '../actions/filter';
import * as types from '../helpers/constants';

import expect from 'expect';

describe('Filter Actions Creator', () => {
    
    describe('performFilter', () => {
        
        it('should create PERFORM_FILTER action', () => {
            const from = 100,
                to = 200;

            const expectedAction = {
                type: types.PERFORM_FILTER(),
                data: {
                    from,
                    to
                }
            }

            expect(filterActions.performFilter(from, to)).toEqual(expectedAction);
        });
    });

    describe('openFilterPopup', () => {
        
        it('should create OPEN_FILTER_POPUP', () => {
            const expectedAction = {type: types.OPEN_FILTER_POPUP()};
            expect(filterActions.openFilter()).toEqual(expectedAction);            
        });
    });

    describe('closeFilterPopup', () => {
        
        it('should create CLOSE_FILTER_POPUP', () => {
            const expectedAction = {type: types.CLOSE_FILTER_POPUP()};
            expect(filterActions.closeFilter()).toEqual(expectedAction);
        });
    });
});