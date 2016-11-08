import expect from 'expect';
import DateRangePicker from 'react-daterange-picker';
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';

import { Header } from './header';

const props = (orderId) => ({
    dateRange: {start: new Date, end: new Date},
    orderId
});

const setup = (orderId = null) => shallow(<Header {...props(orderId)}/>);


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
        
        it('renders order id when available', () => {
            const wrapper = setup(465468);
            expect(wrapper.find(Menu.Item).length).toBe(3);
        });

        it('renders go back button when order id available', () => {
            const wrapper = setup(465468);
            expect(wrapper.find('.Go__Back').length).toBe(1);
        });
    });

    describe('Behaviour', () => {
        
        it('calls the handleChangeStatus when click on new', () => {
            expect.spyOn(Header.prototype, 'handleChangeStatus');
            const wrapper = setup();
            wrapper.find(Menu.Item).at(1).simulate('click', {})
            expect(Header.prototype.handleChangeStatus).toHaveBeenCalled();
        });

        it('calls the handleChangeStatus when click on pending', () => {
            expect.spyOn(Header.prototype, 'handleChangeStatus');
            const wrapper = setup();
            wrapper.find(Menu.Item).at(2).simulate('click', {})
            expect(Header.prototype.handleChangeStatus).toHaveBeenCalled();
        });

        it('calls the handleChangeStatus when click on closed', () => {
            expect.spyOn(Header.prototype, 'handleChangeStatus');
            const wrapper = setup();
            wrapper.find(Menu.Item).at(3).simulate('click', {})
            expect(Header.prototype.handleChangeStatus).toHaveBeenCalled();
        });
    });
});