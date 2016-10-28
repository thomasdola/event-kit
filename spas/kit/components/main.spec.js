import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

import CategoryList from './categories/category-item-list';
import Main from './main';
import MainHeader from './main-header';
import ServicesAndCart from './services-and-cart';

const props = {};

const setup = () => shallow(<Main {...props}/>);


describe('Main Component', () => {
    
    describe('Markup', () => {
        
        it('renders the component', () => {
            const wrapper = setup();
            expect(wrapper.find('.Main__Content').length).toBe(1);
        })

        it('has 3 component rendered', () => {
            const wrapper = setup();
            expect(wrapper.children().length).toBe(3);
        })

        it('renders main header component first', () => {
            const wrapper = setup();
            expect(wrapper.childAt(0).type()).toBe(MainHeader);
        })

        it('renders CategoryList component second', () => {
            const wrapper = setup();
            expect(wrapper.childAt(1).type()).toBe(CategoryList);
        })

        it('renders ServicesAndCart component third', () => {
            const wrapper = setup();
            expect(wrapper.childAt(2).type()).toBe(ServicesAndCart);
        })
    })
});