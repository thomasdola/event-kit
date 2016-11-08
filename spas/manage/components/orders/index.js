import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Table, Segment, Button, Label } from 'semantic-ui-react';

import Header from './header';
import OrdersTable from './table';

const styles = {
    default: {}
};

export class Orders extends React.Component {

    constructor(props){
        super(props);
    }    
    

    render(){

        const { children, selectedStatus, orderId } = this.props;

        return (
            <div>
                
                <Header
                    selectedStatus={selectedStatus}
                    orderId={orderId}
                />

                {
                    children 
                    ? children
                    : (
                        <OrdersTable/>
                    )
                }

            </div>
        );
    }
}

const mapStateToProps = (state, {location: {query: {status}}, params: {orderId}}) => ({
    selectedStatus: status,
    orderId
});

export default connect(mapStateToProps)(Orders);