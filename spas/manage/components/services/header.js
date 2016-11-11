import React from 'react';
import { Menu, Header, Dropdown, Icon } from 'semantic-ui-react';

const styles = {
    default: {
        border: 0,
        height: '5%',
        margin: 0
    }
};


const options = [
  {
    text: 'Everything',
    value: 'everything',
  },{
    text: 'Partners',
    value: 'partners',
  },
  {
    text: 'Categories',
    value: 'categories'
  }
];

export class ServicesHeader extends React.Component{

    constructor(props){
        super(props);

        this.handleNewService = this.handleNewService.bind(this);
    }

    handleNewService(){

    }


    render(){

        return (
            <Menu borderless
                style={styles.default}
                >

                <Menu.Item header>Services: 2015464</Menu.Item>

                <Menu.Item>
                    <Header as='h5'>
                        <Icon name='block layout' />
                        <Header.Content>
                        group by :
                        {' '}
                        <Dropdown inline 
                            onChange={(name, {value}) => console.log(value)}
                            options={options} 
                            defaultValue={options[0].value} />
                        </Header.Content>
                    </Header>
                </Menu.Item>

                <Menu.Item 
                    className='New__Service__Button'
                    name='mostPopular' 
                    position='right'
                    onClick={this.handleNewService} />

            </Menu>
        )
    }
}


export default ServicesHeader;