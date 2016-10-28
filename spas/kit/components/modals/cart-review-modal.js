import _ from 'lodash';
import numeral from 'numeral';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Icon, Modal } from 'semantic-ui-react'

import { closeCartReview } from '../../actions/cart';

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
        
    }

    render(){

        const { budget, cartTotal, cartItems, cartReviewMode } = this.props;

        const visibleItems = _.filter(cartItems, {hidden: false});
        // const visibleItems = cartItems;

        const items = visibleItems.map(({name, amount, id}) => (
            <div className="Cart__Review__Item item" key={id}>
                <div className="ui grid">
                    <div className="nine wide column">{name}</div>
                    <div className="two wide column"></div>
                    <div className="five wide column right aligned"><span>&#8373; 
                        <b>{numeral(amount).format('0,0.00')}</b>
                        </span></div>
                </div>
            </div>
        ));

        const ready = !_.isEmpty(visibleItems);

        return (
            <Modal className="Review__Modal Cart__Review__Modal small" open={cartReviewMode}>
                <div className="header">
                    <div className="ui segment">
                        <div className="ui grid">
                            <div className="eight wide column Review__Budget">Budget: <span>&#8373; 
                                <b>{numeral(budget).format('0,0.00')}</b></span></div>
                            <div className="eight wide column right aligned Review__Cart__Total">Total: <span>&#8373; 
                                <b>{numeral(cartTotal).format('0,0.00')}</b></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Cart__Review__Modal__Content content">
                    <div className="ui segment">
                        <div className="ui divided list">

                            {items}
                            
                        </div>
                    </div>
                </div>
                <div className="actions">
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


const mapStateToProps = ({ cartItems, budget, cartTotal, cartReviewMode }, ownProps) => {
    return {
        cartItems,
        budget,
        cartTotal,
        cartReviewMode
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({closeCartReview}, dispatch);
};
    

export default connect(mapStateToProps, mapDispatchToProps)(CartReviewModal);