import React from 'react';
import { Segment, Container } from 'semantic-ui-react';

const styles = {
    default: {
        height: '100%',
        width: '100%',
    }
};

export default class MainSection extends React.Component {

    constructor(props){
        super(props);
    }


    render(){
        return (
            <Container
                style={styles.default}
            >
                
                { this.props.children }

            </Container>
        )
    }
}