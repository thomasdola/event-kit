import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideCartItem, showCartItem, removeCartItem } from '../../actions/cart';
import PickedServiceItem from './picked-service-item';


class PickedServiceList extends React.Component {

    constructor(props){
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(item){
        const { hideCartItem, showCartItem } = this.props;
        console.log('to hide ', item);
        
        item.hidden ? showCartItem(item) : hideCartItem(item);
        item.hidden ? console.log('show') : console.log('hide');
    }

    handleRemove(item){
        this.props.removeCartItem(item);
    }

    render(){
        const { cartItems } = this.props;

        const items = cartItems.map(item => {
            return (
                <PickedServiceItem
                    item={item}
                    key={item.id}
                    toggleVisibility={this.handleToggle} 
                    remove={this.handleRemove}/>
            )
        })

        return (
            <div className="ui segment vertical picked-item-list">
                <div className="ui divided list">
                    { items }
                </div>
            </div>
        );
    }
    
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        hideCartItem,
        showCartItem,
        removeCartItem
    }, dispatch);
};

const mapStateToProps = ({ cartItems }) => ({ cartItems });

export default connect(mapStateToProps, mapDispatchToProps)(PickedServiceList);