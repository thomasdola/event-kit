import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';

export default () => 
    createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk, routerMiddleware(browserHistory)),
            window.devToolsExtension ? window.devToolsExtension() : undefined
        )
    );