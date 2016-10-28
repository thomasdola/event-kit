import _ from 'lodash';
import validation from 'validation';
import React, { ReactDOM } from 'react';
import { Popup, Portal } from 'semantic-ui-react';

import InputErrorPopup from './input-error-popup';

const styles = {
    default: {
        minWidth: `${350}px`,
        padding: `${.3}em`,
        height: `${40}px`
    }
}

class ServiceFilterPopup extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            fromAmount: this.props.filterPriceRange.from,
            toAmount: this.props.filterPriceRange.to,
            error: ''
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleFromAmountChange = this.handleFromAmountChange.bind(this);
        this.handleToAmountChange = this.handleToAmountChange.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    isValid(input){
        let valid = false;
        if(input.trim() && _.isInteger(_.toNumber(input))){
            valid = true;
        }

        return valid;
    }
    

    handleClick(e){
        e.preventDefault();

        const { performFilter, closeFilterPopup, showError, filterPriceRange: {from, to} } = this.props;

        const {fromAmount, toAmount} = this.state;

        const parsedFrom = Number.parseInt(fromAmount, 10);
        const parsedTo = Number.parseInt(toAmount, 10);

        if( !validation.exists(parsedFrom) || !validation.exists(parsedTo)) 
            return this.setState({error: 'should not be empty'});

        if( !validation.isType(parsedFrom, 'number') || !validation.isType(parsedTo, 'number')) return;

        if(parsedFrom === from || parsedTo === to) return closeFilterPopup();

        if(parsedTo < parsedFrom) 
            return this.setState({error: 'should be less'});

        performFilter(fromAmount, toAmount);
        closeFilterPopup();
    }

    handleToAmountChange(e){
        const value = e.target.value;
        this.setState({toAmount: value});
    }

    handleFromAmountChange(e){
        const value = e.target.value;
        this.setState({fromAmount: value});
    }

    render(){

        const { fromAmount, toAmount, error } = this.state;

        const enabled = Number.parseInt(toAmount, 10) > Number.parseInt(fromAmount, 10) ? true : false;

        return (
            <Popup flowing 
                open={this.props.open}
                on='click'
                positioning='top center'
                trigger={this.props.trigger}
                className="__filter_form Service__Filter__Popup"
                style = {styles.default}>
                
                <form className={`ui form equal mini Filter__Form`}>
                    <div className="fields">
                        <div className="field">
                            <input
                                ref='fromInput' 
                                className={`From__Input ${error ? 'error' : ''}`}
                                type="text"
                                value={fromAmount}
                                onChange={this.handleFromAmountChange}
                                placeholder="From"/>
                        </div>
                        <div className="field">
                            <input 
                                ref='toInput'
                                className="To__Input"
                                type="text" 
                                onChange={this.handleToAmountChange}
                                value={toAmount} 
                                placeholder="To"/>
                        </div>
                        <button 
                            className={`ui button mini `} 
                            onClick={this.handleClick}>
                                filter
                        </button>
                    </div>

                </form>


            </Popup>
        );
    }
}

export default ServiceFilterPopup;