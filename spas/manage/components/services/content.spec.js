import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from 'semantic-ui-react';

import {ServicesContent} from './content';
import { Service } from './service';

const props = () => ({
    services: [
        {
        img: '/path/to/image.jpg',
        amount: 2000,
        name: 'service one',
        fixed: true,
        id: 2548
    },
    {
        img: '/path/to/image.jpg',
        amount: 2000,
        name: 'service one',
        fixed: true,
        id: 2548
    }
    ]
});

const setup = () => shallow(<ServicesContent {...props}/>);


describe('ServicesContent Component', () => {
    
    describe('Markup', () => {

        it('renders component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(ServicesContent);
        });
    });

    describe('Data', () => {
        
        it('renders the services', () => {
            const wrapper = setup();
            expect(wrapper.find(Service).length).toBe(2);
        })
    });
});