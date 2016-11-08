import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Container, Menu, Section, Table } from 'semantic-ui-react';

import { Header } from './header';
import { Orders } from './index';

const props = {};

const setup = () => shallow(<Orders {...props}/>);


describe('Orders Component', () => {
    
    describe('Markup', () => {
        
        it('renders component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(Orders);
        });

        it('renders header menu');

        it('renders a table', () => {
            const wrapper = setup();
            expect(wrapper.find(Table).length).toBe(1);
        });
    });
});