import expect from 'expect';
import DateRange from 'react-daterange-picker';
import React from 'react';
import { shallow } from 'enzyme';
import { Popup } from 'semantic-ui-react';

import DatePicker from './date-picker';

const props = () => ({});

const setup = () => shallow(<DatePicker {...props()}/>);


describe('DatePickerComponent', () => {
    
    describe('Markup', () => {
        
        it('renders component', () => {
            const wrapper = setup();
            expect(wrapper.instance()).toBeA(DatePicker);
        });

        it('renders the DateRangePicker', () => {
            const wrapper = setup();
            expect(wrapper.find(DateRange).length).toBe(1);
        });
    });
});