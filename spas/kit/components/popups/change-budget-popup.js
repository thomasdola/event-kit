import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

class ChangeBudgetPopup extends React.Component{
    constructor(props){
        super(props);

        this.state = {amount: ''};

        this.cancel = this.cancel.bind(this);
        this.save = this.save.bind(this);
		this.handleChange = this.handleChange.bind(this);
    }


	handleChange(e){
		const value = e.target.value;
		if( !_.isInteger(_.toNumber(value))) return;
		this.setState({amount: e.target.value})
	}

    save(e){
        e.preventDefault();
        const amount = this.state.amount;
        const { saveBudget, closeForm } = this.props;
        saveBudget(amount);
        this.setState({amount: ''});
        closeForm();
    }

    cancel(e){
        e.preventDefault();
		this.props.closeForm();
        console.log('canceling...');
    }

    render(){
        return (
            <div className="ui flowing popup hidden  __change_budget_form"
                 style = {{
                     minWidth: `${270}px`,
                     padding: `${.3}em`,
                     height: `${40}px`
                 }}>
                <form className="ui form equal mini">
                    <div className="fields">
                        <div className="field">
                            <input
                                value={this.state.amount}
                                type="text"
                                onChange={this.handleChange}
                                placeholder="Budget..."/>
                        </div>
                        <button className="ui button submit mini" onClick={this.save}>save</button>
                        <button className="ui button mini" onClick={this.cancel}>cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ChangeBudgetPopup;
