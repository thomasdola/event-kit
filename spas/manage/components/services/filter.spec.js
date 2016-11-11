import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { Menu, Header } from 'semantic-ui-react';

import {ServicesFilter} from './filter';

const props = () => ({});

const setup = () => shallow(<ServicesFilter {...props}/>);


describe('ServicesFilter', () => {
    
    describe('Markup', () => {
        
        it('renders component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(ServicesFilter);
        });

        // it('renders filter header', () => {
        //     const wrapper = setup();
        //     expect(wrapper.find('.Filter__Header').length).toBe(1);
        //     expect(wrapper.find(Header).length).toBe(1);
        // });

        it('renders filter items', () => {
            const wrapper = setup();
            expect(wrapper.find('.Filter__Items').length).toBe(1);
        })
    });

    describe('Data', () => {
        
    });

    describe('Behaviour', () => {
        
    });
});