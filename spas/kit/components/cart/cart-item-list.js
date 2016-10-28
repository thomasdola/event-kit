import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CartItem from './cart-item';
import PackagesPopup from '../popups/packages-popup';
import { hideCartItem, showCartItem, removeCartItem, editItemPackage, updateCartItemPackage, closePackagesPopup } from '../../actions/cart';

const styles = {
    default: {
        height: '93%'
    }
}

export class CartItemList extends React.Component {

    constructor(props){
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleClosePopup = this.handleClosePopup.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleToggle(item){
        const { hideCartItem, showCartItem } = this.props;
        item.hidden ? showCartItem(item) : hideCartItem(item);
    }

    handleRemove(item){
        this.props.removeCartItem(item);
    }

    handleEdit(item){
        this.props.editItemPackage(item);
    }

    handleClosePopup(){
        this.props.closePackagesPopup();
    }

    handleUpdate(item){
        this.props.updateCartItemPackage(item);
    }

    render(){
        const { cartItems, cartItemEditMode, selectedCartItem } = this.props;

        console.log('cartItemEditMode from list -> ', cartItemEditMode)

        const items = cartItems.map(item => {
            return (
                <CartItem
                    item={item}
                    key={item.id}
                    toggleVisibility={this.handleToggle} 
                    editCartItemMode={cartItemEditMode}
                    edit={this.handleEdit}
                    update={this.handleUpdate}
                    closePopup={this.handleClosePopup}
                    remove={this.handleRemove}/>
            )
        })

        return (
            <div 
                style={styles.default}
                className="ui segment vertical Cart__Item__List">
                <div className="ui divided list">
                    { items }
                </div>

                <PackagesPopup
                    open={cartItemEditMode}
                    service={selectedCartItem}
                    update={this.handleUpdate}
                    cancel={this.handleClosePopup}
                />

            </div>
        );
    }
    
};

CartItemList.PropTypes = {
    hideCartItem: React.PropTypes.func.isRequired,
    showCartItem: React.PropTypes.func.isRequired,
    removeCartItem: React.PropTypes.func.isRequired,
    cartItems: React.PropTypes.arrayOf(React.PropTypes.object)
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        hideCartItem,
        showCartItem,
        removeCartItem,
        editItemPackage,
        closePackagesPopup,
        updateCartItemPackage
    }, dispatch);
};

const mapStateToProps = ({ cartItems, cartItemEditMode, selectedCartItem }) => ({ 
    cartItems, cartItemEditMode , selectedCartItem
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItemList);