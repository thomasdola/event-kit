import expect from 'expect';
import DateRangePicker from 'react-daterange-picker';
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';

import { Header } from './header';

const props = () => ({
    dateRange: {start: new Date, end: new Date}
});

const setup = () => shallow(<Header {...props()}/>);


describe('Orders Header Component', () => {
    
    describe('Markup', () => {
        
        it('renders component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(Header);
            expect(wrapper.find(Menu.Item).at(0).shallow().text()).toBe('Orders')
        });

        it('renders new link', () => {
            const wrapper = setup();
            expect(wrapper.find(Menu.Item).at(1).shallow().text()).toBe('new');
        });
       
        it('renders pending link', () => {
            const wrapper = setup();
            expect(wrapper.find(Menu.Item).at(2).shallow().text()).toBe('pending');
        });
        
        it('renders closed link', () => {
            const wrapper = setup();
            expect(wrapper.find(Menu.Item).at(3).shallow().text()).toBe('closed');
        });

        it('renders the date range picker', () => {
            const wrapper = setup();
            expect(wrapper.find(Menu.Item).at(4).length).toBe(1);
        });
    });

    describe('Data', () => {
        
        it('', () => {
            
        });
    });
});