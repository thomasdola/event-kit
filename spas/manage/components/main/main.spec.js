import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { Container, Menu, Section } from 'semantic-ui-react';

import Main from './main';
import MainSection from '../content/main-section';
import { MainMenu } from '../menu/main-menu';

const props = {};

const setup = () => shallow(<Main {...props}/>);



describe('Main Component', () => {
    
    it('renders the component', () => {
        const wrapper = setup();
        expect(wrapper.instance()).toBeA(Main);
        expect(wrapper.find(Container).length).toBe(1);
    });

    it('renders the main side nav', () => {
        const wrapper = setup();
        expect(wrapper.find(MainMenu).length).toBe(1);
    });

    it('renders the main content area', () => {
        const wrapper = setup();
        expect(wrapper.find(MainSection).length).toBe(1);
    });
});