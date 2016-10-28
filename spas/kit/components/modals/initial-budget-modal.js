import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Popup, Button, Header, Icon, Image, Modal, Form } from 'semantic-ui-react';

import { saveBudget } from '../../actions/budget';
import { askForInitialBudget } from '../../selectors';

export class InitialBudgetModal extends Component{

    constructor(props){
        super(props);

        this.state = {
            open: this.props.ask,
            dimmer: 'blurring',
            amount: '',
            error: false
        }

        this.close = this.close.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSetBudget = this.onSetBudget.bind(this);
    }

    onSetBudget(e){
        e.preventDefault();
        const amount = this.state.amount;
        if(!amount) return;
        this.props.saveBudget(amount);
        this.close();
    }

    handleChange(e){
        const amount = e.target.value;
        if( !_.isInteger(_.toNumber(amount))){
            return this.setState({error: true});
        }
        this.setState({amount: amount, error: true});
    }
    

    close(e){
        console.log('closing ....');
        this.setState({open: false});
    }

    render(){

        const ModalStyles = {
                    borderRadius: 0,
                    width: 200
                };
        const { amount, error } = this.state;

        return (
            <Modal open={false} className="Initial__Budget__Modal" size={'small'}>
                <Modal.Header className="Modal__Header center aligned">Kindly enter your event budget</Modal.Header>

                <Modal.Content className="Modal__Content">
                    <form className="ui form Modal__Form">
                        <div className="field">
                                <input
                                    className={`${error ? 'field error' : ''}`}
                                    value={this.state.amount}
                                    type="text"
                                    onChange={this.handleChange}
                                    placeholder="Budget..."/>
                            </div>
                        <button 
                            className={`ui button submit fluid ${ amount ? '' : 'disabled' }`} 
                            onClick={this.onSetBudget}>
                                save
                        </button>
                    </form>
                </Modal.Content>
            </Modal>
        );
    }
}

InitialBudgetModal.PropTypes = {
    ask: React.PropTypes.bool.isRequired,
    saveBudget: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    ask: askForInitialBudget(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({saveBudget}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InitialBudgetModal);