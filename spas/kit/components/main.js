import React from 'react';
import MainHeader from './main-header';
import CategoryList from './categories/category-list';
import ServiceAndCalculator from './services-and-calculator';



const Main = ({ children }) => {
    return (
        <div className="ui container main-content">
            {/*main content*/}
            <MainHeader/>
            <CategoryList/>
            <ServiceAndCalculator>
                { children }
            </ServiceAndCalculator>
        </div>
    );
};

export default Main;