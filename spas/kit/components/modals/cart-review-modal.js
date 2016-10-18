import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import numeral from 'numeral';

class CartReviewModal extends React.Component{
    constructor(props){
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const $this = $(ReactDOM.findDOMNode(this));
        $this.modal({
            allowMultiple: true,
            closable: false,
            transition: 'fade up',
            blurring: true
        });
        console.log('cart review modal done');
    }

    handleClose(e){
        const $this = $(ReactDOM.findDOMNode(this));
        $this.modal('hide');
    }

    handleSubmit(){}

    render(){

        const { budget, cartTotal, cartItems } = this.props;

        const visibleItems = _.filter(cartItems, {hidden: false});

        const items = visibleItems.map(({name, amount, id}) => (
            <div className="item" key={id}>
                <div className="ui grid">
                    <div className="nine wide column">{name}</div>
                    <div className="two wide column"></div>
                    <div className="five wide column right aligned"><span>&#8373; 
                        <b>{numeral(amount).format('0,0.00')}</b>
                        </span></div>
                </div>
            </div>
        ));

        return (
            <div className="ui modal Review__Modal small">
                <div className="header">
                    <div className="ui segment">
                        <div className="ui grid">
                            <div className="eight wide column">Budget: <span>&#8373; 
                                <b>{numeral(budget).format('0,0.00')}</b></span></div>
                            <div className="eight wide column right aligned">Total: <span>&#8373; 
                                <b>{numeral(cartTotal).format('0,0.00')}</b></span></div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="ui segment">
                        <div className="ui divided list">

                            {items}
                            
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <div className="ui mini button" onClick={this.handleClose}>
                        close
                    </div>
                    <div className="ui mini positive right button" onClick={this.handleSubmit}>
                        submit
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () =>{
            dispatch(actionCreator)
        }
    }
}

const mapStateToProps = ({ cartItems, budget, cartTotal }, ownProps) => {
    return {
        cartItems,
        budget,
        cartTotal
    }
}
    

export default connect(mapStateToProps)(CartReviewModal);