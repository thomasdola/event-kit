import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Menu, Icon } from 'semantic-ui-react';
const moment = require('moment');

const styles = {
    default: {
        width: '100%',
        height: '100%',
        boxShadow: 'none',
        border: 'none',
        backgroundColor: '#800080',
        borderRadius: 0
    },

    item: {
        color: 'white'
    }
};

export class MainMenu extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        const { dateRange: {start, end} } = this.props

        return (
            
            <Menu 
                style={styles.default}
                icon='labeled' vertical>
                <Menu.Item 
                    as={Link}
                    to='/manage/dashboard'
                    style={styles.item}
                    name='gamepad'>
                    <Icon name='gamepad' />
                    Dashboard
                </Menu.Item>

                <Menu.Item 
                    as={Link}
                    to={`/manage/orders?status=new&start=${moment(start).format('L')}&end=${moment(end).format('L')}`}
                    style={styles.item}
                    name='video camera'>
                    <Icon name='video camera' />
                    Orders
                </Menu.Item>

                <Menu.Item 
                    style={styles.item}
                    name='video play'>
                    <Icon name='video play' />
                    Settings
                </Menu.Item>
            </Menu>

        )
    }
}

const mapStateToProps = ({ dateRange }) => ({
    dateRange
});

export default connect(mapStateToProps)(MainMenu);