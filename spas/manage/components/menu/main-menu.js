import Radium from 'radium';
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
        color: 'white',

        settings: {
            position: 'absolute',
            width: '100%',
            bottom: 0,
            color: 'white',
        }
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
                    name='dashboard'>
                    <Icon name='dashboard' />
                    Dashboard
                </Menu.Item>

                <Menu.Item 
                    as={Link}
                    to={`/manage/orders?status=new&start=${moment(start).format('L')}&end=${moment(end).format('L')}`}
                    style={styles.item}
                    name='book'>
                    <Icon name='book' />
                    Orders
                </Menu.Item>

                <Menu.Item 
                    as={Link}
                    to='/manage/services'
                    style={styles.item}
                    name='services'>
                    <Icon name='umbrella' />
                    Services
                </Menu.Item>

                <Menu.Item 
                    as={Link}
                    to='/manage/partners'
                    style={styles.item}
                    name='partners'>
                    <Icon name='building' />
                    Partners
                </Menu.Item>

                <Menu.Item 
                    as={Link}
                    to='/manage/users'
                    style={styles.item}
                    name='users'>
                    <Icon name='users' />
                    Users
                </Menu.Item>

                <Menu.Item 
                    style={styles.item.settings}
                    name='settings'>
                    <Icon name='settings' />
                    Settings
                </Menu.Item>
            </Menu>

        )
    }
}

const mapStateToProps = ({ dateRange }) => ({
    dateRange
});

export default connect(mapStateToProps)(Radium(MainMenu));