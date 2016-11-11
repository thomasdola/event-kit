import React from 'react';
import { Segment } from 'semantic-ui-react';

import Service from './service';

const styles = {};

const items = [
    {
        img: '/images/cow.jpg',
        amount: 2000,
        name: 'service one',
        fixed: true,
        id: 2548
    },
    {
        img: '/images/cow.jpg',
        amount: 2000,
        name: 'service one',
        fixed: true,
        id: 2544
    }
]

export class ServicesContent extends React.Component{

    constructor(props){
        super(props)

    }


    render(){

        const services = items.map(item => (
            <Service key={item.id} item={item}/>
        ));

        return (
            <Segment basic>
                { services }
            </Segment>
        )
    }
}


export default ServicesContent;