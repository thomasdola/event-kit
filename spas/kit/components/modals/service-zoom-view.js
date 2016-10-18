import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';

class ServiceZoomView extends React.Component{
    constructor(props){
        super(props);

        this.handleClickAdd = this.handleClickAdd.bind(this);
    }

    handleClickAdd(e){
        const { service, onAddToCart } = this.props; 
        onAddToCart(service, true);
    }

    componentDidMount(){
        const $this = $(ReactDOM.findDOMNode(this));
        $this.modal({
            closable: false,
            transition: 'fade up',
            blurring: true
        });
        console.log('zoom modal ready ...');
    }

    render(){

        const { service: {id, images, amount, name}, loadingService, onAddToCart } = this.props; 

        return (
            <div className="ui modal Zoom__Modal small">
                <div className="header">
                    <div className="ui segment">
                        <div className="ui grid">
                            <div className="eight wide column">{name}</div>
                            <div className="eight wide column right aligned">Amount: 
                            <span>&#8373; <b>{numeral(amount).format('0,0.00')}</b></span></div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className={`ui segment ${loadingService ? 'loading' : ''}`}>

                    </div>
                </div>
                <div className="actions">
                    <div className="ui mini deny button">
                        close
                    </div>
                    <div className="ui mini right button" onClick={this.handleClickAdd}>
                        add
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ serviceBeingZoomed, loadingServiceProgress }, ownProps) => {
    return {
        service: serviceBeingZoomed,
        loadingService: loadingServiceProgress
    }
}


export default connect(mapStateToProps)(ServiceZoomView);