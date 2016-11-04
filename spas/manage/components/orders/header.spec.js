import expect from 'expect';
import DateRangePicker from 'react-daterange-picker';
import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from 'semantic-ui-react';

import { Header } from './header';

const props = () => ({});

const setup = () => shallow(<Header {...props()}/>);


describe('Orders Header Component', () => {
    
    describe('Markup', () => {
        
        it('renders component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(Header);
            expect(wrapper.find(Menu.Item).at(0).shallow().text()).toBe('Orders')
            expect(wrapper.find(Menu.Item).at(1).shallow().text()).toBe('new')
            expect(wrapper.find(Menu.Item).at(2).shallow().text()).toBe('pending')
            expect(wrapper.find(Menu.Item).at(3).shallow().text()).toBe('closed')
            expect(wrapper.find(Menu.Item).length).toBe(5)
        });

        it('renders the date range picker', () => {
            const wrapper = setup();
            expect(wrapper.find(DateRangePicker).length).toBe(1);
        })
    });
});