import _ from 'lodash';
import MaskInput from 'react-input-mask';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Form, Input, Button, Checkbox, Loader } from 'semantic-ui-react';

import { checkout, verifyPhoneNumber, closeClientDetailsModal, requestNewCode } from '../../actions/checkout';
import { getOrderSelector } from '../../selectors';

const styles = {
    main: {
        width: '500px',
        borderRadius: 0
    },
    header: {},
    content: {},
    actions: {
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    form: {
        width: '100%'
    }
};

const options = [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' },
];

export class ClientDetailsModal extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            fullName: '',
            gender: '',
            phoneNumber: '',
            agreed: false,
            code: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleVerify = this.handleVerify.bind(this);
        this.handleNewCode = this.handleNewCode.bind(this);
    }

    handleSubmit(e){
        
        const {fullName, gender, agreed, phoneNumber} = this.state;
        const fullNameReg = new RegExp(/^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/);

        if(fullNameReg.test(fullName) && gender && agreed && _.trim(phoneNumber, '_').length == 16){
            const client = {
                name: fullName,
                gender,
                phone: phoneNumber
            };
            return this.props.checkout({client, order: [{id: 1, amount: 200}]});
        }

        // dispatch error notification
        console.log(this.state);
    }

    handleVerify(){
        const { code } = this.state;
        if(_.trim(code, '_').length == 4){
            return this.props.verifyPhoneNumber({code})
        }
        console.log(code);
    }

    handleNewCode(){
        const phone = {phone: this.state.phoneNumber};
        this.props.requestNewCode(phone);
    }

    render(){

        const { clientDetailsMode, phoneVerificationMode, checkingOut, verifyingNumber,
            closeClientDetailsModal, requestingCode } = this.props;

        const { fullName, phoneNumber, code } = this.state;

        return (
            <Modal
                size='small'
                style={styles.main}
                open={clientDetailsMode}
            >

                {checkingOut || verifyingNumber || requestingCode ? (
                    <div className='ui active inverted dimmer'>
                        <Loader size='small'>
                            {checkingOut || requestingCode ? 'Requesting...' : 'Verifying...'}
                        </Loader>
                    </div>
                ) : null}

                <Modal.Header
                    style={styles.header}
                >

                </Modal.Header>

                <Modal.Content
                    style={styles.content}
                >

                    <Form
                        style={styles.form}
                        size={'tiny'}
                    >
                        <Form.Field
                            disabled={phoneVerificationMode ? true : false}
                        >
                            <label>Full Name</label>
                            <Input
                                value={fullName}
                                onChange={e => this.setState({fullName: e.target.value})}
                                placeholder='Full Name' />
                        </Form.Field>

                        <Form.Select
                            disabled={phoneVerificationMode ? true : false}
                            onChange={(e, select) => this.setState({gender: select.value})}
                            label='Gender'
                            options={options}
                            placeholder='Gender' />

                        <Form.Field
                            disabled={phoneVerificationMode ? true : false} >
                            <label>Phone Number</label>
                            <MaskInput
                                value={phoneNumber}
                                mask="+233 99 999 9999"
                                onChange={e => this.setState({phoneNumber: e.target.value})}
                                placeholder='+233 54 ... 02' />
                        </Form.Field>

                        <Form.Field
                            disabled={phoneVerificationMode ? true : false}>
                            <Checkbox
                                onChange={(e, checkbox) => this.setState({agreed: checkbox.checked})}
                                label='I agree to the Terms and Conditions' />
                        </Form.Field>

                        {phoneVerificationMode ? (
                            <Form.Field >
                                <label>Code</label>
                                <MaskInput
                                    className='Code__Input'
                                    mask="9999"
                                    onChange={e => this.setState({code: e.target.value})}
                                    value={code}
                                    placeholder='Enter code here...' />
                            </Form.Field>
                        ) : null}

                    </Form>

                </Modal.Content>

                {
                    phoneVerificationMode
                        ? (
                        <Modal.Actions
                            style={styles.actions}
                        >
                            <Button
                                className='Verify__Button'
                                onClick={this.handleVerify}
                                size={'tiny'}>verify</Button>

                            <Button
                                className='RequestCode__Button'
                                onClick={this.handleNewCode}
                                size={'tiny'}>did not receive code.</Button>
                        </Modal.Actions>
                    ) : (
                        <Modal.Actions
                            style={styles.actions}
                        >
                            <Button
                                className='Cancel__Button'
                                onClick={e => closeClientDetailsModal()}
                                size={'tiny'}>cancel</Button>

                            <Button
                                className='Submit__Button'
                                onClick={this.handleSubmit}
                                size={'tiny'}>submit</Button>
                        </Modal.Actions>
                    )
                }

            </Modal>
        );
        
    }
}

ClientDetailsModal.PropTypes = {
    clientDetailsMode: React.PropTypes.bool.isRequired,
    phoneVerificationMode: React.PropTypes.bool.isRequired,
    verifyingNumber: React.PropTypes.bool.isRequired,
    checkingOut: React.PropTypes.bool.isRequired,
    requestingCode: React.PropTypes.bool.isRequired,
    order: React.PropTypes.arrayOf(React.PropTypes.object),
    checkout: React.PropTypes.func.isRequired,
    verifyPhoneNumber: React.PropTypes.func.isRequired,
    closeClientDetailsModal: React.PropTypes.func.isRequired,
    requestNewCode: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    clientDetailsMode: state.clientDetailsMode,
    phoneVerificationMode: state.phoneVerificationMode,
    verifyingNumber: state.verifyingNumber,
    checkingOut: state.checkingOut,
    order: getOrderSelector(state),
    requestingCode: state.requestingCode
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        checkout,
        verifyPhoneNumber,
        closeClientDetailsModal,
        requestNewCode
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetailsModal);