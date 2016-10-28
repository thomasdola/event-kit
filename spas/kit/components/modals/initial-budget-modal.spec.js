import expect from 'expect';
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { Popup, Button, Header, Icon, Image, Modal, Form } from 'semantic-ui-react';

import { InitialBudgetModal } from './initial-budget-modal';

const setupShallow = (ask = true) => {
    const props = {
        ask,
        saveBudget: () => {}
    };

    return shallow(<InitialBudgetModal {...props}/>);
}; 


describe('InitialBudgetModal Component', () => {

    let wrapper;
    
    context('Markup', () => {

         wrapper = setupShallow();

        it('renders a modal', () => {
            expect(wrapper.instance()).toBeA(InitialBudgetModal);
            expect(wrapper.find('.Initial__Budget__Modal').length).toBe(1);
        });

        it('renders a modal header', () => {
            expect(wrapper.find(Modal.Header).hasClass('Modal__Header')).toBe(true);
        });

        it('renders a  modal content', () => {
            expect(wrapper.find(Modal.Content).hasClass('Modal__Content')).toBe(true)            
        });

        it('renders a form in a modal content', () => {
            expect(wrapper.find('.Modal__Form').length).toBe(1)            
        });

        it('renders an input field', () => {
            expect(wrapper.find('.Modal__Form input[type="text"]').length).toBe(1)
        });

        it('renders disabled submit button', () => {
            expect(wrapper.find('.Modal__Form button').hasClass('disabled')).toBe(true);
        });
    });


    context('Behaviour', () => {

        it('renders when there is no initial budget', () => {
            wrapper = setupShallow(true);
            expect(wrapper.state().open).toBe(true);
            expect(wrapper.state().dimmer).toBe('blurring');
            expect(wrapper.state().amount).toBe('');
        });

        it('does not when there is no initial budget', () => {
            wrapper = setupShallow(false);
            expect(wrapper.state().open).toBe(false);
        });

        context('Input change', () => {

            const e = {target: {value: 200}};

            it('calls the appropriate method', () => {
                const spy = expect.spyOn(InitialBudgetModal.prototype, 'handleChange');
                wrapper = setupShallow();
                wrapper.find('.Modal__Form input[type="text"]')
                    .simulate('change', e);
                expect(spy).toHaveBeenCalledWith(e);
                spy.restore();
            });

            it('sets the state on change event', () => {
                wrapper = setupShallow();
                expect(wrapper.state().amount).toEqual('');
                wrapper.find('.Modal__Form input[type="text"]')
                    .simulate('change', e);
                expect(wrapper.state().amount).toEqual(e.target.value);
            });

            it('renders field error if there is error', () => {
                wrapper = setupShallow();
                expect(wrapper.state().amount).toEqual('');
                wrapper.find('.Modal__Form input[type="text"]')
                    .simulate('change', {target: {value: 'test'}});
                expect(wrapper.state().error).toEqual(true);
                expect(wrapper.find('.Modal__Form input[type="text"]').hasClass('field')).toBe(true);
                expect(wrapper.find('.Modal__Form input[type="text"]').hasClass('error')).toBe(true);                
            });
        });

        context('Submit Button Ability', () => {
            
            const wrapper = setupShallow();

            it('maintain button disabled if there is error', () => {
                expect(wrapper.state().amount).toEqual('');
                wrapper.find('.Modal__Form input[type="text"]')
                    .simulate('change', {target: {value: 'test'}});
                expect(wrapper.state().amount).toEqual('');
                expect(wrapper.find('.Modal__Form button').hasClass('disabled')).toBe(true);
            });

            it('enables button if there is no error', () => {
                expect(wrapper.state().amount).toEqual('');
                wrapper.find('.Modal__Form input[type="text"]')
                    .simulate('change', {target: {value: '200'}});
                expect(wrapper.state().amount).toEqual(200);
                expect(wrapper.find('.Modal__Form button').hasClass('disabled')).toBe(false);
            });
        });

        context("Form submission", () => {

            it('calls the appropriate method', () => {
                const spy = expect.spyOn(InitialBudgetModal.prototype, 'onSetBudget');
                wrapper = setupShallow();
                wrapper.find('.Modal__Form button').simulate('click');
                expect(spy).toHaveBeenCalled();
                spy.restore();
            });

            it('handles onClick event on the submit button', () => {
                const wrapper = setupShallow();
                wrapper.find('.Modal__Form input[type="text"]')
                    .simulate('change', {target: {value: '200'}});
                wrapper.find('.Modal__Form button').simulate('click', {preventDefault: () => {}});
                expect(wrapper.state().amount).toEqual(200);
            });

            it('closes after the form has been submitted', () => {
                const spy = expect.spyOn(InitialBudgetModal.prototype, 'close');
                const wrapper = setupShallow();
                wrapper.find('.Modal__Form input[type="text"]')
                    .simulate('change', {target: {value: '200'}});
                wrapper.find('.Modal__Form button').simulate('click', {preventDefault: () => {}});
                expect(wrapper.state().amount).toEqual(200);
                expect(spy).toHaveBeenCalled();
                spy.restore();
            });
        });

        
    });
});
