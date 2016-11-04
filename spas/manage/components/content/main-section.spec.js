import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { Section, Container } from 'semantic-ui-react';

import MainSection from './main-section';

const props = {};

const setup = () => shallow(<MainSection {...props}/>);


describe('MainSection Component', () => {
    
    describe('Markup', () => {
        
        it('renders component', () => {
            const wrapper = setup();
            expect(wrapper.find(Container).length).toBe(1);
            expect(wrapper.instance()).toBeA(MainSection);
        });
    });
});