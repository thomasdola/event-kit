import expect from 'expect';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Image, Card } from 'semantic-ui-react';

import CategoryItem from './category-item';

const props = {
        item: {
            id: 1,
            name: 'category',
            img: '/path/to/image.png'
        },
        onSelect: () => {},
        onHoverIn: () => {},
        onHoverOut: () => {}
    };

function setupRender(){

    return render(<CategoryItem {...props}/>);
}

function setupMount(){

    return mount(<CategoryItem {...props}/>);
}

function setupShallow(props){
    
    return shallow(<CategoryItem {...props}/>);
}


describe('CategoryItem Component', () => {
    
    it('renders markup properly', () => {
        const categoryItemWrapper = setupRender();
        expect(categoryItemWrapper.find('.Category__Item').length).toBe(1);
        expect(categoryItemWrapper.find('.Category__Name').length).toBe(0);
    });

    it('renders data provided properly', () => {
        const categoryItemWrapper = setupRender();
        expect(categoryItemWrapper.find('.Category__Icon').prop('src')).toEqual('/path/to/image.png');
    });

    context('Hover Event', () => {

        before(() => {expect.spyOn(CategoryItem.prototype, 'handleHoverIn')});
        it('shows tooltip on mouse over', () => {
            const categoryItemWrapper = setupMount();
            categoryItemWrapper.find(Card).simulate('mouseover');
            expect(CategoryItem.prototype.handleHoverIn).toHaveBeenCalled();
        });
    
        before(() => {expect.spyOn(CategoryItem.prototype, 'handleHoverIn')});
        it('hides tooltip on mouse leave', () => {
            const categoryItemWrapper = setupMount();
            categoryItemWrapper.find(Card).simulate('mouseover');
            expect(CategoryItem.prototype.handleHoverIn).toHaveBeenCalled();           
        });
    });

    before(() => {expect.spyOn(CategoryItem.prototype, 'handleClick')});
    it('handles click event', () => {
        const e = {nativeEvent: {stopImmediatePropagation: () => {}}}
        const wrapper = setupMount();
        wrapper.find(Card).simulate('click', e);
        expect(CategoryItem.prototype.handleClick).toHaveBeenCalled();
    });
});