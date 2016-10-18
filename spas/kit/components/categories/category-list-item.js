import React from 'react';
import { Link } from 'react-router'
import { Card, Image } from 'semantic-ui-react';

class CategoryListItem extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        const { item, onClick } = this.props;
        onClick(item);
    }

    render(){

        const { item: { name, id, img } } = this.props;

        return (
                <Card className='service-category'
                    onClick={this.handleClick}>
                    <Image src={img} />
                    <Card.Content>
                        <Card.Meta>{name}</Card.Meta>
                    </Card.Content>
                </Card>
        );
    }
}

export default CategoryListItem;