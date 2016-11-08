import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from 'semantic-ui-react';

import { MainMenu } from './main-menu';

const props = {
    dateRange: {start: new Date, end: new Date}
};

const setup = () => shallow(<MainMenu {...props}/>);


describe('MainMenu Component', () => {
    
    describe('Markup', () => {
        
        it('renders component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(MainMenu);
            expect(wrapper.find(Menu).length).toBe(1);
        });
    });
});