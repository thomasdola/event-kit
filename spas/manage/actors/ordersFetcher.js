import { fetchOrders } from '../actions/orders';

export default ({ ordersPath }, dispatch) => {
    dispatch(fetchOrders(ordersPath));
};