import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Segment } from 'semantic-ui-react';

import ServiceItemList from './service-item-list';
import ServiceItemListHeader from './service-item-list-header';
import { ServicesContainer } from './services-container';

const props = {
    loadingServices: true
};

const setup = () => shallow(<ServicesContainer {...props}/>);

describe('ServiceItemListContainer Component', () => {
    
    describe('Markup', () => {
        
        it('renders the component', () => {
            const wrapper = setup();
            expect(wrapper.find(Segment).length).toBe(1);
        });
    });

    describe('Data', () => {
        
        it('shows loading when loadingServices is true', () => {
            const wrapper = setup();
            expect(wrapper.find(Segment).hasClass('loading')).toBe(true);
        })
    });
});