import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addItemToCart } from '../../actions/cart';
import numeral from 'numeral';

class ServiceListItem extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const $serviceItem = $(ReactDOM.findDOMNode(this.refs.serviceItem));
        $serviceItem.dimmer({
            on: 'hover'
        });
    }

    

    render(){

        const { item, onAddToCart, onZoom } = this.props;

        return (
            <div className="card service-item" ref="serviceItem">
                <div className="blurring dimmable image">
                    {/*<!--image ratio is 3:2-->*/}
                    {/*<!--<img src="/images/logo.png">-->*/}
                </div>
                <div className="content center aligned">
                    <span className="header">&#8373; <b>{numeral(item.amount).format('0,0.00')}</b></span>
                    <div className="meta">
                        <span className="date">{item.name}</span>
                    </div>
                </div>
                <div className="ui inverted dimmer">
                    <div className="content">
                        <div className="center">
                            <div className="ui icon buttons small compact">
                                <button className="ui button service_zoom Zoom__Button" onClick={e => onZoom(item)}>
                                    <i className="zoom icon"/>
                                </button>
                                <button className="ui button service_add" onClick={e => onAddToCart(item)}>
                                    <i className="add to cart icon"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default ServiceListItem;
    