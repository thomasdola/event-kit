import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import MainMenu from '../menu/main-menu';
import MainSection from '../content/main-section';

const styles = {
    default: {
        backgroundColor: 'white',
        height: '85vh'
    },

    mainGrid: {
        margin: 0,
        height: '100%'
    },

    menuGrid: {
        padding: 0
    },

    contentGrid: {
        padding: 0
    }
};

class Main extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Container
                style={styles.default}
            >

                <Grid 
                    style={styles.mainGrid}
                    columns={2} padded='vertically'>

                    <Grid.Column 
                        style={styles.menuGrid}
                        width={2}>

                        <MainMenu/>
                        
                    </Grid.Column>

                    <Grid.Column 
                        style={styles.contentGrid}
                        width={14}>

                        <MainSection>
                            { this.props.children }
                        </MainSection>

                    </Grid.Column>

                </Grid>
                
            </Container>
        )
    }


}

export default Main;