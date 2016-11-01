import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from 'semantic-ui-react';

import { ClientDetailsModal } from './client-details-modal';

const getProps = (clientDetailsMode = true, phoneVerificationMode = false) => ({
    clientDetailsMode,
    phoneVerificationMode,
    verifyingNumber: false,
    checkingOut: true,
    order: [{id: 1, amount: 200}]
});

const setup = props => shallow(<ClientDetailsModal {...props}/>);

describe('ClientDetailsModalComponent', () => {

    describe('Markup', () => {

        it('renders the component', () => {
            const wrapper = setup(getProps());
            expect(wrapper.instance()).toBeA(ClientDetailsModal);
            expect(wrapper.find(Modal).length).toBe(1);
        });

        it('renders the component header', () => {
            const wrapper = setup(getProps());
            expect(wrapper.find(Modal.Header).length).toBe(1);
        });

        it('renders the component content', () => {
            const wrapper = setup(getProps());
            expect(wrapper.find(Modal.Content).length).toBe(1);
        });

        it('renders the component actions', () => {
            const wrapper = setup(getProps());
            expect(wrapper.find(Modal.Actions).length).toBe(1);
        });
    });

    describe('Data', () => {

        it('has open prop value to true', () => {
            const wrapper = setup(getProps());
            expect(wrapper.find(Modal).prop('open')).toBe(getProps().clientDetailsMode);
        })

        it('has submit and cancel buttons visible', () => {
            const wrapper = setup(getProps());
            expect(wrapper.find('.Submit__Button').length).toBe(1)
            expect(wrapper.find('.Cancel__Button').length).toBe(1)
            expect(wrapper.find('.Verify__Button').length).toBe(0)
            expect(wrapper.find('.RequestCode__Button').length).toBe(0)
        })

        it('has verify and \'did not receive code\' buttons hidden', () => {
            const wrapper = setup(getProps());
            expect(wrapper.find('.Verify__Button').length).toBe(0)
            expect(wrapper.find('.RequestCode__Button').length).toBe(0)
        })

        it('has code input field hidden', () => {
            const wrapper = setup(getProps());
            expect(wrapper.find('.Code__Input').length).toBe(0)
        })
    });

    describe('Behaviour', () => {

        it('calls handleSubmit method on click on \'submit\' button', () => {
            expect.spyOn(ClientDetailsModal.prototype, 'handleSubmit');
            const wrapper = setup(getProps());
            wrapper.find('.Submit__Button').simulate('click');
            expect(ClientDetailsModal.prototype.handleSubmit).toHaveBeenCalled();
        });

        it('calls handleVerfiy method on click on \'verify\' button', () => {
            expect.spyOn(ClientDetailsModal.prototype, 'handleVerify');
            const wrapper = setup(getProps(true, true));
            wrapper.find('.Verify__Button').simulate('click');
            expect(ClientDetailsModal.prototype.handleVerify).toHaveBeenCalled();
        });

        it('calls handleNewCode method on click on \'did not receive code\' button', () => {
            expect.spyOn(ClientDetailsModal.prototype, 'handleNewCode');
            const wrapper = setup(getProps(true, true));
            wrapper.find('.RequestCode__Button').simulate('click');
            expect(ClientDetailsModal.prototype.handleNewCode).toHaveBeenCalled();
        });
    });
});