import expect from 'expect';
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { assign } from 'lodash';

import { ServiceZoomModal } from './service-zoom-modal';

const props = {
    service: {
        id: 1,
        name: 'service',
        amount: 100,
        images: [
            'imgone.png',
            'imgtwo.png'
        ]
    },
    loadingService: true,
    serviceZoomMode: true,
    addItemToCart: () => {}
};


const setupShallow = (withItems = false) => {
    return shallow(<ServiceZoomModal {...props}/>)
};


describe('ServiceZoomModal Component', () => {
    
    context('Markup', () => {

        it('renders the modal container properly', () => {
            const wrapper = setupShallow();
            expect(wrapper.find(".Zoom__Modal").length).toEqual(1);
            expect(wrapper.instance()).toBeA(ServiceZoomModal);
        });
        
        it('renders the modal header properly', () => {
            const wrapper = setupShallow();
            expect(wrapper.find(".Zoom__Modal .Modal__Header").length).toEqual(1);
        });

        it('renders the modal content properly', () => {
            const wrapper = setupShallow();
            expect(wrapper.find(".Zoom__Modal .Modal__Content").length).toEqual(1);
            expect(wrapper.find(".Zoom__Modal .Modal__Content > .Images__Loader").length).toEqual(1);
        });

        it('renders the modal actions properly', () => {
            const wrapper = setupShallow();
            expect(wrapper.find(".Zoom__Modal .Modal__Actions").length).toEqual(1);
            expect(wrapper.find(".Zoom__Modal .Modal__Actions > .button").at(0).text()).toBe('close');
            expect(wrapper.find(".Zoom__Modal .Modal__Actions > .button").at(1).text()).toBe('add');
        });
    });

    context('Data', () => {

        it('verifies component has the appropriate data (provided or default)', () => {
            const wrapper = setupShallow();
            expect(wrapper.find('.Zoom__Modal').prop('open')).toBe(true);
        });
        
        it('display the provided name', () => {
            const wrapper = setupShallow();
            expect(wrapper.find(".Zoom__Modal .Modal__Header .Service__Name").text()).toEqual('service');
        });

        it('formats the provided amount properly', () => {
            const wrapper = setupShallow();
            expect(wrapper.find(".Zoom__Modal .Modal__Header .Service__Amount span").text()).toEqual(100);
        });
    });

    describe('Behavior', () => {

        context('Events', () => {

            it('calls the appropriate method on click event on add button', () => {
                const spy = expect.spyOn(ServiceZoomModal.prototype, 'handleAdd');
                const wrapper = setupShallow();
                wrapper.find(".Zoom__Modal .Modal__Actions > .button").at(1).simulate('click');
                expect(spy).toHaveBeenCalled();
                spy.restore();
            });

            it('calls the appropriate method on click event on close button', () => {
                const spy = expect.spyOn(ServiceZoomModal.prototype, 'handleClose');
                const wrapper = setupShallow();
                wrapper.find(".Zoom__Modal .Modal__Actions > .button").at(0).simulate('click');
                expect(spy).toHaveBeenCalled();
                spy.restore();
            });
        });

        context('Data', () => {

            it('shows loading when still in loading service mode', () => {
                const wrapper = setupShallow();
                expect(wrapper.find(".Zoom__Modal .Modal__Content > .Images__Loader").hasClass('loading')).toBe(true);
            });
        });
    });
});