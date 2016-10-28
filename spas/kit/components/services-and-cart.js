import React from 'react';

import Cart from './cart/cart';
import ServicesContainer from './services/services-container';

const styles = {
    box: {
        margin: 0,
        border: 0,
        boxShadow: 'none',
        height: '75vh'
    },

    services: {
        margin: 0,
        padding: 0
    },

    cart: {
        margin: 0,
        padding: 0
    }
};

const ServicesAndCart = (props) => {
    return (
        <div 
            style={styles.box}
            className="ui grid horizontal segments categories-calculator Services__And__Cart">

            <div 
                style={styles.services}
                className="ten wide column">
                <ServicesContainer/>
            </div>
            <div 
                style={styles.cart}
                className="six wide column">
                <Cart/>
            </div>
            
        </div>
    );
};

export default ServicesAndCart;