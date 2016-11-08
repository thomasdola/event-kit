import {  } from 'semantic-ui-react';

import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

import { ServicesContent } from './content';
import { ServicesFilter } from './filter';
import { ServicesHeader } from './header';
import {Services} from './index';

const props = () => ({});

const setup = () => shallow(<Services {...props}/>);



describe('Services Component', () => {
    
    describe('Markup', () => {
        
        it('renders component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(Services);
        });

        it('renders header component', () => {
            const wrapper = setup();
            expect(wrapper.find(ServicesHeader).length).toBe(1);
        });

        it('renders filter component', () => {
            const wrapper = setup();
            expect(wrapper.find(ServicesFilter).length).toBe(1)
        });

        it('rendres content component', () => {
            const wrapper = setup();
            expect(wrapper.find(ServicesContent).length).toBe(1)
        });
    });

    describe('Data', () => {
        
        
    });

    describe('Behaviour', () => {
        
        
    });
});