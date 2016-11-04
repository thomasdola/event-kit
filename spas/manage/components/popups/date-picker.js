// import moment from 'moment-range';
const moment = require('moment');

import DateRange from 'react-daterange-picker';
import React from 'react';
import { Popup } from 'semantic-ui-react';

const styles = {
    default: {
        width: 'auto',
        height: '292px',
        padding: 0,
        borderRadius: 0,
        border: 'none'
    }
}

class DatePicker extends React.Component {

    constructor(props){
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(range){
        this.props.onDateSelected(range);
    }

    render(){

        const { open, trigger, value } = this.props;

        return (
            <Popup flowing
                style={styles.default}
                on='click'
                open={open}
                positioning='left center'
                trigger={trigger}
            >

                <DateRange
                    firstOfWeek={1}
                    numberOfCalendars={2}
                    selectionType='range'
                    maximumDate={new Date()}
                    value={value}
                    onSelect={this.handleSelect} />  
            
            </Popup>
        );

    }

};

export default DatePicker;