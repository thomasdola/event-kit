import React from 'react';
import { Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import ServiceListHeader from './service-list-header';
import ServiceList from './service-list';
import { fetchServices } from '../../actions/services';

const ServiceListContainer = ({ loadingServices, services }) => {

        const rendered = _.isEmpty(services) ? null : (
            <ServiceList services={services}/>
        );

        console.log(services);

        return (
            <Segment className={`service-list ${loadingServices ? 'loading' : ''}`}>
                <ServiceListHeader/>
                { rendered }
            </Segment>
        );
}

const mapStateToProps = ({ loadingServices, filterPriceRange, services } ) => {
    return {
        loadingServices,
        filterPriceRange,
        services
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchServices}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListContainer);