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

        it('renders client information section');

        it('renders order information section');

        it('renders order items section and table');
    });
});