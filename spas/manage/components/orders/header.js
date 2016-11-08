import mom from 'moment';
import Radium from 'radium';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Menu, Icon, Button } from 'semantic-ui-react';

import DateRangePicker from '../popups/date-picker';
import { changeDateRange, updateOrdersPath, goBackToOrders } from '../../actions/orders';
import { getOrderMetaSelector } from '../../selectors';

const moment = require('moment');
const momentRange = require('moment-range');


const styles = {
    defaut: {
        border: 0,
        borderRadius: 0,
        height: '5%',
        marginBottom: 0
    },
    item: {
        ':hover': {},
        active: {}
    }
};

export class Header extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            calendarOpened: false,
            date: moment.range(props.dateRange.start, props.dateRange.end)
        }

        this.toggleCalendar = this.toggleCalendar.bind(this);
        this.closeCalendar = this.closeCalendar.bind(this);
        this.openCalendar = this.openCalendar.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    handleGoBack(){
        this.props.goBackToOrders();
    }

    toggleCalendar(){
        this.state.calendarOpened ? this.closeCalendar() : this.openCalendar();
    }

    openCalendar(){
        this.setState({calendarOpened: true});
    }

    closeCalendar(){
        this.setState({calendarOpened: false});
    }

    handleChangeStatus(status){
        const { selectedStatus, updateOrdersPath, dateRange } = this.props;
        if(selectedStatus !== status){
            // we need to update the orders path that the ordersFetcherActor will react to.
            return updateOrdersPath(status, dateRange.start, dateRange.end);
        } 
        return ; 
    }

    handleDate(range){
        this.setState({
            date: range
        }, () => {
            window.setTimeout(() => {
                this.closeCalendar();
            }, 100)
        });

        this.props.changeDateRange(range.start, range.end, this.props.selectedStatus);
        
    }

    render(){

        const { calendarOpened, date } = this.state;
        const { selectedStatus, orderId } = this.props;

        const datePickerTigger = (
            <Menu.Item
                onClick={this.toggleCalendar}
            >
                <Icon name='calendar' />
                {mom(date.start).format('L')} - {mom(date.end).format('L')}
            </Menu.Item>
        );

        return (
            <Menu pointing borderless
                className='Oders__Header__Menu'
                style={styles.defaut}
                    >
                <Menu.Item header>Orders</Menu.Item>

                {
                    orderId
                    ? (
                        <Menu.Item>
                            ORDER ID: {orderId}
                        </Menu.Item>
                    )
                    : (
                        <Menu.Menu>
                            <Menu.Item 
                                onClick={e => this.handleChangeStatus('new')}
                                active={selectedStatus === 'new'}
                                name='new'
                                >
                                new
                            </Menu.Item>
                            <Menu.Item 
                                onClick={e => this.handleChangeStatus('pending')}
                                active={selectedStatus === 'pending'}
                                name='pending'>
                                pending
                            </Menu.Item>
                            <Menu.Item 
                                onClick={e => this.handleChangeStatus('closed')}
                                active={selectedStatus === 'closed'}
                                name='closed'>
                                closed
                            </Menu.Item>
                        </Menu.Menu>
                    )
                }

                <Menu.Menu position='right'>

                    {
                        orderId 
                        ? (
                            <Menu.Item 
                                as='a'
                                onClick={this.handleGoBack}
                                className='Go__Back'>
                                <Icon name='undo'/>
                            </Menu.Item>
                        )
                        : (
                            <DateRangePicker
                                open={calendarOpened}
                                value={date}
                                trigger={datePickerTigger}
                                onDateSelected={this.handleDate}
                                />
                        )
                    }

                </Menu.Menu>
            </Menu>
        );
    }
}

Header.displayName = 'Header';

const mapStateToProps = (state, {selectedStatus}) => ({
    selectedStatus,
    dateRange: state.dateRange
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(
        {changeDateRange, updateOrdersPath, goBackToOrders},
        dispatch
    );


export default connect(mapStateToProps, mapDispatchToProps)(Header);