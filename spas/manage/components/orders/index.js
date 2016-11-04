import React from 'react';
import { connect } from 'react-redux';
import { Table, Segment, Button, Label } from 'semantic-ui-react';

import Header from './header';

const styles = {
    default: {},

    table: {
        borderRadius: 0,
        button: {},
        label: {
            backgroundColor: 'rgb(128, 0, 128)',
            color: 'white'
        }
    }
};

export class Orders extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        console.log('selected route', this.props.seletedStatus)

        return (
            <div>
                
                <Header
                    selectedStatus={this.props.seletedStatus}
                />

                <Segment basic
                    loading={false}
                >
                
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
                                    <Button size='mini'>
                                        process
                                    </Button>
                                </Table.Cell>
                            </Table.Row>

                        </Table.Body>
                        </Table>
                
                </Segment>
            </div>
        );
    }
}

const mapStateToProps = (state, {params: {status}}) => ({
    seletedStatus: status
});

export default connect(mapStateToProps)(Orders);