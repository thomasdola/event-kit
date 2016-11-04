import mom from 'moment';
import Radium from 'radium';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Menu, Icon } from 'semantic-ui-react';

import DateRangePicker from '../popups/date-picker';

const moment = require('moment');


const styles = {
    defaut: {
        border: 0,
        borderRadius: 0
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
            date: moment.range(new Date(), new Date())
        }

        this.toggleCalendar = this.toggleCalendar.bind(this);
        this.closeCalendar = this.closeCalendar.bind(this);
        this.openCalendar = this.openCalendar.bind(this);
        this.handleDate = this.handleDate.bind(this);
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

    handleDate(range){
        this.setState({
            date: range
        }, () => {
            window.setTimeout(() => {
                this.closeCalendar();
                console.log(`Start -> ${range.start} <=> End -> ${range.end}`);
            }, 100)
        });
        
    }

    render(){

        const { calendarOpened, date } = this.state;
        const { selectedStatus } = this.props;
        console.log('from header', selectedStatus);

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
                style={styles.defaut}
                >
                <Menu.Item header>Orders</Menu.Item>

                <Menu.Item 
                    as={Link}
                    to='/manage/orders/new'
                    active={selectedStatus === 'new'}
                    name='new'
                >
                    new
                </Menu.Item>
                <Menu.Item 
                    as={Link}
                    to='/manage/orders/pending'
                    active={selectedStatus === 'pending'}
                    name='pending'>
                    pending
                </Menu.Item>
                <Menu.Item 
                    as={Link}
                    to='/manage/orders/closed'
                    active={selectedStatus === 'closed'}
                    name='closed'>
                    closed
                </Menu.Item>

                <Menu.Menu position='right'>
                    <DateRangePicker
                        open={calendarOpened}
                        value={date}
                        trigger={datePickerTigger}
                        onDateSelected={this.handleDate}
                        />
                </Menu.Menu>
            </Menu>
        );
    }
}

const mapStateToProps = (state, {selectedStatus}) => ({
    selectedStatus
});


export default connect(mapStateToProps)(Header);