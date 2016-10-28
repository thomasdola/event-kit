import numeral from 'numeral';
import Radium from 'radium';
import React from 'react';

import PackagesPopup from '../popups/packages-popup';

const styles = {
    
    box: {
        default: {
            height: '50px',
            padding: '.3em',
            display: 'flex',
            flexDirection: 'column',
            // border: 0
        },

        visible: {
            ':hover':{
                boxShadow: '0px 0px 30px rgb(204, 204, 204)',
            },
        },

        hidden: {
            backgroundColor: '#f2f2f5', 
            color: 'rgba(34, 36, 38, 0.15)',
            ':hover':{}
        }
    },

    actionButtons: {
        // opacity: 0,      
    },

    removeButton: {
        color: 'rgba(0, 0, 0, 0.6)',
        ':hover':{
            color: '#fa5d80',
            cursor: 'pointer'
        }
    },

    toggleButton: {
        color: 'rgba(0, 0, 0, 0.6)',
        ':hover': {
            color: '#00B7FF',
            cursor: 'pointer'
        }
    },

    editButton: {
        color: 'rgba(0, 0, 0, 0.6)',
        ':hover': {
            color: '#00B7FF',
            cursor: 'pointer'
        }
    },

    grid: {
        margin: '0 0 -1rem 0'
    }
};

export class CartItem extends React.Component{

    constructor(props){
        super(props);
        this.remove = this.remove.bind(this);
        this.toggle = this.toggle.bind(this);
        this.edit = this.edit.bind(this);
    }

    edit(e){
        const { item, edit } = this.props;
        edit(item);
    }

    toggle(e){
        const { item, toggleVisibility } = this.props;
        toggleVisibility(item);
    }

    remove(e){
        const { item, remove } = this.props;
        remove(item);
    }

    render(){
        const { item: { name, amount, hidden, fixed, id }, editCartItemMode, update, closePopup } = this.props;

        console.log('editCartItemMode => ', editCartItemMode);
        
        return(
            <div className="item Cart__Item" 
                key='keyForCartItem'
                style={[styles.box.default, hidden ? styles.box.hidden : styles.box.visible]}>

                <div className="ui grid" style={styles.grid}>

                    <div className="eight wide column Item__Name">{name}</div>

                    <div className="four wide column Action__Buttons">

                        { Radium.getState(this.state, 'keyForCartItem', ':hover') 
                        ? (
                            <div className="ui three column grid"
                                style={[styles.actionButtons]}
                                >

                                { fixed ? null : (

                                    <div className="column Edit__Button Item__Action"
                                        ref='editButton'
                                        style={[styles.editButton]} onClick={this.edit}>
                                        <span className="ui icon">
                                            <i className="pencil icon"/>
                                        </span>
                                    </div>

                                ) }

                                <div className="column Visibility__Button Item__Action"
                                    ref='toggleButton' 
                                    style={[styles.toggleButton]} onClick={this.toggle}>
                                    <span className="ui icon">
                                        <i className={`icon ${hidden ? "unhide" : "hide"}`}/>
                                    </span>
                                </div>

                                <div className="column Remove__Button Item__Action"
                                    ref='removeButton'
                                    style={[styles.removeButton]} onClick={this.remove}>
                                    <span className="ui icon">
                                        <i className="trash icon"/>
                                    </span>
                                </div>
                                
                            </div>
                        ) 
                        : null }

                    </div>

                    <div className="four wide column Item__Price right aligned">
                        &#8373;
                        <span><b>{numeral(amount).format('0,0.00')}</b></span>
                    </div>
                </div>

            </div>
        );
    }
}

CartItem.PropTypes = {
    toggle: React.PropTypes.func.isRequired,
    remove: React.PropTypes.func.isRequired,
    edit: React.PropTypes.func.isRequired,
    item: React.PropTypes.object.isRequired
};

export default Radium(CartItem);