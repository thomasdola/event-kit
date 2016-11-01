import _ from 'lodash';
import numeral from 'numeral';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as checkoutActions from '../../actions/checkout';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { getVisibleItemsSelector, getCartTotalSelector } from '../../selectors';

import { closeCartReview } from '../../actions/cart';
import { proceedToCheckout } from '../../actions/checkout';

const styles = {
    main: {
        width: '500px',
        borderRadius: 0,
        height: '600px'
    },
    header: {
        padding: 0,
        borderBottom: 0,

        segment: {
            height: '50px',
            boxShadow: 'none',
            borderRadius: 0
        },
    },
    content: {
        padding: 0,

        segment: {
            border: 0,
            borderRadius: 0,
            height: '500px',
            boxShadow: 'none'
        },
        item:{
            height: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }
    },

    actions: {
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
};

export class CartReviewModal extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {open: false, dimmer: 'blurring'};

        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.setState({open: this.props.cartReviewMode});
    }

    handleClose(e){
        this.props.closeCartReview();
    }

    handleSubmit(e){
        this.props.proceedToCheckout();
    }

    render(){

        const { budget, cartTotal, cartItems, cartReviewMode } = this.props;

        const items = cartItems.map(({name, amount, id}) => (
            <div
                style={styles.content.item}
                className="Cart__Review__Item item" key={id}>
                <div className="ui grid">
                    <div className="nine wide column">{name}</div>
                    <div className="two wide column"></div>
                    <div className="five wide column right aligned"><span>&#8373; 
                        <b>{numeral(amount).format('0,0.00')}</b>
                        </span></div>
                </div>
            </div>
        ));

        const ready = !_.isEmpty(cartItems);

        return (
            <Modal
                size='small'
                style={styles.main}
                dimmer={this.state.dimmer}
                className="Cart__Review__Modal"
                open={cartReviewMode}>
                <div
                    style={styles.header}
                    className="header">
                    <div
                        style={styles.header.segment}
                        className="ui segment">
                        <div className="ui grid">
                            <div className="eight wide column Review__Budget">Budget: <span>&#8373; 
                                <b>{numeral(budget).format('0,0.00')}</b></span></div>
                            <div className="eight wide column right aligned Review__Cart__Total">Total: <span>&#8373; 
                                <b>{numeral(cartTotal).format('0,0.00')}</b></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={styles.content}
                    className="Cart__Review__Modal__Content content">
                    <div
                        style={styles.content.segment}
                        className="ui segment">
                        <div className="ui divided list">

                            {items}
                            
                        </div>
                    </div>
                </div>
                <div
                    style={styles.actions}
                    className="actions">
                    <div className="ui mini button Close__Modal" onClick={this.handleClose}>
                        close
                    </div>
                    <div 
                        className={`ui mini right button Download__Review ${ready ? '' : 'disabled'}`} 
                        onClick={this.handleSubmit}>
                        download
                    </div>
                    <div 
                        className={`ui mini right button Submit__Review ${ready ? '' : 'disabled'}`} 
                        onClick={this.handleSubmit}>
                        submit
                    </div>
                </div>
            </Modal>
        );
    }
}


CartReviewModal.PropTypes = {
    cartItems: React.PropTypes.arrayOf(React.PropTypes.object),
    budget: React.PropTypes.number,
    cartReviewMode: React.PropTypes.bool,
    cartTotal: React.PropTypes.number,

};


const mapStateToProps = state => {
    return {
        cartItems: getVisibleItemsSelector(state),
        budget: state.budget,
        cartTotal: getCartTotalSelector(state),
        cartReviewMode: state.cartReviewMode
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        closeCartReview,
        proceedToCheckout
    }, dispatch);
};
    

export default connect(mapStateToProps, mapDispatchToProps)(CartReviewModal);