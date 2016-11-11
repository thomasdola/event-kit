import numeral from 'numeral';
import React from 'react';
import { Grid, Segment, Input, Button, Dropdown, Checkbox } from 'semantic-ui-react';
const DropZone = require('react-dropzone');


const styles = {
    default: {
        
    }
};

const ViewField = ({ name, fieldKey, value, checkLabel, onCheckChange, onInputChange, onDropChange, onCancel, onUpdate, 
                    onEdit, edit, showCheckbox, placeholder, placeholders, showDropdown, dropOptions, ckeckValue, imagesField,
                    amountField, packagesField, packageField, values }) => {

    return (
        <Segment basic clearing style={styles.default} key={fieldKey}>

            <Grid columns='equal'>

                {
                    !packagesField && !packageField &&
                    (
                        <Grid.Column  width={imagesField ? 15 : 3}>
                            {`${name}:`} 
                        </Grid.Column>
                    )
                }

                {
                    !packagesField && !packageField && !imagesField &&
                    (
                        <Grid.Column width={12}>
                            <Grid columns='equal'>
                                <Grid.Column  width={showCheckbox ? 10 : 16}>
                                    {
                                        edit || edit && amountField && ckeckValue == true
                                        ? (
                                            <Input size='mini' action>

                                                {
                                                    showDropdown 
                                                    ? (
                                                        <Dropdown 
                                                            placeholder={placeholder} search selection 
                                                            onChange={(e, {value}) => onDropChange({fieldKey, value})}
                                                            options={dropOptions} />
                                                    )
                                                    : (
                                                        <input type='text' 
                                                            placeholder={placeholder} 
                                                            onChange={({target: {value}}) => onInputChange({fieldKey, value})}/>
                                                    )
                                                }

                                                <Button size='mini' compact icon='checkmark' onClick={e => onUpdate()} />
                                            </Input>
                                        )
                                        : `${amountField ? `\u20B5 ${numeral(value).format('0,0.00')}` : value}`
                                    }
                                </Grid.Column>
                                    
                                    {
                                        showCheckbox 
                                        ? (
                                            <Grid.Column  width={6}>
                                                {
                                                    edit
                                                    ? (
                                                        <Checkbox slider 
                                                            label={checkLabel} 
                                                            checked={ckeckValue}
                                                            onChange={(e, value) => onCheckChange({fieldKey, value})}/>
                                                    )
                                                    : null
                                                }
                                            </Grid.Column>
                                        )
                                        : null
                                    }

                            </Grid>
                        </Grid.Column>
                    )
                }

                {
                    packagesField || packageField 
                    ? (
                        <Grid.Column width={15}>
                            {
                                edit 
                                ? (
                                    <Input size='mini' action>
                                        <input 
                                            onChange={({target: {value}}) => onInputChange({fieldKey, value}, placeholders[0])}
                                            type='text' 
                                            value={values[0]}
                                            placeholder={`${placeholders[0]}...`} />
                                        <input 
                                            onChange={({target: {value}}) => onInputChange({fieldKey, value}, placeholders[1])}
                                            type='text' 
                                            value={values[1]}
                                            placeholder={`${placeholders[1]}...`} />
                                        <input 
                                            onChange={({target: {value}}) => onInputChange({fieldKey, value}, placeholders[2])}
                                            type='text' 
                                            value={values[2]}
                                            placeholder={`${placeholders[2]}...`} />
                                            
                                        <Button size='mini' icon='checkmark' onClick={e => onUpdate()} />
                                    </Input>
                                )
                                : name
                            }
                        </Grid.Column>
                    ) : null
                }


                <Grid.Column width={1}>
                    {
                        edit 
                        ? (
                            <Button icon='remove' 
                                size='mini'
                                compact
                                floated='right'
                                onClick={e => onCancel()} />
                        )
                        : (
                            <Button compact 
                                size='mini' 
                                style={styles.button} 
                                onClick={e => onEdit(fieldKey)} 
                                floated='right' 
                                icon={packagesField || imagesField ? 'plus' : 'pencil'} />
                        )
                    }
                </Grid.Column>
            </Grid>                

        </Segment>
    )
};

ViewField.PropTypes = {
    name: React.PropTypes.string.isRequired,
    fieldKey: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    values: React.PropTypes.array.isRequired,
    placeholder: React.PropTypes.string.isRequired,
    placeholders: React.PropTypes.array,
    checkLabel: React.PropTypes.string,
    edit: React.PropTypes.bool.isRequired,
    amountField: React.PropTypes.bool.isRequired,
    packagesField: React.PropTypes.bool.isRequired,
    imagesField: React.PropTypes.bool.isRequired,
    packageField: React.PropTypes.bool.isRequired,
    showCheckbox: React.PropTypes.bool.isRequired,
    showDropdown: React.PropTypes.bool.isRequired,
    onInputChange: React.PropTypes.func.isRequired,
    onDropChange: React.PropTypes.func.isRequired,
    ckeckValue: React.PropTypes.func,
    onCheckChange: React.PropTypes.func,
    onEdit: React.PropTypes.func.isRequired,
    onUpdate: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    dropOptions: React.PropTypes.array,
};

export default ViewField;