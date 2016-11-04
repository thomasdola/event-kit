import {} from 'semantic-ui-react';

import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

import { Dashboard } from './index';

const props = {};

const setup = () => shallow(<Dashboard {...props}/>);



describe('Dashboard Component', () => {
    
    describe('Markup', () => {
        
        it('renders the component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(Dashboard);
        });
    });
});