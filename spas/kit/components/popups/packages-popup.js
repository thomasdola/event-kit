import _ from 'lodash';
import numeral from 'numeral';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Popup, List, Button, Form, Radio } from 'semantic-ui-react';

const styles = {
    default: {
        // positioning: 'absolute',
        // top: '21.5%',
        // right: '15%',
        // transform: 'translate(50%)',
        width: '300px'
    }
};

export default class PackagesPopup extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            selectedPackage: {
                range: [],
                amount: null
            }
        };

        this.handleCancel = this.handleCancel.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(pack){
        this.setState({selectedPackage: pack});
    }

    handleUpdate(){
        const { service, update, cancel } = this.props;
        const updatedService = _.assign({}, service, {amount: this.state.selectedPackage.amount});
        update(updatedService);
        cancel();
    }

    handleCancel(){
        this.props.cancel();
    }


    render(){
        const { service, open, trigger, positioning, positiveButton } = this.props;

        const renderedList = service.packages.map(pack => (
            <List.Item key={Math.random()}>
                <List.Content floated='right'>
                    <Radio
                        key={Math.random()}
                        label={`\u20B5 ${numeral(pack.amount).format('0,0.00')}`}
                        value={`${pack.amount}`}
                        checked={this.state.selectedPackage.amount === pack.amount}
                        onChange={e => this.handleChange(pack)}
                    />
                </List.Content>
                <List.Content>
                    { `${pack.range[0]} to ${pack.range[1]}` }
                </List.Content>
            </List.Item>
        ));

        return(
            <Popup
                flowing={true}
                trigger={trigger}
                className={`Choose__Package__Popup`}
                positioning={positioning}
                on='click' 
                style={styles.default}
                open={open}>
                
                <Popup.Header>
                    {service.name}
                </Popup.Header>

                <Popup.Content>

                    <List
                        divided={true}
                        verticalAlign='middle'>

                        { service.packages && renderedList }
                    
                    </List>

                    <Button
                        onClick={this.handleUpdate}
                        className={`Update__Package ${this.state.selectedPackage.amount ? '' : 'disabled'}`} size='mini'>
                        {positiveButton}
                    </Button>

                    <Button 
                        onClick={this.handleCancel}
                        className='Cancel' size='mini'>cancel
                    </Button>



                </Popup.Content>

            </Popup>
        );
    };
}

PackagesPopup.PropTypes = {
    open: React.PropTypes.bool.isRequired,
    service: React.PropTypes.object,
    cancel: React.PropTypes.func.isRequired,
    update: React.PropTypes.func.isRequired,
    trigger: React.PropTypes.node,
    positioning: React.PropTypes.string.isRequired,
    positiveButton: React.PropTypes.string.isRequired
};