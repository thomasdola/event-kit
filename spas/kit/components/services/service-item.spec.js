import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Image } from 'semantic-ui-react';

import ServiceItem from './service-item';

const props = {
    item: {
        id: 'id',
        name: 'service',
        amount: 100,
        img: 'path/to/img.png'
    },
    onAddToCart: () => {},
    onZoomService: () => {}
};

const setup = () => {
    return shallow(<ServiceItem {...props}/>);
};

describe('ServiceItem Component', () => {
    
    describe('Markup', () => {
        
        it('renders the item card', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(ServiceItem);
            expect(wrapper.find('.Service__Item').length).toBe(1);
        });

        it('renders the card image', () => {
            const wrapper = setup();
            expect(wrapper.find('.Service__Item > .image').length).toBe(1);
        });

        it('renders the card content -> name', () => {
            const wrapper = setup();
            expect(wrapper.find('.Service__Name').length).toBe(1);
        });

        it('renders the price tag', () => {
            const wrapper = setup();
            expect(wrapper.find(Image).prop('label').content).toBe(`\u20B5 100.00`);
        });

        // it('renders the action buttons label', () => {
        //     const wrapper = setup();
        //     expect(wrapper.find('.Actions__Box').length).toBe(1);
        // });
    });

    describe('Data', () => {
        
        it('has the image url provided', () => {
            const wrapper = setup();
            expect(wrapper.find(Image).prop('src')).toBe(props.item.img);
        });

        it('has data provided -> name', () => {
            const wrapper = setup();
            expect(wrapper.find('.Service__Name').shallow().text()).toEqual('service');
        });
    });

    describe('Behaviour', () => {
        
        // it('triggers the appropriate method on zoom', () => {
        //     expect.spyOn(ServiceItem.prototype, 'handleZoom');
        //     expect.spyOn(ServiceItem.prototype, 'handleAdd');
        //     const wrapper = setup();
        //     wrapper.find('.Actions__Box a').at(0).simulate('click');
        //     expect(ServiceItem.prototype.handleZoom).toHaveBeenCalled();
        //     expect(ServiceItem.prototype.handleAdd).toNotHaveBeenCalled();
        //     expect.restoreSpies();
        // });

        // it('triggres the appropriate method on addToCart', () => {
        //     expect.spyOn(ServiceItem.prototype, 'handleZoom');
        //     expect.spyOn(ServiceItem.prototype, 'handleAdd');
        //     const wrapper = setup();
        //     wrapper.find('.Actions__Box a').at(1).simulate('click');
        //     expect(ServiceItem.prototype.handleZoom).toNotHaveBeenCalled();
        //     expect(ServiceItem.prototype.handleAdd).toHaveBeenCalled();
        //     expect.restoreSpies();
        // });
    });
});