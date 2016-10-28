import numeral from 'numeral';
import Radium from 'radium';
import React from 'react';
import { Label } from 'semantic-ui-react';

const styles = {
    default: {
        ':hover':{}
    },
    label:{
        backgroundColor: 'rgb(85, 26, 139)', 
        borderColor: 'rgb(85, 26, 139)', 
        color: '#ffffff',
        top: '-70%',
        left: '-30%',
        width: '200px'
    }
};

class ChangeBudgetButton extends React.Component {

    constructor(props){
        super(props);

    }

    render(){

        const { budget, budgetChangingMode, openPopup } = this.props;

        return (
            <div 
                onClick={e => openPopup()}
                key='keyForChangeBudget'
                className={`item link ${budgetChangingMode ? 'disabled' : ''} __change_budget Open__Change__Budget__Popup`}
                style={styles.default}>
                Budget: <span>&#8373; <b>{numeral(budget).format('0,0.00')}</b></span>
                
                {
                    Radium.getState(this.state, 'keyForChangeBudget', ':hover')
                    ? (
                        <Label basic floating 
                            style={styles.label}
                            pointing='below'>
                            Click to change budget
                        </Label>
                    )
                    : null
                }

            </div>
        );
    }

    
};

export default Radium(ChangeBudgetButton);