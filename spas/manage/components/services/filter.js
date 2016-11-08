import React from 'react';
import { Segment, Header, Dropdown, Icon, List } from 'semantic-ui-react';

const styles = {
    default: {
        borderRadius: 0,
        boxShadow: 'none',
        borderBottom: 0,
        borderLeft: 0,
        borderTop: 0
    },
    items: {
        height: '94.5%',
        margin: 0,
        borderRadius: 0,
        boxShadow: 'none',
        border: 0
    },
    header: {
        height: '5%',
        border: 0,
        borderRadius: 0,
        margin: 0,
        marginBottom: '.5%',
    }
};

const options = [
  {
    text: 'Partners',
    value: 'Partners',
  },
  {
    text: 'Categories',
    value: 'Categories',
  }
];

export class ServicesFilter extends React.Component {

    constructor(props){
        super(props);
    }


    render(){

        const categoriesList = (
            <List relaxed divided>
                <List.Item >
                    category one
                    <List relaxed animated divided>
                        <List.Item >sub category one</List.Item>
                        <List.Item >sub category two</List.Item>
                    </List>
                </List.Item>
                <List.Item >
                    category two
                    <List relaxed animated divided>
                        <List.Item >sub category one</List.Item>
                        <List.Item >sub category two</List.Item>
                    </List>
                </List.Item>
            </List>
        );

        const partnersList = (
            <List relaxed animated divided>
                <List.Item >partner one</List.Item>
                <List.Item >partner two</List.Item>
            </List>
        );

        return (
            <div>
                <Segment className='Filter__Header' style={styles.header}>
                    <Header as='h4'>
                        <Icon name='grid layout' />
                        <Header.Content>
                        group by
                        {' '}
                        <Dropdown inline 
                            onChange={(name, value) => console.log(value)}
                            options={options} 
                            defaultValue={options[0].value} />
                        </Header.Content>
                    </Header>
                </Segment>
                
                <Segment className='Filter__Items' style={styles.items}>
                    { categoriesList }
                </Segment>
            </div>
        );
    }
}

export default ServicesFilter;