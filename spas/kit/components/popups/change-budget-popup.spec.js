import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme';

import ChangeBudgetPopup from './change-budget-popup';

const props = {
    saveBudget: () => {},
    closeForm: () => {}
};

const setup = () => shallow(<ChangeBudgetPopup {...props}/>);

const setupMount = () => mount(<ChangeBudgetPopup {...props}/>);

describe('ChangeBudgetPopup Component', () => {
    
    describe('Markup', () => {

        it('renders the popup', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(ChangeBudgetPopup);
        });

        it('renders the form', () => {
            const wrapper = setup();
            expect(wrapper.find('.Change__Budget__Popup .Form').length).toBe(1);
        });

        it('renders the input fied', () => {
            const wrapper = setup();
            expect(wrapper.find('.Change__Budget__Popup .Form input').length).toBe(1);
        });

        it('renders the action buttons -> save and close', () => {
            const wrapper = setup();
            expect(wrapper.find('.Change__Budget__Popup button').length).toBe(2);
            expect(wrapper.find('.Change__Budget__Popup button').at(0).hasClass('Save__Button')).toBe(true);
            expect(wrapper.find('.Change__Budget__Popup button').at(1).hasClass('Cancel__Button')).toBe(true);
        });
    });

    describe('Data', () => {


    });

    describe('Behaviour', () => {

        it('validate user input and notify if needed', () => {
            const wrapper = setup();
            const e = {target: {value: 'thomas'}, preventDefault: () => {}};
            wrapper.find('.Change__Budget__Popup .Form input').simulate('change', e);
            expect(wrapper.state().amount).toNotBe('thomas');
            expect(wrapper.state().amount).toBe('');

            wrapper.find('.Change__Budget__Popup button').at(0).simulate('click', e);
            expect(wrapper.find('.Change__Budget__Popup .Form input').hasClass('error')).toBe(true);
        });

        it('calls the appropriate method on save', () => {
            expect.spyOn(ChangeBudgetPopup.prototype, 'save');
            expect.spyOn(ChangeBudgetPopup.prototype, 'cancel');
            const wrapper = setup();
            wrapper.find('.Change__Budget__Popup button').at(0).simulate('click');
            expect(ChangeBudgetPopup.prototype.save).toHaveBeenCalled();
            expect(ChangeBudgetPopup.prototype.cancel).toNotHaveBeenCalled();
            expect.restoreSpies();
        });

        it('calls the appropriate method on cancel', () => {
            expect.spyOn(ChangeBudgetPopup.prototype, 'save');
            expect.spyOn(ChangeBudgetPopup.prototype, 'cancel');
            const wrapper = setup();
            wrapper.find('.Change__Budget__Popup button').at(1).simulate('click');
            expect(ChangeBudgetPopup.prototype.save).toNotHaveBeenCalled();
            expect(ChangeBudgetPopup.prototype.cancel).toHaveBeenCalled();
            expect.restoreSpies();
        });
    });
});