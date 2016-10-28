import React from 'react';

import CartItemList from './cart-item-list';
import CartTotal from './cart-total';

const styles = {
    default: {
        boxShadow: '0 1px 10px rgba(34, 36, 38, 0.14902)',
        margin: 0,
        borderRadius: '0 0 5px 0',
        border: 0,
        height: '100%',
        padding: 0
    }
};

const Cart = () => {
    return (
        <div 
            style={styles.default}
            className="ui segment segments service-picked-list">
            <CartItemList/>
            <CartTotal/>
        </div>
    );
};

export default Cart;