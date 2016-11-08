import React from 'react';
import { Container } from 'semantic-ui-react';

export class Dashboard extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount () {
        console.log('dashboard being mounted');
    }

    componentWillUnmount () {
        console.log('dashboard being unmounted');
    }
    
    

    render(){
        return (
            <Container>
                Dashboard
            </Container>
        );
    }
}


export default Dashboard;