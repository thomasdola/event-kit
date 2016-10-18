import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import numeral from 'numeral';
import _ from 'lodash';
import { changeBudget, closeForm, saveBudget } from '../actions/budget';
import { balanceIsInRange, balanceIsOutOfRange } from '../actions/balance';
import ChangeBudgetPopup from './popups/change-budget-popup';
import CartReviewModal from './modals/cart-review-modal';
import InitialBudgetModal from './modals/initial-budget-modal';

class MainHeader extends React.Component{
    constructor(props){
        super(props);
        this.reviewCart = this.reviewCart.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
        this.handleCloseForm = this.handleCloseForm.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.setInitialBudget = this.setInitialBudget.bind(this);
    }

    componentDidMount(){
        const $changeBudgetButton = $(ReactDOM.findDOMNode(this.refs.changeBudget));
        const $changeBudgetPopup = $(ReactDOM.findDOMNode(this.refs.changeBudgetPopup));
        $changeBudgetButton.popup({
            popup: $changeBudgetPopup,
            on: 'manual',
            inline: true,
            closable: false,
            exclusive: false,
            position: 'bottom center'
        });
        console.log('main header is ready ...');
    }

    handleCloseForm(){
        const $changeBudgetButton = $(ReactDOM.findDOMNode(this.refs.changeBudget));
	    $changeBudgetButton.popup('hide');
        this.props.closeForm();
    }

    handleOpenForm(){
        const $changeBudgetButton = $(ReactDOM.findDOMNode(this.refs.changeBudget));
        $changeBudgetButton.popup('show');
        this.props.changeBudget();
    }

    handleSave(amount){
        this.props.saveBudget(amount);
    }

	handleToggle(e){
        const $changeBudgetButton = $(ReactDOM.findDOMNode(this.refs.changeBudget));
	    $changeBudgetButton.popup('is visible') 
            ? this.handleCloseForm()
            : this.handleOpenForm();
	}

    reviewCart(e){
        const $cartReviewModal = $(ReactDOM.findDOMNode(this.refs.cartReviewModal));
        console.log($cartReviewModal);
        $cartReviewModal.modal('show');
        console.log('review cart clicked ...');
    }

    setInitialBudget(amount){
        console.log(amount);
        this.props.saveBudget(amount);
    }

    render(){
        let styles = null;
        const balanceOutStyle = {backgroundColor: '#fa5d80', color: '#ffffff'};
        const balanceInStyle = {backgroundColor: '#4eecb8', color: '#333333'};

        const { balance, budget, cartTotal, balanceIsInRange, balanceIsOutOfRange } = this.props;
        const actualBalance = _.subtract(_.toNumber(balance.amount), _.toNumber(cartTotal));

        if(balance.amount){
            styles = _.lt(actualBalance, _.toNumber(cartTotal)) ? balanceOutStyle : balanceInStyle;
        } 
        
        
        
        

        return (
            <div className="ui menu box-header">
                <div className="item link Review_Button" onClick={this.reviewCart}>
                    <i className="shop icon"/>
                </div>
                <div className="right menu">
                    <div data-tooltip="Click Budget to change amount.">
                        <div className="item link __change_budget" onClick={this.handleToggle} ref="changeBudget">

                            Budget: <span>&#8373; <b>{numeral(budget).format('0,0.00')}</b></span>

                        </div>
                    </div>
                
                    <div className="item" 
                        style={styles}
                        >
                        Balance: <span>&#8373; <b>{numeral(actualBalance).format('0,0.00')}</b></span>
                    </div>
                </div>

                {/*popup*/}
                <ChangeBudgetPopup 
                    saveBudget={this.handleSave}
                    closeForm={this.handleCloseForm}
                    ref="changeBudgetPopup"/>

                {/*modal*/}
                <CartReviewModal ref="cartReviewModal"/>

                <InitialBudgetModal budget={budget} onSetBudget={this.setInitialBudget}/>
            </div>
        );
    }
}

const mapDispatchToProp = dispatch => {
	return bindActionCreators({
		changeBudget,
        closeForm,
        saveBudget,
        balanceIsInRange,
        balanceIsOutOfRange
	}, dispatch)
};

const mapStateToProp = ({ budget, balance, cartTotal }) => ({
	budget,
	balance,
    cartTotal
})


export default connect(mapStateToProp, mapDispatchToProp)(MainHeader);
