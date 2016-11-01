import numeral from 'numeral';
import Radium from 'radium';
import React from 'react';
import { connect } from 'react-redux';

import { getCartTotalSelector } from '../../selectors'

const styles = {
    default: {
        boxShadow: '0 0 10px rgba(175, 175, 175, 0.50)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // height: '5%'
    }
};

export class CartTotal extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div 
                style={styles.default}
                className="ui segment vertical picked-items-sum grid Cart__Total">
                <div className="ui grid">
                    <div className="eight wide column">Total</div>
                    <div className="three wide column"></div>
                    <div className="five wide column right aligned Cart__Total__Figure">
                        &#8373;
                        <span> 
                            <b>{numeral(this.props.cartTotal).format('0,0.00')}</b>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ 
    cartTotal: getCartTotalSelector(state) 
});

export default connect(mapStateToProps)(Radium(CartTotal));