import Radium from 'radium';
import React from 'react';
import { Container } from 'semantic-ui-react';

import CartReviewModal from './modals/cart-review-modal';
import CategoryList from './categories/category-item-list';
import InitialBudgetModal from './modals/initial-budget-modal';
import MainHeader from './main-header';
import ServicesAndCart from './services-and-cart';
import ServiceZoomModal from './modals/service-zoom-modal';
import StepMenuPopup from './popups/step-menu-popup';

const styles = {
    background: 'white',
    height: '90vh',
    minWidth: '1000px',
    borderRadius: '5px',
    boxShadow: '0px 0px 3px 0px rgba(175, 175, 175, 0.50)'
};

const Main = ({ children }) => {
    return (
        <Container className="Main__Content" style={styles}>
            {/*main content*/}
            <MainHeader/>
            <CategoryList/>
            <ServicesAndCart/>
            
            <CartReviewModal/>
            <ServiceZoomModal/>
            <InitialBudgetModal/>
            
            <StepMenuPopup/>
        </Container>
    );
};

export default Radium(Main);