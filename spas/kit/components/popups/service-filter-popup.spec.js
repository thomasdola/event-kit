// import expect from 'expect';
// import React from 'react';
// import { shallow, mount } from 'enzyme';

// import ServiceFilterPopup from './service-filter-popup';

// const props = {
//     performFilter: () => {},
//     closeForm: () => {},
//     filterPriceRange: {
//         from: 50,
//         to: 100
//     }
// };

// const setup = () => shallow(<ServiceFilterPopup {...props}/>);

// const setupMount = () => mount(<ServiceFilterPopup {...props}/>);

// describe('ServiceFilterPopup Component', () => {
    
//     context('Markup', () => {

//         it('renders the poppup', () => {
//             const wrapper = setup();
//             expect(wrapper.instance()).toBeA(ServiceFilterPopup);
//             expect(wrapper.find('.Service__Filter__Popup').length).toBe(1);
//             expect(wrapper.find('.Service__Filter__Popup > from .error.message').length).toNotBe(1);
//         });

//         it('does not render error popup if there is no error', () => {
//             const wrapper = setupMount();
//             expect(wrapper.find('.Service__Filter__Popup > from .error.message').length).toNotBe(1);
//             // expect(wrapper.ref('errorMessage').length).toNotBe(1);
//             // expect(wrapper.find('.Input__Error__Popup').length).toBe(0);
//         });

//         it('renders the filter form', () => {
//             const wrapper = setup();
//             expect(wrapper.find('.Service__Filter__Popup .Filter__Form').length).toBe(1);
//             expect(wrapper.find('.Filter__Form input').length).toBe(2);
//             expect(wrapper.find('.Filter__Form input').at(0).is('.From__Input')).toBe(true);            
//             expect(wrapper.find('.Filter__Form input').at(1).is('.To__Input')).toBe(true);
//             expect(wrapper.find('.Filter__Form button').length).toBe(1);            
//         });
//     })

//     context('Data', () => {

//         it('displays provided props data -> inputs', () => {
//             const wrapper = setup();
//             expect(wrapper
//                 .find(`.Filter__Form input[value=${props.filterPriceRange.from}]`)
//                 .length).toBe(1);
//             expect(wrapper
//                 .find(`.Filter__Form input[value=${props.filterPriceRange.to}]`)
//                 .length).toBe(1);
//         });
//     });

//     context('Behaviour', () => {
        
//         it('calls appropriate method on input change -> from input', () => {
//             const spy = expect.spyOn(ServiceFilterPopup.prototype, 'handleFromAmountChange');
//             const e = {target: {value: 100}};
//             const wrapper = setup();
//             wrapper.find(`.Filter__Form`).simulate('change', e);
//             expect(spy).toHaveBeenCalledWith(e);
//             spy.restore();
//         });

//         it('calls appropriate method on input change -> to input', () => {
//             const spy = expect.spyOn(ServiceFilterPopup.prototype, 'handleToAmountChange');
//             const e = {target: {value: 100}};
//             const wrapper = setup();
//             wrapper.find(`.Filter__Form`).simulate('change', e);
//             expect(spy).toHaveBeenCalledWith(e);
//             spy.restore();            
//         });

//         it('calls appropriate method on button click -> perform filter', () => {
//             const spy = expect.spyOn(ServiceFilterPopup.prototype, 'handleClick');
//             const wrapper = setup();
//             wrapper.find('.Filter__Form button').simulate('click'); 
//             expect(spy).toHaveBeenCalled();
//             spy.restore(); 
//         });
        
//         it('displays errored input field -> from input', () => {
//             const fromE = {target: {value: 300}};
//             const toE = {target: {value: 100}};
//             const submitE = {preventDefault: () => {}};
//             const wrapper = setupMount();

//             wrapper.find(`.Filter__Form input[value=${props.filterPriceRange.from}]`)
//                 .simulate('change', fromE);
//             wrapper.find(`.Filter__Form input[value=${props.filterPriceRange.to}]`)
//                 .simulate('change', toE);
//             wrapper.find('.Filter__Form button').simulate('click', submitE);

//             // expect(wrapper.find('.Filter__Form').hasClass('error')).toBe(true);
//             // expect(wrapper.ref('fromInput').hasClass('error')).toBe(true);
//             // expect(wrapper.state().error).toBe('should be less');
//             // expect(wrapper.find('.Service__Filter__Popup > from .error.message').text()).toNotBe(0);            
//             // expect(wrapper.ref('errorMessage').length).toNotBe(0);            
//         });

//     })
// });