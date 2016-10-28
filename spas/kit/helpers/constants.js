// General
export const STATE = () => 'state';

export const URL = () => 'http://localhost:3000';

// Actions

// Budget
export const SAVE_BUDGET = () => 'SAVE_BUDGET';
export const OPEN_CHANGE_BUDGET_POPUP = () => 'OPEN_CHANGE_BUDGET_POPUP';
export const CLOSE_CHANGE_BUDGET_POPUP = () => 'CLOSE_CHANGE_BUDGET_POPUP';

// Filter
export const PERFORM_FILTER = () => 'PERFORM_FILTER';
export const OPEN_FILTER_POPUP = () => 'OPEN_FILTER_POPUP';
export const CLOSE_FILTER_POPUP = () => 'CLOSE_FILTER_POPUP';

// Service
export const OPEN_SERVICE_ZOOM_MODAL = () => 'OPEN_SERVICE_ZOOM_MODAL';
export const CLOSE_SERVICE_ZOOM_MODAL = () => 'CLOSE_SERVICE_ZOOM_MODAL';
export const FETCH_SERVICE = () => 'FETCH_SERVICE';
export const RECEIVE_SERVICE = () => 'RECEIVE_SERVICE';
export const START_LOADING_SERVICE = () => 'START_LOADING_SERVICE';
export const FINISH_LOADING_SERVICE = () => 'FINISH_LOADING_SERVICE';
export const LOADING_SERVICE_FAILED = () => 'LOADING_SERVICE_FAILED';

// services
export const FETCH_SERVICES = () => 'FETCH_SERVICES';
export const RECEIVE_SERVICES = () => 'RECEIVE_SERVICES';
export const START_LOADING_SERVICES = () => 'START_LOADING_SERVICES';
export const FINISH_LOADING_SERVICES = () => 'FINISH_LOADING_SERVICES';
export const LOADING_SERVICES_FAILED = () => 'LOADING_SERVICES_FAILED';

// cart
export const REVIEW_CART = () => 'REVIEW_CART';
export const CLOSE_CART_REVIEW = () => 'CLOSE_CART_REVIEW';
export const HIDE_CART_ITEM = () => 'HIDE_CART_ITEM';
export const SHOW_CART_ITEM = () => 'SHOW_CART_ITEM';
export const REMOVE_CART_ITEM = () => 'REMOVE_CART_ITEM';
export const REMOVE_HIDDEN_CART_ITEM = () => 'REMOVE_HIDDEN_CART_ITEM';
export const ADD_ITEM_TO_CART = () => 'ADD_ITEM_TO_CART';
export const EDIT_ITEM_PACKAGE = () => 'EDIT_ITEM_PACKAGE';
export const CLOSE_PACKAGES_POPUP = () => 'CLOSE_PACKAGES_POPUP';
export const UPDATE_CART_ITEM_PACKAGE = () => 'UPDATE_CART_ITEM_PACKAGE';

// balance
export const AMOUNT_OUT_OF_RANGE = () => 'AMOUNT_OUT_OF_RANGE';
export const AMOUNT_IN_RANGE = () => 'AMOUNT_IN_RANGE';

// categories
export const FETCH_CATEGORIES = () => 'FETCH_CATEGORIES';
export const RECEIVE_CATEGORIES = () => 'RECEIVE_CATEGORIES';
export const START_LOADING_CATEGORIES = () => 'START_LOADING_CATEGORIES';
export const FINISH_LOADING_CATEGORIES = () => 'FINISH_LOADING_CATEGORIES';
export const LOADING_CATEGORIES_FAILED = () => 'LOADING_CATEGORIES_FAILED';
export const SELECT_CATEGORY = () => 'SELECT_CATEGORY';

//steps menu
export const OPEN_STEPS_MENU = () => 'OPEN_STEPS_MENU';
export const CLOSE_STEPS_MENU = () => 'CLOSE_STEPS_MENU';
export const SELECT_STEP = () => 'SELECT_STEP';
export const START_LOADING_STEPS = () => 'START_LOADING_STEPS';
export const FINISH_LOADING_STEPS = () => 'FINISH_LOADING_STEPS';
export const RECEIVE_STEPS = () => 'RECEIVE_STEPS';
export const LOADING_STEPS_FAILED = () => 'LOADING_STEPS_FAILED';

// testing
export const UNKNOWN_ACTION = () => 'UNKNOWN_ACTION';