import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import { Segment } from 'semantic-ui-react';

import { OrdersTable } from './table';

const props = {
    orders: [
        {
            orderId: 4655465,
            status: 'in-progress',
            clientName: 'thomas paulson',
            phoneNumber: '0248089578',
            amount: 50000,
            category: 'wedding'
        }
    ]
};

const setup = () => shallow(<OrdersTable {...props}/>);

describe('OrdersTable Component', () => {
    
    describe('Markup', () => {
        
        it('renders component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(OrdersTable);
        });
    });
});