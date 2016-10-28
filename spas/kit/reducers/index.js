import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import balance from './balance-reducer';
import budget, { budgetChangingMode } from './budget-reducer';
import cartItems, { cartTotal, cartReviewMode, cartItemEditMode, selectedCartItem } from './cart-reducers';
import categories, { selectedCategory } from './categories-reducer';
import services, { selectedService, serviceInZoom, serviceZoomMode, servicesImages } from './services-reducers';
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
    selectedCartItem,
    cartItemEditMode,
    cartTotal,
    categories,
    selectedCategory,
    filterMode,
    filterPriceRange,
    stepsMenuOpened,
    steps,
    activeStep
});