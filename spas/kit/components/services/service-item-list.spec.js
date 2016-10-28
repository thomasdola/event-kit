import expect from 'expect';
import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ServiceItem from './service-item';
import ServiceZoomModal from '../modals/service-zoom-modal';
import { ServiceItemList } from './service-item-list';

const props = {
    services: [
        {
            id: '1',
            name: 'service 1',
            amount: 300,
            img: 'path/to/img.png'
        },
        {
            id: '2',
            name: 'service 2',
            amount: 100,
            img: 'path/to/img.png'
        }
    ],
    cartItems: [],
    addItemToCart: () => {},
    zoomOnService: () => {}
};

const setup = () => {
    return shallow(<ServiceItemList {...props}/>);
};

const setupRender = () => {
    return render(<ServiceItemList {...props}/>);
};

const setupMount = () => {
    return mount(<ServiceItemList {...props}/>);
};



describe('ServiceItemList Component', () => {
    
    describe('Markup', () => {

        it('renders the component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(ServiceItemList);
        });
    });

    describe('Data', () => {
        
        it('renders the serviceItem depending on the provided data', () => {
            const wrapper = setup();
            expect(wrapper.find(ServiceItem).length).toBe(2);
        });
    });

    describe('Behaviour', () => {
        
        // it('tiggers the appropriate method on add to cart event', () => {
        //     expect.spyOn(ServiceItemList.prototype, 'handleAddToCart');
        //     expect.spyOn(ServiceItemList.prototype, 'handleZoom');
        //     const wrapper = setup();

        //     wrapper.find(ServiceItem).at(0).shallow().find('.Add__Button').simulate('click');

        //     expect(ServiceItemList.prototype.handleAddToCart).toHaveBeenCalled();
        //     expect(ServiceItemList.prototype.handleZoom).toNotHaveBeenCalled();
        //     expect.restoreSpies();
        // });

            

        // it('tiggers the appropriate method on zoom event', () => {
        //     expect.spyOn(ServiceItemList.prototype, 'handleAddToCart');
        //     expect.spyOn(ServiceItemList.prototype, 'handleZoom');
        //     const wrapper = setup();

        //     wrapper.find(ServiceItem).at(0).shallow().find('.Zoom__Button').simulate('click');

        //     expect(ServiceItemList.prototype.handleZoom).toHaveBeenCalled();
        //     expect(ServiceItemList.prototype.handleAddToCart).toNotHaveBeenCalled();
        //     expect.restoreSpies();
        // });
    });
});