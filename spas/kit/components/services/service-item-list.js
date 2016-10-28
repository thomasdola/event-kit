import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ServiceItem from './service-item';
import { addItemToCart } from '../../actions/cart';
import { zoomOnService } from '../../actions/services';

export class ServiceItemList extends React.Component {

    constructor(props){
        super(props);

        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleZoom = this.handleZoom.bind(this);
    }

    handleAddToCart(item, fromModal){
        const { cartItems, addItemToCart } = this.props;
        if(_.find(cartItems, {id: item.id})){
            // dispatch a notification
            return;
        }
        // if(!item.fixed){
            
        // }
        this.props.addItemToCart(item);
    };

    handleZoom(id){
        this.props.zoomOnService(id);
    }

    render(){

        const rendered = this.props.services.map(service => 
            (
                <ServiceItem key={service.id} item={service} 
                    onZoomService={this.handleZoom}
                    onAddToCart={this.handleAddToCart}/>
            ));

        return (
            <div className="ui three cards link">
                { rendered }
            </div>
        );
    }

    
};

ServiceItemList.PropTypes = {
    services: React.PropTypes.arrayOf(React.PropTypes.object),
    addItemToCart: React.PropTypes.func.isRequired,
    zoomOnService: React.PropTypes.func.isRequired,
    cartItems: React.PropTypes.arrayOf(React.PropTypes.object)
};

const mapStateToProps = ({services, cartItems}, ownProps) => {
    return {
        services,
        cartItems
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        addItemToCart, 
        zoomOnService
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceItemList);