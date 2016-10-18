import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configStore from './store/config';
import * as localStorage from './helpers/local-storage';
import Routes from './routes';
import { fetchCategories } from './actions/categories';

// localStorage.init();

const store = configStore(localStorage.getCurrentState());
const history = syncHistoryWithStore(browserHistory, store);
store.dispatch(fetchCategories());
console.log(store.getState());
// localStorage.saveCurrentState(store.getState());


ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={Routes}/>
    </Provider>,
    document.querySelector('div#app')
);