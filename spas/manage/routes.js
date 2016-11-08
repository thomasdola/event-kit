import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Dashboard from './components/dashboard';
import Main from './components/main/main';
import Order from './components/orders/order';
import Orders from './components/orders';
import Services from './components/services';

export default (
    <Route path='/manage/dashboard' component={Main}>
        <IndexRoute component={Dashboard}/>
        <Route path='/manage/orders' component={Orders}>
            <Route path='/manage/orders/:orderId' component={Order}/>
        </Route>
        <Route path='/manage/services' component={Services}>
        </Route>
    </Route>
);