import React from 'react';
import PickedServiceList from './picked-services-list';
import CalculatorTotal from './calculator-total';

const Calculator = () => {
    return (
        <div className="ui segment segments service-picked-list">
            <PickedServiceList/>
            <CalculatorTotal/>
        </div>
    );
};

export default Calculator;