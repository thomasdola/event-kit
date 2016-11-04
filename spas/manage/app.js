import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configStore from './store/configStore';
import routes from './routes';
import Main from './components/main/main';

const store = configStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>),
    document.querySelector('div#app')
);