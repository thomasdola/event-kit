// import $ from 'jquery';

import numeral from 'numeral';
import Radium from 'radium';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu } from 'semantic-ui-react';

import ServiceFilterPopup from '../popups/service-filter-popup';
import { closeFilterPopup, performFilter, openFilterPopup } from '../../actions/services';

const styles = {
    header: {
        boxShadow: '0px 1px 10px 0 rgba(34, 36, 38, 0.15)',
        border: 0,
        borderRadius: 0
    }
};

export class ServiceItemListHeader extends React.Component{
    
    constructor(props){
        super(props);

        this.handleFilter = this.handleFilter.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleFilterToggle = this.handleFilterToggle.bind(this);
        // this.handleFilterOpen = this.handleFilterOpen.bind(this);
    }

    componentDidMount(){
        // const $filterButton = $(ReactDOM.findDOMNode(this.refs.filterButton));
        // const $filterFormPopup = $(ReactDOM.findDOMNode(this.refs.filterPopup));
        // $filterButton.popup({
        //     popup: $filterFormPopup,
        //     on: 'manual',
        //     inline     : true,
        //     closable  : false,
        //     exclusive: false,
        //     position   : 'bottom center'
        // });
    }

    handleFilterToggle(e){
        const { filterMode } = this.props;
        filterMode ? this.handleClose() : this.handleFilterOpen();
    }

    handleFilterOpen(e){
        this.props.openFilterPopup();
    }

    handleClose(e){
        this.props.closeFilterPopup();
    }

    handleFilter(fromAmount, toAmount){
        console.log(`${fromAmount} => ${toAmount}`);
        this.props.performFilter(fromAmount, toAmount);
    }

    render(){

        const { filterPriceRange: {from, to }, filterMode} = this.props;

        const filterButton = (
            <div className="link item __filter_button Filter__Button" ref="filterButton" onClick={this.handleFilterToggle}>
                <i className="filter icon"/>
            </div>
        );
        
        return (
            <Menu className="Service__List__Header" style={styles.header}>
                {
                    to ?<div className="item">
                            <i className="grid layout icon"/>
                        </div>
                        : null
                }
                
                { to ? 
                    <div className="item">
                        <span>&#8373; <b>{numeral(from).format('0,0.00')}</b></span>
                        <i className="long arrow right icon"/>
                        <span>&#8373; <b>{numeral(to).format('0,0.00')}</b></span>
                    </div>
                    : null    
                }
                

                <div className="right menu">
                    <ServiceFilterPopup
                        open={filterMode}
                        trigger={filterButton}
                        filterPriceRange={this.props.filterPriceRange} 
                        performFilter={this.handleFilter}
                        closeFilterPopup={this.handleClose}/>
                </div>

                {/*form popup*/}
                
            </Menu>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        openFilterPopup, 
        performFilter, 
        closeFilterPopup
    }, dispatch)
};

const mapStateToProps = ({filterPriceRange, filterMode}) => ({
    filterPriceRange,
    filterMode
});
    

export default connect(mapStateToProps, mapDispatchToProps)(ServiceItemListHeader);