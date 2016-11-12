import _ from 'lodash';
import Radium from 'radium';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Container, Segment, Checkbox, Reveal, Label, Card,
    Table, Image, Form, List, Input, Icon, Grid, Dropdown } from 'semantic-ui-react';

import ViewInputField from '../services/view-input-field';
import { goBackToServices } from '../../actions/services';
import { compareObj } from '../../helpers';

const DropZone = require('react-dropzone');


const styles = {
    default: {
        ':hover':{}
    },
    name: {
        ':hover':{}
    },
    button: {
        ':hover': {
            background: 'yellow'
        }
    },
    image: {
        button: {
            top: '50%',
            left: '40%',
            padding: 0,
        }
    }
};

const categoryOptions = [
    {text: 'category one', value: 'category one'},
    {text: 'category two', value: 'category two'},
];

const checklistOptions = [
    {text: 'step one', value: 'step one'},
    {text: 'step two', value: 'step two'}
];

const service = {
    name: 'service one',
    category: 'wedding',
    checklist: 'step one',
    partner: 'partner one',
    amount: 200,
    fixed: false,
    packages: [
        {start: 0, end: 10, amount: 200}
    ],
    images: [
        '/images/cow.jpg',
        '/images/cow.jpg',
        '/images/cow.jpg'
    ]
}


