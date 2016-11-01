import numeral from 'numeral';
import React from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Icon, Modal } from 'semantic-ui-react'

import { addItemToCart, updateCartItemPackage } from '../../actions/cart';
import { closeServiceZoomModal } from '../../actions/services';
import PackagesPopup from '../popups/packages-popup';
import { getServiceInZoomImagesSelector, getServiceInZoomSelector } from '../../selectors';

export class ServiceZoomModal extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            addingMode: false
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAddFromPopup = this.handleAddFromPopup.bind(this);
        this.handleClosePopup = this.handleClosePopup.bind(this);
        this.handleOpenPopup = this.handleOpenPopup.bind(this);
    }

    handleAdd(e){
        const { service, addItemToCart, closeServiceZoomModal, cartItems } = this.props;
        const already = _.find(cartItems, {id: service.id});
        if(already){
            // dispatch notification
            return closeServiceZoomModal();
        }
        addItemToCart(service);
        closeServiceZoomModal();
    }

    handleClose(e){
        const { closeServiceZoomModal } = this.props;
        closeServiceZoomModal();
    }

    handleOpenPopup(){
        this.setState({addingMode: true});
    }

    handleClosePopup(){
        this.setState({addingMode: false});
    }

    handleAddFromPopup(item){

        const { cartItems, addItemToCart,
            updateCartItemPackage, closeServiceZoomModal } = this.props;
        const already = _.find(cartItems, {id: item.id});
        if(already){
            if(!item.fixed && already.amount === item.amount){
                // dispatch a notification
                return;
            }else{
                updateCartItemPackage(item);
                this.handleClosePopup();
                return closeServiceZoomModal();
            }
        }
        addItemToCart(item);
        this.handleClosePopup();
        closeServiceZoomModal();
    }

    render(){

        const { service: {name, amount, fixed}, images, loadingService, serviceZoomMode } = this.props;

        const addTrigger = (
            <div className="ui mini right button" onClick={this.handleOpenPopup}>
                add
            </div>
        );

        return (
            <Modal className="ui modal Zoom__Modal small" open={serviceZoomMode}>
                <Modal.Header className="Modal__Header">
                    <div className="ui segment">
                        <div className="ui grid">
                            <div className="Service__Name eight wide column">{name}</div>
                            <div className="Service__Amount eight wide column right aligned">Amount: &#8373;
                            <span><b>{numeral(amount).format('0,0.00')}</b></span></div>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Content className="Modal__Content">
                    <div className={`Images__Loader ui segment ${loadingService ? 'loading' : ''}`}>

                    </div>
                </Modal.Content>
                <Modal.Actions className="Modal__Actions">
                    <div className="ui mini button" onClick={this.handleClose}>
                        close
                    </div>

                    { fixed ? (
                        <div className="ui mini right button" onClick={this.handleAdd}>
                            add
                        </div>
                    ) : (
                        <PackagesPopup
                            trigger={addTrigger}
                            open={this.state.addingMode}
                            service={this.props.service}
                            update={this.handleAddFromPopup}
                            cancel={this.handleClosePopup}
                            positioning="top right"
                            positiveButton="add"
                        />
                    ) }

                </Modal.Actions>
            </Modal>
        );
    }
}

ServiceZoomModal.PropTypes = {
    service: React.PropTypes.object.isRequired,
    images: React.PropTypes.array.isRequired,
    loadingService: React.PropTypes.bool.isRequired,
    serviceZoomMode: React.PropTypes.bool.isRequired,
    addItemToCart: React.PropTypes.func.isRequired,
    updateCartItemPackage: React.PropTypes.func.isRequired,
    closeServiceZoomModal: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    service: getServiceInZoomSelector(state),
    cartItems: state.cartItems,
    images: getServiceInZoomImagesSelector(state),
    loadingService: state.loadingService,
    serviceZoomMode: state.serviceZoomMode
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addItemToCart, closeServiceZoomModal, updateCartItemPackage
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ServiceZoomModal);