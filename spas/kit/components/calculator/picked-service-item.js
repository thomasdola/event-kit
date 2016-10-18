import React from 'react';
import numeral from 'numeral';

class PickedServiceItem extends React.Component{
    constructor(props){
        super(props);
        this.remove = this.remove.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle(e){
        const { item, toggleVisibility } = this.props;
        toggleVisibility(item);
        console.log(`${item.isHidden ? "show " : "hide "} item clicked ...`);
    }

    remove(e){
        const { item, remove } = this.props;
        remove(item);
    }

    render(){
        const { item: { name, amount, hidden } } = this.props;
        const hiddenStyle = {backgroundColor: '#f2f2f5', color: 'rgba(34, 36, 38, 0.15)'};

        return(
            <div className="item" style={hidden ? hiddenStyle : null}>
                <div className="ui grid">
                    <div className="nine wide column">{name}</div>
                    <div className="one wide column remove_button action_button" onClick={this.remove}>
                                <span className="ui icon">
                                    <i className="trash icon"/>
                                </span>
                    </div>
                    <div className="one wide column hide_button action_button" onClick={this.toggle}>
                                <span className="ui icon">
                                    <i className={hidden ? "unhide icon" : "hide icon"}/>
                                </span>
                    </div>
                    <div className="five wide column"><span>&#8373; <b>{numeral(amount).format('0,0.00')}</b></span></div>
                </div>
            </div>
        );
    }
}

export default PickedServiceItem