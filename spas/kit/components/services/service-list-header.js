import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import numeral from 'numeral';
import { closeForm, performFilter, launchFilter } from '../../actions/services';
import FilterPricePopup from '../popups/price-filter-form-popup';

class ServiceListHeader extends React.Component{
    constructor(props){
        super(props);

        this.handleFilter = this.handleFilter.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleFilterToggle = this.handleFilterToggle.bind(this);
        // this.handleFilterOpen = this.handleFilterOpen.bind(this);
    }

    componentDidMount(){
        const $filterButton = $(ReactDOM.findDOMNode(this.refs.filterButton));
        const $filterFormPopup = $(ReactDOM.findDOMNode(this.refs.filterPopup));
        $filterButton.popup({
            popup: $filterFormPopup,
            on: 'manual',
            inline     : true,
            closable  : false,
            exclusive: false,
            position   : 'bottom center'
        });
        console.log('service list header ready ....');
    }

    handleFilterToggle(e){
        const $filterButton = $(ReactDOM.findDOMNode(this.refs.filterButton));
        $filterButton.popup('is visible')
            ? this.handleClose()
            : this.handleFilterOpen();
    }

    handleFilterOpen(e){
        const $filterButton = $(ReactDOM.findDOMNode(this.refs.filterButton));
        $filterButton.popup('show');
        this.props.launchFilter();
    }

    handleClose(e){
        const $filterButton = $(ReactDOM.findDOMNode(this.refs.filterButton));
        $filterButton.popup('hide');
        this.props.closeForm();
    }

    handleFilter(fromAmount, toAmount){
        console.log(`${fromAmount} => ${toAmount}`);
        this.props.performFilter(fromAmount, toAmount);
    }

    render(){

        const { performFilter, closeForm, from, to } = this.props;
        
        return (
            <div className="ui menu service-list-header">
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
                    <div className="link item __filter_button" ref="filterButton" onClick={this.handleFilterToggle}>
                        <i className="filter icon"/>
                    </div>
                </div>

                {/*form popup*/}
                <FilterPricePopup 
                    performFilter={this.handleFilter}
                    closeForm={this.handleClose}
                    ref="filterPopup"/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        launchFilter, 
        performFilter, 
        closeForm
    }, dispatch)
};

const mapStateToProps = ({filterPriceRange: { from, to }}) => ({
    from, to
});
    

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListHeader);