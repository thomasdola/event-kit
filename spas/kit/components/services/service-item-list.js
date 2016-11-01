import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ServiceItem from './service-item';
import { addItemToCart, updateCartItemPackage, doneChoosingPackage, chooseItemPackage } from '../../actions/cart';
import { zoomOnService } from '../../actions/services';

export class ServiceItemList extends React.Component {

    constructor(props){
        super(props);

        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleZoom = this.handleZoom.bind(this);
        this.handleClosePackagesPopup = this.handleClosePackagesPopup.bind(this);
        this.handleOpenPackagesPopup = this.handleOpenPackagesPopup.bind(this);
    }

    handleAddToCart(item){
        const { cartItems, addItemToCart, updateCartItemPackage } = this.props;
        const already = _.find(cartItems, {id: item.id});
        if(already){
            if(!item.fixed && already.amount === item.amount){
                // dispatch a notification
                return;
            }else{
                return updateCartItemPackage(item);
            }
        }
        addItemToCart(item);
    };

    handleZoom(id){
        this.props.zoomOnService(id);
    }

    handleOpenPackagesPopup(itemId){
        this.props.chooseItemPackage(itemId);
    }

    handleClosePackagesPopup(){
        this.props.doneChoosingPackage();
    }

    render(){

        const { packageChoosingMode, serviceToBePicked } = this.props;

        const rendered = this.props.services.map(service => 
            (
                <ServiceItem
                    key={service.id} item={service}
                    openPackagesPopup={e => this.handleOpenPackagesPopup(service.id)}
                    closePackagesPopup={this.handleClosePackagesPopup}
                    packageChoosingMode={packageChoosingMode && serviceToBePicked === service.id}
                    onZoomService={this.handleZoom}
                    onAddToCart={this.handleAddToCart}
                />
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
    updateCartItemPackage: React.PropTypes.func.isRequired,
    zoomOnService: React.PropTypes.func.isRequired,
    cartItems: React.PropTypes.arrayOf(React.PropTypes.object)
};

const mapStateToProps = ({services, cartItems, serviceToBePicked, packageChoosingMode}, ownProps) => {
    return {
        services,
        cartItems,
        serviceToBePicked,
        packageChoosingMode
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        addItemToCart, 
        zoomOnService,
        updateCartItemPackage,
        doneChoosingPackage,
        chooseItemPackage
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceItemList);