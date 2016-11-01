import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import budget, { budgetChangingMode } from './budget-reducer';
import cartItems, { cartTotal, cartReviewMode, cartItemEditMode,
    selectedCartItem, serviceToBePicked, packageChoosingMode } from './cart-reducers';
import categories, { selectedCategory } from './categories-reducer';
import services, { serviceInZoom, serviceZoomMode, servicesImages } from './services-reducers';
import { clientDetailsMode, verifyingNumber, phoneVerificationMode, checkingOut, requestingCode } from './checkout-reducers';
import { filterMode, filterPriceRange } from './filter-reducers';
import { loadingCategories, loadingService, loadingServices } from './loading-reducers';
import { stepsMenuOpened, steps, activeStep } from './steps-menu-reducer';

export default combineReducers({
    routing: routerReducer,
    loadingCategories,
    loadingService,
    loadingServices,
    services,
    serviceZoomMode,
    serviceInZoom,
    servicesImages,
    budget,
    budgetChangingMode,
    cartItems,
    cartReviewMode,
    packageChoosingMode,
    selectedCartItem,
    serviceToBePicked,
    cartItemEditMode,
    cartTotal,
    categories,
    selectedCategory,
    filterMode,
    filterPriceRange,
    stepsMenuOpened,
    steps,
    activeStep,
    clientDetailsMode,
    checkingOut,
    verifyingNumber,
    phoneVerificationMode,
    requestingCode
});