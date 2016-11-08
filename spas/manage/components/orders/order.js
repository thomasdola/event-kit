import React from 'react';
import { Grid, Segment, Button, Table, Image, List, Icon, Dropdown, Label } from 'semantic-ui-react';

const styles = {
    default: {
        height: '95%',
        marginTop: 0
    },

    table: {
        item: {
            image: {
                marginRight: '.5rem'
            }
        }
    },

    mainGrid: {
        margin: 0,
        // height: '100%'
    },

    infoGrid: {
        padding: 0
    },

    tableGrid: {
        padding: 0
    },
    infoSegments: {
        boxShadow: 'none',
        borderTop: 0,
        borderLeft: 0,
        borderBottom: 0,
        height: '100%',
        borderRadius: 0,

        client: {
            height: '45%'
        },
        order: {
            height: '45%',
            label: {
                backgroundColor: 'rgb(128, 0, 128)',
                color: 'white'
            }
        },
        buttons: {
            height: '10%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    },

    itemsSegments: {
        boxShadow: 'none',
        border: 0,
        height: '100%',
        borderRadius: 0,
    }
};

export class Order extends React.Component {

    constructor(props){
        super(props);
        this.handleDownloadOrder = this.handleDownloadOrder.bind(this);
        this.handleCloseOrder = this.handleCloseOrder.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    handleDownloadOrder(){}

    handleCloseOrder(){}

    handleStatusChange(name, value){
        console.log(name, value);
    }

    render(){

        const changeStatusTrigger = (
            <Button 
                onClick={this.handleCloseOrder} 
                className='Change__Order__Status' 
                compact size='mini'>change status</Button>
        );

        return (
            <Segment
                basic
                style={styles.default}
                >
                <Grid 
                    style={styles.mainGrid}
                    columns={2} padded='vertically'>

                    <Grid.Column 
                        style={styles.infoGrid}
                        width={6}>

                        <Segment.Group style={styles.infoSegments}>

                            <Segment className='Client__Info' basic style={styles.infoSegments.client}>

                                <List relaxed size='large'>
                                    <List.Item>
                                        <Icon name='user' />
                                        <List.Content>
                                            <List.Header>Client Information</List.Header>
                                            <List.Description>
                                                
                                                <List relaxed>
                                                    <List.Item>
                                                        Full Name: Thomas Paulson
                                                    </List.Item>
                                                    <List.Item>
                                                        Phone Number: +233248089578
                                                    </List.Item>
                                                </List>

                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                </List>

                            </Segment>

                            <Segment className='Order__Info' basic style={styles.infoSegments.order}>

                                <List relaxed size='large'>
                                    <List.Item>
                                        <Icon name='book' />
                                        <List.Content>
                                            <List.Header>Order Information</List.Header>
                                            <List.Description>
                                                
                                                <List relaxed>
                                                    <List.Item>
                                                        Status: <Label style={styles.infoSegments.order.label} horizontal>new</Label>
                                                    </List.Item>
                                                    <List.Item>
                                                        Date: 02/12/2016
                                                    </List.Item>
                                                    <List.Item>
                                                        Amount: 50000
                                                    </List.Item>
                                                </List>

                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                </List>

                            </Segment>

                            <Segment className='Action__Buttons' basic style={styles.infoSegments.buttons}>
                                <Button onClick={this.handleDownloadOrder} 
                                    className='Download__Order' compact size='mini'>download</Button>

                                <Dropdown trigger={changeStatusTrigger} 
                                    labeled pointing='bottom left' icon={null}
                                    className='Change__Order__Status__Dropdown'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item 
                                            onClick={this.handleStatusChange}
                                            value='new' disabled 
                                            label={{ color: 'red', empty: true, circular: true }} 
                                            text='new' />
                                        <Dropdown.Item 
                                            onClick={this.handleStatusChange}
                                            value='pending' 
                                            label={{ color: 'blue', empty: true, circular: true }} 
                                            text='pending' />
                                        <Dropdown.Item 
                                            onClick={this.handleStatusChange}
                                            value='closed' 
                                            label={{ color: 'black', empty: true, circular: true }} 
                                            text='closed' />
                                    </Dropdown.Menu>
                                </Dropdown>
                                
                            </Segment>

                        </Segment.Group>
                        
                    </Grid.Column>

                    <Grid.Column 
                        style={styles.tableGrid}
                        width={10}>

                        <Segment.Group  className='Order__Items'
                            style={styles.itemsSegments}
                            >
                            
                            <Segment className='Order__Items__Header' basic>
                                Order Items
                            </Segment>
                        
                            <Segment className='Order__Items__Table' basic>
                                <Table padded selectable 
                                    basic='very'
                                    style={styles.table}
                                    >
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Service Details</Table.HeaderCell>
                                            <Table.HeaderCell>Price</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>
                                                <Image
                                                    style={styles.table.item.image} 
                                                    src={`/images/cow.jpg`} 
                                                    size='tiny' 
                                                    verticalAlign='middle' /> 
                                                    <span>Middle Aligned</span>
                                            </Table.Cell>
                                            <Table.Cell>50000</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </Segment>

                        </Segment.Group>

                    </Grid.Column>

                </Grid>
            </Segment>
        )
    }
}

Order.PropsType = {};

export default Order;