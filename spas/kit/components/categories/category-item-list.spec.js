import expect from 'expect';
import React from 'react';
import { render, mount } from 'enzyme';

import CategoryItem from './category-item';
import { CategoryItemList } from './category-item-list';

const props = {
    selectedCategory: 'first',
    loadingCategories: false,
    categories: [
        {
            id: '1',
            name: 'category',
            img: '/path/to/img.png'
        }
        ],
    selectCategory: () => {}
};

const setupMount = () => mount(<CategoryItemList {...props}/>);

const setupRender = () => render(<CategoryItemList {...props}/>);


describe('CategoryItemList Component', () => {
    
    context('Markup', () => {

        it('renders properly', () => {
            const categoryItemListWrapper = setupRender();
            expect(categoryItemListWrapper.find('.Category__Item__List').length).toBe(1);
        });
    });

    context('Data', () => {

        it('renders provided data properly', () => {
            const categoryItemListMountWrapper = setupMount();
            expect(categoryItemListMountWrapper.find('.Category__Item').length).toBe(1);
        });
    });

    context('Behaviour', () => {

        before(() => expect.spyOn(CategoryItemList.prototype, 'handleClick'));
        it('handles click events of child components', () => {
            const e = {nativeEvent: {stopImmediatePropagation: () => {}}}
            const categoryItemListMountWrapper = setupMount();
            categoryItemListMountWrapper.find(CategoryItem).simulate('click', e);
            expect(CategoryItemList.prototype.handleClick).toHaveBeenCalled();
        });

        before(() => expect.spyOn(CategoryItemList.prototype, 'handleMouseOver'));
        it('handles mouseover events of child components', () => {
            const categoryItemListMountWrapper = setupMount();
            categoryItemListMountWrapper.find(CategoryItem).simulate('mouseover');
            expect(CategoryItemList.prototype.handleMouseOver).toHaveBeenCalled();
            expect(CategoryItemList.prototype.handleMouseOut).toNotHaveBeenCalled();            
        }); 

        before(() => expect.spyOn(CategoryItemList.prototype, 'handleMouseOut'));
        it('handles mouseover events of child components', () => {
            const categoryItemListMountWrapper = setupMount();
            categoryItemListMountWrapper.find(CategoryItem).simulate('mouseout');
            expect(CategoryItemList.prototype.handleMouseOver).toHaveBeenCalled();
            expect(CategoryItemList.prototype.handleMouseOut).toHaveBeenCalled();
        });       
    });
});
