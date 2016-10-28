import _ from 'lodash';
import numeral from 'numeral';
import Radium from 'radium';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu, Label } from 'semantic-ui-react'

import ChangeBudgetButton from './buttons/change-budget-button';
import ChangeBudgetPopup from './popups/change-budget-popup'
import InitialBudgetModal from './modals/initial-budget-modal';
import { balanceIsInRange, balanceIsOutOfRange } from '../actions/balance';
import { openChangeBudgetPopup, closeChangeBudgetPopup, saveBudget } from '../actions/budget';
import { reviewCartItems, closeCartReview } from '../actions/cart';
import { openStepsMenu, closeStepsMenu } from '../actions/steps-menu';
import { getBalanceSelector } from '../selectors';

const styles = {
    menu: {
        borderWidth: '0',
        height: '4vh',
        marginBottom: '0',
        boxShadow: 'rgba(34, 36, 38, 0.14902) 0px 1px 10px 0px'
    },
    reviewButton: {
        borderRadius: '5px 0 0 0',
        ':hover':{
            color: 'white',
            background: 'rgba(34, 36, 38, 0.15)',
            borderRadius: '5px 0 0 0'
        },
    },
    stepsButton:{
        borderRadius: '5px 0 0 0',
        ':hover':{
            
        },
        active: {
            background: '#551a8b',
            color: 'white'
        }
    },

    changeBudget: {
        ':hover':{}
    },

    changeBudgetLabel: {
        backgroundColor: 'rgb(85, 26, 139)', 
        borderColor: 'rgb(85, 26, 139)', 
        color: '#ffffff',
        top: '-70%',
        left: '-30%',
        width: '200px'
    },
    
    balanceOutStyle: {
        backgroundColor: '#fa5d80', 
        color: '#ffffff'
    },
    balanceInStyle: {
        backgroundColor: '#4eecb8',
        color: '#333333'
    },

    warningLabel: {
        backgroundColor: '#fa5d80', 
        borderColor: '#fa5d80', 
        color: '#ffffff',
        top: '-70%',
        left: '-30%',
        width: '200px'
    }

};

export class MainHeader extends React.Component{

    constructor(props){
        super(props);
        this.reviewCart = this.reviewCart.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
        this.handleCloseForm = this.handleCloseForm.bind(this);
        this.handleOpenPopup = this.handleOpenPopup.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.setInitialBudget = this.setInitialBudget.bind(this);
        this.closeCartReview = this.closeCartReview.bind(this);
        this.toggleStepsMenu = this.toggleStepsMenu.bind(this);
    }

    handleCloseForm(){
        this.props.closeChangeBudgetPopup();
    }

    handleOpenPopup(){
        this.props.openChangeBudgetPopup();
    }

    handleSave(amount){
        this.props.saveBudget(amount);
    }

	handleToggle(e){
	    this.props.budgetChangingMode
            ? this.handleCloseForm()
            : this.handleOpenPopup();
	}

    reviewCart(e){
        this.props.reviewCartItems();
    }

    closeCartReview(){
        this.props.closeCartReview();
    }

    setInitialBudget(amount){
        console.log(amount);
        this.props.saveBudget(amount);
    }

    toggleStepsMenu(e){
        const { stepsMenuOpened, openStepsMenu, closeStepsMenu, budgetChangingMode } = this.props;
        stepsMenuOpened ? closeStepsMenu() : openStepsMenu();
    }

    render(){
        let balanceBoxStyle;

        const { balance, budget, cartTotal, balanceIsInRange, balanceIsOutOfRange, stepsMenuOpened, budgetChangingMode } = this.props;
        // const actualBalance = _.subtract(_.toNumber(balance.amount), _.toNumber(cartTotal));

        if(balance.amount){
            balanceBoxStyle = _.lt(balance.amount, _.toNumber(cartTotal)) ? styles.balanceOutStyle : styles.balanceInStyle;
        } 
    
        const changeBudgetItem = (
            <div 
                onClick={this.handleOpenPopup}
                key='keyForChangeBudget'
                className={`item link ${budgetChangingMode ? 'disabled' : ''} __change_budget Open__Change__Budget__Popup`}
                style={styles.changeBudget}>
                Budget: <span>&#8373; <b>{numeral(budget).format('0,0.00')}</b></span>
                
                {
                    Radium.getState(this.state, 'keyForChangeBudget', ':hover')
                    ? (
                        <Label basic floating 
                            style={styles.changeBudgetLabel}
                            pointing='below'>
                            Click to change budget
                        </Label>
                    )
                    : null
                }

            </div>
        );

        return (
            <Menu className="Box__Header" style={styles.menu}>

                <div key='setsButton' 
                    className="item link Steps__Menu__Button" 
                    onClick={this.toggleStepsMenu} 
                    style={[styles.stepsButton, stepsMenuOpened ? styles.stepsButton.active : null]}>
                    <i className="browser icon"/>
                </div>

                <div key='reviewButton' className="item link Review__Button" onClick={this.reviewCart} style={styles.reviewButton}>
                    <i className="shop icon"/>
                </div>
                
                <div className="right menu">

                    <ChangeBudgetPopup
                        budgetChangingMode={budgetChangingMode}
                        trigger={changeBudgetItem} 
                        closePopup={this.handleCloseForm}
                        saveBudget={this.handleSave}/>
                    
                
                    <div className="item Balance__Box" 
                        style={balanceBoxStyle}
                        >
                        <Label basic floating 
                            style={styles.warningLabel}
                            pointing='below'>
                            Please enter a value
                        </Label>
                        Balance: <span>&#8373; <b>{numeral(balance.amount).format('0,0.00')}</b></span>
                    </div>
                </div>

            </Menu>
        );
    }
}

const mapDispatchToProp = dispatch => {
	return bindActionCreators({
		openChangeBudgetPopup,
        closeChangeBudgetPopup,
        saveBudget,
        balanceIsInRange,
        balanceIsOutOfRange,
        reviewCartItems,
        closeCartReview,
        openStepsMenu,
        closeStepsMenu
	}, dispatch)
};

const mapStateToProp = (state) => ({
	budget: state.budget,
	balance: getBalanceSelector(state),
    cartTotal: state.cartTotal,
    stepsMenuOpened: state.stepsMenuOpened,
    budgetChangingMode: state.budgetChangingMode
})


export default connect(mapStateToProp, mapDispatchToProp)(Radium(MainHeader));
