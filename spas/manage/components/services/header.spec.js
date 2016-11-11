import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from 'semantic-ui-react';

import {ServicesHeader} from './header';

const props = () => ({});

const setup = () => shallow(<ServicesHeader {...props}/>);


describe('ServicesHeader Component', () => {
    
    describe('Markup', () => {
        
        it('renders component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(ServicesHeader);
        });

        it('renders 3 menu items', () => {
            const wrapper = setup();
            expect(wrapper.find(Menu.Item).length).toBe(3);
        })

        it('renders new serivce button', () => {
            const wrapper = setup();
            expect(wrapper.find('.New__Service__Button').length).toBe(1);
        })
    });

    describe('Data', () => {
        
    });

    describe('Behaviour', () => {
        
        it('calls handleNewService when click on new serivce button', () => {
            expect.spyOn(ServicesHeader.prototype, 'handleNewService');
            const wrapper = setup();
            wrapper.find('.New__Service__Button').simulate('click');
            expect(ServicesHeader.prototype.handleNewService).toHaveBeenCalled();
        });
    });
});