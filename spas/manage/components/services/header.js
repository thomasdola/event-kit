import React from 'react';
import { Menu } from 'semantic-ui-react';

const styles = {
    default: {
        border: 0,
        height: '5%',
        margin: 0
    }
}

export class ServicesHeader extends React.Component{

    constructor(props){
        super(props);
    }


    render(){

        return (
            <Menu
                style={styles.default}
                >
            </Menu>
        )
    }
}


export default ServicesHeader;