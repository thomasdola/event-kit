import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme';

import ServiceFilterPopup from '../popups/service-filter-popup';
import { ServiceItemListHeader } from './service-item-list-header';

const props = {
    openFilterPopup: () => {},
    closeFilterPopup: () => {},
    performFilter: () => {},
    filterPriceRange: {from: 100, to: 300}
};

const setupShallow = () => shallow(<ServiceItemListHeader {...props}/>);

const setupMount = () => mount(<ServiceItemListHeader {...props}/>);

describe('ServiceItemListHeader Component', () => {
    
    describe('Markup', () => {
        
        it('renders the component', () => {
            const wrapper = setupShallow();
            expect(wrapper.instance()).toBeA(ServiceItemListHeader);
        });

        it('renders the filter popup', () => {
            const wrapper = setupShallow();
            expect(wrapper.find(ServiceFilterPopup).length).toBe(1);
        });

        it('renders the filter button', () => {
            const wrapper = setupShallow();
            expect(wrapper.find('.Filter__Button').length).toBe(1);
        });
    });

    describe('Data', () => {
        
        it('displays icon and price range when latter is set', () => {
            const wrapper = setupShallow();
            expect(wrapper.find('i.grid.layout.icon').length).toBe(1);

            expect(wrapper.find('.item span').length).toBe(2);
            expect(wrapper.find('.item span').at(0).find('b').text()).toBe('100.00');
            expect(wrapper.find('.item span').at(1).find('b').text()).toBe('300.00');
        });
    });

    describe('Behaviour', () => {
        
        it('triggers handleFitlerOpen method on click on filter button', () => {
            expect.spyOn(ServiceItemListHeader.prototype, 'handleFilterToggle');
            const wrapper = setupShallow();
            wrapper.find('.Filter__Button').simulate('click');
            expect(ServiceItemListHeader.prototype.handleFilterToggle).toHaveBeenCalled();
            expect.restoreSpies();
        });

        it('triggers methods on filtering', () => {
            expect.spyOn(ServiceItemListHeader.prototype, 'handleClose');
            expect.spyOn(ServiceItemListHeader.prototype, 'handleFilter');
            const e = {preventDefault: () => {}}
            const wrapper = setupShallow();
            wrapper.find(ServiceFilterPopup).shallow().find('button').at(0).simulate('click', e);
            expect(ServiceItemListHeader.prototype.handleClose).toHaveBeenCalled();
            expect(ServiceItemListHeader.prototype.handleFilter).toHaveBeenCalled();
            expect.restoreSpies();
        });
    });
});