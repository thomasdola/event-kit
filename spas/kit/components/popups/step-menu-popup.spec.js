import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Menu } from 'semantic-ui-react';

import { StepMenuPopup } from './step-menu-popup';

const props = {
    steps: [
        {
            id: 1,
            name: 'step one'
        },
        {
            id: 2,
            name: 'step two'
        }
    ],
    stepsMenuOpened: true,
    selectStep: () => {},
    activeStep: 1
};

const setup = () => shallow(<StepMenuPopup {...props}/>);


describe('StepMenuPopup Component', () => {
    
    describe('Markup', () => {
        
        it('renders the component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(StepMenuPopup);
        })
    });

    describe('Data', () => {

        it('has the data provided -> stepsMenuOpened', () => {
            const wrapper = setup();
            expect(wrapper.state().open).toBe(true);
        })
        
        it('renders menu items', () => {
            const wrapper = setup();
            expect(wrapper.find(Menu.Item).length).toBe(2);
        });

        it('renders the active step menu', () => {
            const wrapper = setup();
            expect(wrapper.find(Menu.Item).first().prop('active')).toBe(true);
        })
    });

    describe('Behaviour', () => {
        
        // it('triggers componentDidMount', () => {
        //     expect.spyOn(StepMenuPopup.prototype, 'componentDidMount');
        //     const wrapper = setup();
        //     expect(StepMenuPopup.prototype.componentDidMount).toHaveBeenCalled();
        // })

        it('triggers appropriate method on select menu item', () => {
            expect.spyOn(StepMenuPopup.prototype, 'handleSelect');
            const wrapper = setup();
            const step = {id: 2, name: 'step two'}
            wrapper.find(Menu.Item).at(1).shallow().simulate('click', 'step');
            expect(StepMenuPopup.prototype.handleSelect).toHaveBeenCalled();
            expect.restoreSpies();
        })
    });
});