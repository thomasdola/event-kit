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
    }

    render(){

        const { open, trigger, value, onDateSelected } = this.props;

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
                    onSelect={range => onDateSelected(range)} />  
            
            </Popup>
        );

    }

};

export default DatePicker;