import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { Popup, Button } from 'semantic-ui-react';

const styles = {
    default: {
        minWidth: `270px`,
        padding: `.3em`,
        height: `40px`
    }
}

class ChangeBudgetPopup extends React.Component{
    constructor(props){
        super(props);

        this.state = {amount: '', error: false};

        this.cancel = this.cancel.bind(this);
        this.save = this.save.bind(this);
		this.handleChange = this.handleChange.bind(this);
    }


	handleChange(e){
		const value = e.target.value;
		if( !_.isInteger(_.toNumber(value))) return;
		this.setState({amount: e.target.value});
        if(this.state.error) this.setState({error: false});
	}

    save(e){
        e.preventDefault();
        const amount = this.state.amount;
        if(!amount) return this.setState({error: true});
        const { saveBudget, closeForm } = this.props;
        saveBudget(amount);
        this.setState({amount: ''});
        closeForm();
    }

    cancel(e){
        e.preventDefault();
		this.props.closePopup();
    }

    render(){
        const { error, amount } = this.state;

        return (
            <Popup 
                open={this.props.budgetChangingMode}
                on='click'
                positioning='left center'
                trigger={this.props.trigger}
                className="Change__Budget__Popup  __change_budget_form"
                 style = {styles.default}>

                <form className="ui form equal mini Form">
                    <div className="fields">
                        <div className={`field ${error ? 'error' : ''}`}>
                            <input
                                className={`${error ? 'error' : ''}`}
                                value={amount}
                                type="text"
                                onChange={this.handleChange}
                                placeholder="Budget..."/>
                        </div>
                        <button 
                            className="ui button submit mini Save__Button" 
                            onClick={this.save}>save</button>
                        <button 
                            className="ui button mini Cancel__Button" 
                            onClick={this.cancel}>cancel</button>
                    </div>
                </form>
                
            </Popup>
        );
    }
}

export default ChangeBudgetPopup;
