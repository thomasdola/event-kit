import React from 'react';
import { Segment, Header, Dropdown, Icon, List, Accordion } from 'semantic-ui-react';

const styles = {
    default: {
        borderRadius: 0,
        boxShadow: 'none',
        borderBottom: 0,
        borderLeft: 0,
        borderTop: 0
    },
    items: {
        height: '100%',
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

        this.state = {
            activeIndex: 0
        }
    }


    render(){

        const { activeIndex } = this.state;

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

        const panel = (
            <div>
                <Accordion.Title>
                    <Icon name='dropdown' />
                    category one
                </Accordion.Title>
                <Accordion.Content>
                    <List relaxed animated divided>
                        <List.Item >sub category one</List.Item>
                        <List.Item >sub category two</List.Item>
                    </List>
                </Accordion.Content>
            </div>
        );

        const categoriesGroup = (
            <Accordion
                onTitleClick={(e, i) => console.log(i)}
                >

                <Accordion.Title>
                    <Icon name='dropdown' />
                    category one
                </Accordion.Title>
                <Accordion.Content>
                    <List relaxed animated divided>
                        <List.Item >sub category one</List.Item>
                        <List.Item >sub category two</List.Item>
                    </List>
                </Accordion.Content>

            </Accordion>
        );

        const partnersList = (
            <List relaxed animated divided>
                <List.Item >partner one</List.Item>
                <List.Item >partner two</List.Item>
            </List>
        );

        return (
            <Segment className='Filter__Items' style={styles.items}>
                { categoriesGroup }
            </Segment>
        );
    }
}

export default ServicesFilter;