class ServiceModal extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            edit: false,
            addingPackage: false,
            key: null,
            newPackage: {
                start: '',
                end: '',
                amount: ''
            },

            service: {
                name: '',
                category: '',
                checklist: '',
                partner: '',
                amount: '',
                fixed: null,
                packages: [],
                images: {
                    new: [], 
                    old: []
                }
            },

            serviceBuffer: {}
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleAdding = this.handleAdding.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleImageRemove = this.handleImageRemove.bind(this);
        this.handleImages = this.handleImages.bind(this);
    }

    componentDidMount() {
        console.log('call again')
        const local = Object.assign({}, service, {images: {old: service.images, new: []}});
        this.setState({service: Object.assign({}, local)});
        this.setState({serviceBuffer: _.cloneDeep(local)});
    }


    handleImages(files){

        const pS = this.state.service;
        const images = Object.assign({}, pS.images, {new: [...pS.images.new, ...files]});
        const nS = Object.assign({}, pS, {images});

        this.setState({
            service: nS
        });
        
        console.log(this.state.service);
        this.cancelEdit();
    }
    

    handleUpdate(fieldKey){
        if(this.getKey(fieldKey) === 'packages'){
            const { newPackage, service} = this.state;
            if(newPackage.start && newPackage.end && newPackage.amount){
                const packages = [...service.packages, newPackage];
                const nS = Object.assign({}, service, {packages});
                return this.setState({service: nS});
            }else{
                return ;
            }
        }

        this.cancelEdit();
    }

    handleChange({fieldKey, value}, extraKey){
        let key = this.getKey(fieldKey);
        // console.log(fieldKey, value);

        if(!key) return ;

        if(key === 'packages'){
            const nPs = Object.assign({}, this.state.newPackage, {[extraKey]: value});
            return this.setState({newPackage: nPs});
        }
        
        const pS = this.state.service;
        const nS = Object.assign({}, pS, {[key]: value});
        this.setState({service: nS});

        if(key === 'fixed') return this.cancelEdit();
    }

    getKey(fieldKey){
        switch(fieldKey){
            case 'keyForName':
                return 'name';
            case 'keyForPackages':
                return 'packages'
            case 'keyForPackage':
                return 'package'
            case 'keyForPartner':
                return 'partner';
            case 'keyForCategory':
                return 'category'
            case 'keyForChecklist': 
                return 'checklist';
            case 'keyForAmount':
                return 'amount';
            case 'keyForAmountFixed':
                return 'fixed'
            default: 
                return null;
        }
    }

    handleEdit(key){
        console.log(key);
        this.setState({
            edit: true,
            key
        });
        if(key === 'keyForImages') return this.dropzone.open();
    }

    handleImageRemove(index, key){
        const pS = this.state.service;
        const oImages = pS.images;
        const oKImages = oImages[key];
        oKImages.splice(index, 1);
        const nImages = Object.assign({}, oImages, {[key]: oKImages})
        const nS = Object.assign({}, pS, {images: nImages});

        this.setState({
            service: nS
        });
    }

    cancelEdit(){
        this.setState({edit: false});
    }

    handleAdding(key){
        this.setState({addingPackage: true, key, edit: true});
    }

    handleClose(){
        this.props.goBackToServices();
    }

    handleCancel(){
        this.setState({service: _.cloneDeep(this.state.serviceBuffer)});
    }


    render(){

        const { edit, key, addingPackage, newPackage, service, serviceBuffer } = this.state;

        console.log('cp in render', compareObj(service, serviceBuffer));

        const packageElems = service.packages.map((p, index) => {
            const fieldKey = Math.random();
            return (<ViewInputField
                key={fieldKey}
                name={`from ${p.start} to ${p.end} : \u20B5 ${p.amount}`}
                fieldKey={`keyForPackage_${index}`}
                placeholders={['start', 'end', 'amount']}
                values={[p.start, p.end, p.amount]}
                packageField
                edit={edit && key === `keyForPackage_${index}`}
                onInputChange={this.handleChange}
                onCancel={this.cancelEdit}
                onUpdate={this.handleUpdate}
                onEdit={this.handleEdit}
                />)
        });

        const serviceView = (
            <Container>


                <ViewInputField
                    name={'Name'}
                    fieldKey={'keyForName'}
                    value={service.name}
                    placeholder={'service name...'}
                    edit={edit && key === 'keyForName'}
                    onInputChange={this.handleChange}
                    onCancel={this.cancelEdit}
                    onUpdate={this.handleUpdate}
                    onEdit={this.handleEdit}
                    />
                
                <ViewInputField
                    name={'Partner'}
                    fieldKey={'keyForPartner'}
                    value={service.partner}
                    placeholder={'partner name...'}
                    edit={edit && key === 'keyForPartner'}
                    onInputChange={this.handleChange}
                    onCancel={this.cancelEdit}
                    onUpdate={this.handleUpdate}
                    onEdit={this.handleEdit}
                    />

                <ViewInputField
                    name={'Category'}
                    fieldKey={'keyForCategory'}
                    value={service.category}
                    placeholder={'choose checklist...'}
                    showDropdown
                    dropOptions={categoryOptions}
                    edit={edit && key === 'keyForCategory'}
                    onDropChange={this.handleChange}
                    onCancel={this.cancelEdit}
                    onUpdate={this.handleUpdate}
                    onEdit={this.handleEdit}
                    />

                <ViewInputField
                    name={'Checklist'}
                    fieldKey={'keyForChecklist'}
                    value={service.checklist}
                    placeholder={'choose checklist...'}
                    showDropdown
                    dropOptions={checklistOptions}
                    edit={edit && key === 'keyForChecklist'}
                    onDropChange={this.handleChange}
                    onCancel={this.cancelEdit}
                    onUpdate={this.handleUpdate}
                    onEdit={this.handleEdit}
                    />
                
                <ViewInputField
                    name={'Amount'}
                    checkLabel={'Fixed?'}
                    fieldKey={'keyForAmount'}
                    value={service.amount}
                    placeholder={'service amount...'}
                    showCheckbox
                    checkboxKey={'keyForAmountFixed'}
                    amountField
                    ckeckValue={service.fixed}
                    edit={edit && key === 'keyForAmount'}
                    onInputChange={this.handleChange}
                    onCheckChange={this.handleChange}
                    onCancel={this.cancelEdit}
                    onUpdate={this.handleUpdate}
                    onEdit={this.handleEdit}
                    />

                

                
                {
                    service.fixed 
                    ? null
                    : (
                        <Segment.Group>

                            <ViewInputField
                                name={'Packages'}
                                checkLabel={'Fixed?'}
                                fieldKey={'keyForPackages'}
                                placeholders={['start', 'end', 'amount']}
                                values={[newPackage.start, newPackage.end, newPackage.amount]}
                                packagesField
                                edit={edit && key === 'keyForPackages'}
                                onInputChange={this.handleChange}
                                onCancel={this.cancelEdit}
                                onUpdate={this.handleUpdate}
                                onEdit={this.handleEdit}
                                />
                            
                            <Segment.Group>
                            
                                { packageElems }

                            </Segment.Group>

                        </Segment.Group>
                    )
                }

                
                <Segment.Group>
                    <ViewInputField
                        name={'Images'}
                        fieldKey={'keyForImages'}
                        imagesField
                        edit={edit && key === 'keyForImages'}
                        onCancel={this.cancelEdit}
                        onEdit={this.handleEdit}
                        />

                    <Segment.Group>
                        <Image.Group size='small'>

                            {
                                service.images.old.map((src, index) => (
                                    <Image key={Math.random()}
                                        label={{ as: 'a', size: 'mini', icon: 'trash', corner: 'left', onClick: e => this.handleImageRemove(index, 'old') }}
                                        src={src} />
                                ))
                            }

                            {
                                service.images.new.map(({preview}, index) => (
                                    <Image key={Math.random()}
                                        label={{ as: 'a', size: 'mini', icon: 'trash', corner: 'left', onClick: e => this.handleImageRemove(index, 'new') }}
                                        src={preview} />
                                ))
                            }
                                
                        </Image.Group>
                    </Segment.Group>
                </Segment.Group>

                <DropZone 
                    ref={(node) => { this.dropzone = node; }} 
                    style={{display: 'none'}} 
                    onDrop={this.handleImages} 
                    onFileDialogCancel={this.cancelEdit}/>    
                    
            </Container>
        );

        const serviceEdit = '';

        return (
            <Modal size={'small'} open={true}>
                <Modal.Header>
                    Delete Your Account
                </Modal.Header>
                <Modal.Content>
                    {serviceView}
                </Modal.Content>

                {
                    compareObj(service, serviceBuffer) 
                    ? (
                        <Modal.Actions>
                            <Button compact
                                onClick={this.handleClose} 
                                size='mini' 
                                content='close' />
                            
                            <Button compact 
                                onClick={this.handleEdit}
                                size='mini' 
                                content='edit' />
                        </Modal.Actions>
                    )
                    : (
                        <Modal.Actions>
                            <Button compact 
                                onClick={this.handleCancel}
                                size='mini' 
                                content='reset' />

                            <Button compact 
                                onClick={this.handleUpdate}
                                size='mini' 
                                content='update' />
                        </Modal.Actions>
                    )
                }

            </Modal>
        )
    }
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({
        goBackToServices
    }, dispatch);

const mapStateToProps = ({ service }) => ({
    service
})

// ServiceModal = Radium(ServiceModal)

export default connect(null, mapDispatchToProps)(ServiceModal);