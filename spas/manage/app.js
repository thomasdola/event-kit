import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import actors from './actors';
import configStore from './store/configStore';
import routes from './routes';
import Main from './components/main/main';

const store = configStore();
const history = syncHistoryWithStore(browserHistory, store);

// Handle changes to our store with a list of actor functions, but ensure
// that the actor sequence cannot be started by a dispatch from an actor
let acting = false
store.subscribe(function() {
  if (!acting) {
    acting = true

    for (let actor of actors) {
      actor(store.getState(), store.dispatch)
    }

    acting = false
  }
});

ReactDOM.render((
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>),
    document.querySelector('div#app')
);