import {  } from 'semantic-ui-react';

import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

import {ServicesHeader} from './header';

const props = () => ({});

const setup = () => shallow(<ServicesHeader {...props}/>);


describe('ServicesHeader Component', () => {
    
    describe('Markup', () => {
        
        it('renders component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(ServicesHeader);
        });
    });

    describe('Data', () => {
        
    });

    describe('Behaviour', () => {
        
    });
});