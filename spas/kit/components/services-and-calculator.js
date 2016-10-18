import React from 'react';
import Calculator from './calculator/calculator';
import ServiceListContainer from './services/service-list-container';

const ServicesAndCalculator = ({ children }) => {
    return (
        <div className="ui horizontal segments categories-calculator">
            <ServiceListContainer/>
            <Calculator/>
        </div>
    );
};

export default ServicesAndCalculator;