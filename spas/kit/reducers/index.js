import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import isBudgetChangingModeOn from './budget-changing-mode-reducer';
import isFilterPriceModeOn from './price-filter-mode-reducer';
import isCartReviewModeOn from './cart-review-mode-reducer';
import isServiceZoomModeOn from './service-zoom-mode-reducer';
import budget from './budget-reducer';
import balance from './balance';
import filterPriceRange from './filter-price-range-reducer';
import cartTotal from './cart-total';
import cartItems from './cart-items';
import loadingServices, { loadingServiceProgress } from './loading-services-progress-reducer';
import services from './services-reducers';
import categories, { selectedCategory, serviceBeingZoomed } from './categories-reducer';
import loadingCategories from './loading-categories-progress-reducer';




export default combineReducers({
    routing: routerReducer,
    isBudgetChangingModeOn,
    isFilterPriceModeOn,
    isCartReviewModeOn,
    isServiceZoomModeOn,
    budget,
    filterPriceRange,
    cartTotal,
    cartItems,
    balance,
    loadingServices,
    loadingServiceProgress,
    services,
    categories,
    selectedCategory,
    loadingCategories,
    serviceBeingZoomed
});