import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import ServicesContent from './content';
import ServicesFilter from './filter';
import ServicesHeader from './header';

const styles = {
    mainGrid: {
        margin: 0, 
        height: '95%',
        paddingTop: 14
    },
    filterGrid: {
        padding: 0
    },
    contentGrid: {
        padding: 0,
        borderLeft: '1px solid rgba(34, 36, 38, 0.15)'
    }
};

export class Services extends React.Component{

    constructor(props){
        super(props);
    }


    render(){

        return (
            <Container>

                <ServicesHeader/>

                <Grid 
                    style={styles.mainGrid}
                    columns={2} padded='vertically'>

                    <Grid.Column 
                        style={styles.filterGrid}
                        width={4}>
                        <ServicesFilter/>
                    </Grid.Column>

                    <Grid.Column 
                        style={styles.contentGrid}
                        width={12}>
                        <ServicesContent/>
                    </Grid.Column>

                </Grid>

                {this.props.children}

            </Container>
        );
    }
}


export default Services;