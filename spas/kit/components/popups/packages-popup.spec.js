import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { Popup, List } from 'semantic-ui-react';

import PackagesPopup from './packages-popup';

const props = {
    service: {
        id: 1,
        amount: 200,
        name: 'service one',
        fixed: false,
        packages: [
            {
                amount: 200,
                range: [0, 5]
            },
            {
                amount: 500,
                range: [6, 10]
            }
        ]
    },
    editCartItemMode: true,
    updateItem: () => {},
    cancel: () => {},
    open: true
};

const setupShallow = () => shallow(<PackagesPopup {...props}/>);


describe('PackagesPopup Component', () => {
    
    describe('Markup', () => {

        it('renders the component', () => {
            const wrapper = setupShallow();
            expect(wrapper.instance()).toBeA(PackagesPopup);
            expect(wrapper.find(Popup).length).toBe(1);
        });

        it('renders popup header', () => {
            const wrapper = setupShallow();
            expect(wrapper.find(Popup.Header).length).toBe(1);
        });

        it('renders popup content', () => {
            const wrapper = setupShallow();
            expect(wrapper.find(Popup.Content).length).toBe(1);
        });

        it('renders update button', () => {
            const wrapper = setupShallow();
            expect(wrapper.find('.Update__Package').length).toBe(1);
        });

        it('renders cancel button', () => {
            const wrapper = setupShallow();
            expect(wrapper.find('.Cancel').length).toBe(1);
        })
    });

    describe('Data', () => {

        it('renders service name in header', () => {
            const wrapper = setupShallow();
            expect(wrapper.find(Popup.Header).shallow().text()).toEqual('service one');
        });

        it('renders the list of packages', () => {
            const wrapper = setupShallow();
            expect(wrapper.find(List.Item).length).toBe(2);
        });

        it('has the provided data -> editCartItemMode', () => {
            const wrapper = setupShallow();
            expect(wrapper.find(Popup).shallow().prop('open')).toBe(true);
        });

        it('should be aware of the selected package', () => {
            const wrapper = setupShallow();
            expect(wrapper.state().selectedPackage).toEqual({range: [], amount: null});
        })
    });

    describe('Behaviour', () => {

        it('calls handleUpdate', () => {
            expect.spyOn(PackagesPopup.prototype, 'handleUpdate');
            const wrapper = setupShallow();
            wrapper.find('.Update__Package').simulate('click');
            expect(PackagesPopup.prototype.handleUpdate).toHaveBeenCalled();
        })

        it('calls handleCancel', () => {
            expect.spyOn(PackagesPopup.prototype, 'handleCancel');
            const wrapper = setupShallow();
            wrapper.find('.Cancel').simulate('click');
            expect(PackagesPopup.prototype.handleCancel).toHaveBeenCalled();
        })
    });
});