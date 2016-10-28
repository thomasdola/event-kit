import React from 'react';
import { Popup } from 'semantic-ui-react'

export default ({ trigger, name }) => {
    return (
        <Popup
        className={'Category__Name'}
        trigger={trigger}
        content={name}
        size='mini'
        positioning='top center'
        />
    );
};