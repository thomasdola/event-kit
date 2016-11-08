import React from 'react';
import { Grid, Segment, Button, Table } from 'semantic-ui-react';

const styles = {
    default: {
        height: '95%',
        marginTop: 0
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
        border: 0,
        height: '100%',
        borderRadius: 0,

        client: {
            height: '45%'
        },
        order: {
            height: '45%'
        },
        buttons: {
            height: '10%'
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
    }

    render(){
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

                            <Segment basic style={styles.infoSegments.client}>
                                Client Information:
                            </Segment>

                            <Segment basic style={styles.infoSegments.order}>
                                Order Information:
                            </Segment>

                            <Segment basic style={styles.infoSegments.buttons}>
                                <Button size='mini'>download</Button>
                                <Button size='mini'>close</Button>
                            </Segment>

                        </Segment.Group>
                        
                    </Grid.Column>

                    <Grid.Column 
                        style={styles.tableGrid}
                        width={10}>

                        <Segment.Group
                            style={styles.itemsSegments}
                            >
                            
                            <Segment basic>
                                Order Items
                            </Segment>
                        
                            <Segment basic>
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
                                            <Table.Cell>521452</Table.Cell>
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