import React from 'react';

class PriceFilterFormPopup extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            fromAmount: '',
            toAmount: ''
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleFromAmountChange = this.handleFromAmountChange.bind(this);
        this.handleToAmountChange = this.handleToAmountChange.bind(this);
    }

    componentDidMount(){
        console.log('did mount');
    };

    componentWillReceiveProps(nextProps){
        console.log('will receive props');
    }

    componentWillUpdate(){
        console.log('will update');
    }

    componentDidUpdate(){
        console.log('did update');
    }


    handleClick(e){
        e.preventDefault();
        const { performFilter, closeForm } = this.props;
        const {fromAmount, toAmount} = this.state;
        if(!_.gt(toAmount, fromAmount)) return;
        performFilter(fromAmount, toAmount);
        closeForm();
    }

    handleToAmountChange(e){
        const value = e.target.value;
        if( !_.isInteger(_.toNumber(value))) return;
        this.setState({toAmount: value});
    }

    handleFromAmountChange(e){
        const value = e.target.value;
        if( !_.isInteger(_.toNumber(value))) return;
        this.setState({fromAmount: value});
    }

    render(){

        const { fromAmount, toAmount } = this.state;

        return (
            <div className="ui flowing popup hidden  __filter_form"
                 style = {{
                     minWidth: `${350}px`,
                     padding: `${.3}em`,
                     height: `${40}px`
                 }}>
                <form className="ui form equal mini">
                    <div className="fields">
                        <div className="field">
                            <input 
                                type="text"
                                value={fromAmount}
                                onChange={this.handleFromAmountChange}
                                placeholder="From"/>
                        </div>
                        <div className="field">
                            <input 
                                type="text" 
                                onChange={this.handleToAmountChange}
                                value={toAmount} 
                                placeholder="To"/>
                        </div>
                        <button className="ui button mini" onClick={this.handleClick}>filter</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default PriceFilterFormPopup;