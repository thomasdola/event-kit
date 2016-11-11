import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from 'semantic-ui-react';

import { ServiceModal } from './service';

const props = () => ({});

const setup = () => shallow(<ServiceModal {...props()}/>);


describe('ServiceModal Component', () => {
    
    describe('Markup', () => {
        
        it('renders component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(ServiceModal);
            expect(wrapper.find(Modal).length).toBe(1);
        });
    });
});