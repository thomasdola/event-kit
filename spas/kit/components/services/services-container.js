import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react'

import ServiceItemList from './service-item-list';
import ServiceItemListHeader from './service-item-list-header';

const styles = {
    default: {
        boxShadow: 'none',
        margin: 0,
        borderRadius: 0,
        border: 0,
        height: '100%'
    }
};

export const ServicesContainer = ({ loadingServices }) => {

        return (
            <Segment 
                style={styles.default}
                className={`service-list ${loadingServices ? 'loading' : ''}`}>
                <ServiceItemListHeader/>
                <ServiceItemList/>
            </Segment>
        );
}

const mapStateToProps = ({ loadingServices } ) => {
    return {
        loadingServices
    }
}

export default connect(mapStateToProps)(ServicesContainer);