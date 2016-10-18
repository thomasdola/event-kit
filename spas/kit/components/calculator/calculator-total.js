import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

class CalculatorTotal extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="ui segment vertical picked-items-sum grid">
                <div className="ui grid">
                    <div className="eight wide column">Total</div>
                    <div className="three wide column"></div>
                    <div className="five wide column right aligned">
                        <span>&#8373; 
                            <b>{numeral(this.props.cartTotal).format('0,0.00')}</b>
                        </span></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ cartTotal }) => ({ cartTotal });

export default connect(mapStateToProps)(CalculatorTotal);