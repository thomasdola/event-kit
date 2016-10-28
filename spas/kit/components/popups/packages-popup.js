import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Popup, List, Button, Form, Radio } from 'semantic-ui-react';

const styles = {
    default: {
        positioning: 'absolute',
        top: '24%',
        right: '25%',
        transform: 'translate(50%)',
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

        this.handCancel = this.handleCancel.bind(this);
    }

    handleChange(pack){
        this.setState({selectedPackage: pack});
    }

    handleUpdate(){}

    handleCancel(){
        console.log(this);
    }


    render(){
        const { service, open } = this.props;

        console.log('open -> ', open);

        const renderedList = service.packages.map(pack => (
            <List.Item key={Math.random()}>
                <List.Content floated='right'>
                    <Radio
                        key={Math.random()}
                        label={`${pack.amount}`}
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
                flowing
                basic
                className={`animated ${open ? 'slideInUp' : 'slideOutUp'}`}
                positioning='left center'
                on='click' 
                style={styles.default}
                open={open}
                className="Choose__Package__Popup">
                
                <Popup.Header>
                    {service.name}
                </Popup.Header>

                <Popup.Content>

                    <List divided 
                        verticalAlign='middle'>

                        { service.packages && renderedList }
                    
                    </List>

                    <Button 
                        onClick={this.handleUpdate}
                        className='Update__Package' size='mini'>udpate</Button>

                    <Button 
                        onClick={this.handleCancel}
                        className='Cancel' size='mini'>cancel</Button>

                </Popup.Content>

            </Popup>
        );
    };
}