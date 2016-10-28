import numeral from 'numeral';
import Radium from 'radium';
import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Image, Label, Icon, Button } from 'semantic-ui-react';

const styles = {
    card: {
        height: '150px',
        width: '190px',
        margin: '1em',
        boxShadow: '0px 0px 3px 0px rgba(175, 175, 175, 0.50)',
        ':hover':{
            cursor: 'default'
        },
        image: {
            width: 'inherit',
            height: '125px'
        }
    },
    priceTag: {
        // left: 'calc( 0.05rem  -  0em )'
    },
    actionButtons: {
        top: '50%',
        left: '40%',
        padding: 0,
        // display: 'none,'
        ':after':{
            content: 'none'
        }
    }
}

class ServiceItem extends React.Component{

    constructor(props){
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
        this.handleZoom = this.handleZoom.bind(this);
    }

    handleAdd(e){
        const { onAddToCart, item } = this.props;
        onAddToCart(item);
    }

    handleZoom(e){
        const { onZoomService, item: {id} } = this.props;
        onZoomService(id);
    }
    

    render(){

        const { item } = this.props;

        const formatted = (
            <span>&#8373; <b>{numeral(item.amount).format('0,0.00')}</b></span>
        );

        return (
            <div key="keyForServiceCard" className="card Service__Item" style={styles.card}>
                <div className="image" style={styles.card.image}>

                    <Label floating
                        style={styles.actionButtons}
                        size='tiny'
                        className="Action__Buttons">

                        {
                            Radium.getState(this.state, 'keyForServiceCard', ':hover') 
                            ? (
                                <Button.Group icon size='mini'>
                                    <Button className="Add__Button" icon='add to cart' onClick={this.handleAdd}/>
                                    <Button className="Zoom__Button" icon='zoom' onClick={this.handleZoom}/>
                                </Button.Group>
                            )
                            : null
                        }
                        
                        

                    </Label>

                    {/*<!--image ratio is 3:2-->*/}
                    <Image 
                        label={{ as: 'a', style: styles.priceTag, 
                        content: `\u20B5 ${numeral(item.amount).format('0,0.00')}`, 
                        ribbon: true }}
                        src={item.img}>
                        </Image>

                </div>
                <Label className="Service__Name" attached='bottom'>{item.name}</Label>
            </div>
        );
    }
}

ServiceItem.PropTypes = {
    item: React.PropTypes.object.isRequired,
    onAddToCart: React.PropTypes.func.isRequired,
    onZoomService: React.PropTypes.func.isRequired
};


export default Radium(ServiceItem);
    