import React, { Component } from 'react';
import { Popup, Button, Header, Icon, Image, Modal, Form } from 'semantic-ui-react';
import _ from 'lodash';

class InitialBudgetModal extends Component{

    constructor(props){
        super(props);

        this.state = {
            open: true,
            dimmer: 'blurring',
            amount: ''
        }

        this.close = this.close.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.onSetBudget = this.onSetBudget.bind(this);
    }

    componentDidMount() {
        this.setState({
            open: !this.props.budget
        })
    }

    onSetBudget(e){
        e.preventDefault();
        const amount = this.state.amount;
        if(!amount) return;
        this.props.onSetBudget(amount);
        this.close();
    }

    handleOnChange(e){
        const amount = e.target.value;
        if( !_.isInteger(_.toNumber(amount))) return;
        this.setState({amount: amount});
        console.log(amount);
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
        //       ModalHeaderStyles = {
        //         padding: 0,
        //         borderBottom: 0
        //       },
        //       ModalActionsStyles = {
        //           borderRadius: 0,
        //           display: 'flex',
        //           flexDirection: 'row',
        //           justifyContent: 'space-between'
        //       }

        return (
            <Modal open={this.state.open} className="Initial__Budget__Modal" size={'small'}>
                <Modal.Header className="center aligned">Kindly enter your event budget</Modal.Header>

                <Modal.Content>
                    <form className="ui form">
                        <div className="field">
                                <input
                                    value={this.state.amount}
                                    type="text"
                                    onChange={this.handleOnChange}
                                    placeholder="Budget..."/>
                            </div>
                        <button className="ui button submit fluid" onClick={this.onSetBudget}>save</button>
                    </form>
                </Modal.Content>
            </Modal>
        );
    }
}

export default InitialBudgetModal;