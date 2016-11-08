import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';

import { Order } from './order';

const props = {
    order: {
        orderId: 4655465,
        status: 'in-progress',
        clientName: 'thomas paulson',
        phoneNumber: '0248089578',
        date: '12/12/2016',
        amount: 50000,
        category: 'wedding',
        items: []
    }
};

const setup = () => shallow(<Order {...props}/>);


describe('Order Component', () => {
    
    describe('Markup', () => {
        
        it('renders component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(Order);
        });

        it('renders client information section', () => {
            const wrapper = setup();
            expect(wrapper.find('.Client__Info').length).toBe(1);
        });

        it('renders order information section', () => {
            const wrapper = setup();
            expect(wrapper.find('.Action__Buttons').length).toBe(1);
        });

        it('renders download order button', () => {
            const wrapper = setup();
            expect(wrapper.find('.Download__Order').length).toBe(1);
        });

        it('renders close order button');

        it('renders action buttons section', () => {
            const wrapper = setup();
            expect(wrapper.find('.Order__Info').length).toBe(1);
        });

        it('renders order items section', () => {
            const wrapper = setup();
            expect(wrapper.find('.Order__Items').length).toBe(1);
        });

        it('renders order items section header', () => {
            const wrapper = setup();
            expect(wrapper.find('.Order__Items__Header').length).toBe(1);
        });

        it('renders order items table', () => {
            const wrapper = setup();
            expect(wrapper.find('.Order__Items__Table').length).toBe(1);
        });
    });

    describe('Behaviour', () => {
        
        it('calls handleCloseOrder method when click on close order');

        it('calls handleDownloadOrder method when click on download order', () => {
            expect.spyOn(Order.prototype, 'handleDownloadOrder');
            const wrapper = setup();
            wrapper.find('.Download__Order').simulate('click');
            expect(Order.prototype.handleDownloadOrder).toHaveBeenCalled();
        })
    });
});