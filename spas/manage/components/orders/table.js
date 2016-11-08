import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Segment, Table, Label, Button } from 'semantic-ui-react';

const styles = {
    default: {
        height: '95%', 
        marginTop: 0
    },
    table: {
        borderRadius: 0,
        button: {},
        label: {
            backgroundColor: 'rgb(128, 0, 128)',
            color: 'white'
        }
    }
};

export class OrdersTable extends React.Component{

    constructor(props){
        super(props);
    }
    

    render(){
        return (
            <Segment basic loading={false} style={styles.default}>
                <Table padded selectable 
                    basic='very'
                    style={styles.table}
                    >
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell>Order ID</Table.HeaderCell>
                        <Table.HeaderCell>Client Name</Table.HeaderCell>
                        <Table.HeaderCell>Client Number</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>

                        <Table.Row>
                            <Table.Cell>521452</Table.Cell>
                            <Table.Cell>Thomas Paulson</Table.Cell>
                            <Table.Cell>0248089578</Table.Cell>
                            <Table.Cell>50000</Table.Cell>
                            <Table.Cell>
                                <Label style={styles.table.label} horizontal>new</Label>
                            </Table.Cell>
                            <Table.Cell>
                                <Button size='mini' as={Link} to={`/manage/orders/${521452}`}>
                                    process
                                </Button>
                            </Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table>
            </Segment>
        )
    }
}

// OrdersTable.PropsType = {};

const mapStateToProps = ({ orders }, ownProps) => {
    return {
        orders
    }
}

export default connect(mapStateToProps)(OrdersTable);