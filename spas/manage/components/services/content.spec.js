import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from 'semantic-ui-react';

import {ServicesContent} from './content';

const props = () => ({});

const setup = () => shallow(<ServicesContent {...props}/>);


describe('ServicesContent Component', () => {
    
    describe('Markup', () => {
        const wrapper = setup();
        expect(wrapper.instance()).toBeA(ServicesContent);
    });
});