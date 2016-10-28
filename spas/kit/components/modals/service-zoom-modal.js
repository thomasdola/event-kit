import numeral from 'numeral';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Icon, Modal } from 'semantic-ui-react'

import { addItemToCart } from '../../actions/cart';
import { closeServiceZoomModal } from '../../actions/services';
import { getServiceInZoomImagesSelector, getServiceInZoomSelector } from '../../selectors';

export class ServiceZoomModal extends React.Component{

    constructor(props){
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleAdd(e){
        const { service, addItemToCart } = this.props; 
        addItemToCart(service);
    }

    handleClose(e){
        const { closeServiceZoomModal } = this.props;
        closeServiceZoomModal();
    }

    render(){

        const { service: {name, amount}, images, loadingService, serviceZoomMode } = this.props; 

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
                    <div className="ui mini right button" onClick={this.handleAdd}>
                        add
                    </div>
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
    closeServiceZoomModal: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    service: getServiceInZoomSelector(state),
    // service: state.serviceInZoom,
    images: getServiceInZoomImagesSelector(state),
    loadingService: state.loadingService,
    serviceZoomMode: state.serviceZoomMode
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addItemToCart, closeServiceZoomModal
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ServiceZoomModal);