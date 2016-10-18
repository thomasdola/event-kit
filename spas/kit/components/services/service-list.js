import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ServiceListItem from './service-list-item';
import { addItemToCart } from '../../actions/cart';
import { fetchService, zoomOnService } from '../../actions/services';
import ServiceZoomModal from '../modals/service-zoom-view';

class ServiceList extends React.Component {

    constructor(props){
        super(props);

        this.addItemToCart = this.addItemToCart.bind(this);
        this.zoomInOnItem = this.zoomInOnItem.bind(this);
    }

    addItemToCart({id, name, amount}, fromModal){
        const { cartItems, addItemToCart} = this.props;
        const already = !!_.find(cartItems, {id: id});
        if(already) return;
        addItemToCart({id, name, amount})
        if(fromModal) $(ReactDOM.findDOMNode(this.refs.serviceZoomModal)).modal('hide');
        
        console.log('add to cart clicked...');
    };

    zoomInOnItem(item){
        const { zoomOnService, fetchService } = this.props;
        zoomOnService(item);
        // this.props.fetchService(item.id);
        console.log(item);
        const $serviceZoomModal = $(ReactDOM.findDOMNode(this.refs.serviceZoomModal));
        $serviceZoomModal.modal('show');
    }

    render(){

        console.log('cart items ', this.props.cartItems);

        const rendered = this.props.services.map(service => 
            (
                <ServiceListItem key={service.id} item={service} 
                    onZoom={this.zoomInOnItem}
                    onAddToCart={this.addItemToCart}/>
            ));

        return (
            <div className="ui three cards link">
                { rendered }

                {/*modal*/}
                <ServiceZoomModal ref="serviceZoomModal" onAddToCart={this.addItemToCart}/>
            </div>
        );
    }

    
};

const mapStateToProps = ({cartItems}, ownProps) => {
    return {
        cartItems
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({addItemToCart, fetchService, zoomOnService}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceList);