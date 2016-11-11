import _ from 'lodash';
import Radium from 'radium';
import React from 'react';
import { Modal, Button, Container, Segment, Checkbox, Reveal, Label, Card,
    Table, Image, Form, List, Input, Icon, Grid, Dropdown } from 'semantic-ui-react';

import ViewInputField from '../services/view-input-field';

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

const packages = [
    {start: 100, end: 200, amount: 5000}
];


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
                images: {
                    new: [], 
                    old: []
                }
            }
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.handleAdding = this.handleAdding.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleImageRemove = this.handleImageRemove.bind(this);
        this.handleImages = this.handleImages.bind(this);
    }

    componentDidMount() {
        // this.setState({service: this.props.service});
    }


    handleImages(files){

        this.setState({
            service: {
                images: Object.assign({}, this.state.service.images, {new: [...this.state.service.images.new, ...files]})
            }
        });
        
        console.log(this.state.service.images);
        this.cancelEdit();
    }
    

    handleUpdate(){
        console.log('updating...');
    }

    handleChange({fieldKey, value}){
        console.log(`${fieldKey} changed to ${value}`);
    }

    handleEdit(key){
        this.setState({
            edit: true,
            key
        });
        if(key === 'keyForImages') return this.dropzone.open();
    }

    handleImageRemove(index, key){
        console.log(key)
        const images = this.state.service.images;
        const imgs = images[key];
        imgs.splice(index, 1);

        this.setState({
            service: {
                images: Object.assign({}, images, {[key]: imgs})
            }
        })


        console.log('removing ....', index)
    }

    cancelEdit(){
        this.setState({edit: false,  addingPackage: false})
    }

    handleAdding(key){
        this.setState({addingPackage: true, key, edit: true});
    }


    render(){

        const { edit, key, addingPackage, newPackage, service } = this.state;

        const packageElems = packages.map(p => (
            <ViewInputField
                key={Math.random()}
                name={`from ${p.start} to ${p.end} : \u20B5 ${p.amount}`}
                fieldKey={'keyForPackage'}
                placeholders={['start', 'end', 'amount']}
                values={[p.start, p.end, p.amount]}
                packageField
                edit={edit && key === 'keyForPackage'}
                onInputChange={this.handleChange}
                onCancel={this.cancelEdit}
                onUpdate={this.handleUpdate}
                onEdit={this.handleEdit}
                />
        ));

        const serviceView = (
            <Container>


                <ViewInputField
                    name={'Name'}
                    fieldKey={'keyForName'}
                    value={'Service One'}
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
                    value={'Partner One'}
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
                    value={'Category One'}
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
                    value={'Step One'}
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
                    value={1500}
                    placeholder={'service amount...'}
                    showCheckbox
                    amountField
                    ckeckValue={true}
                    edit={edit && key === 'keyForAmount'}
                    onInputChange={this.handleChange}
                    onCheckChange={this.handleChange}
                    onCancel={this.cancelEdit}
                    onUpdate={this.handleUpdate}
                    onEdit={this.handleEdit}
                    />

                

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
                                service.images.old.map(src => (
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
                    this.state.edit 
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
                                content='cancel' />

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

// ServiceModal = Radium(ServiceModal)

export default ServiceModal;