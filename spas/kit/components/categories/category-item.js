import Radium from 'radium';
import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import NamePopup from '../popups/category-name-popup';

const styles = {
    category: {
        margin: '0 1em',
        width: '90px',
        borderRadius: 0,
        boxShadow: '0px 0px 3px 0px rgba(175, 175, 175, 0.50)',
        // border: '1px solid rgba(34, 36, 38, 0.15)',
        ':hover':{

        },
        image: {
            height: '90px'
        }
    },
    popup: {
        // background: 
    }
};

class CategoryItem extends React.Component{
    
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleHoverIn = this.handleHoverIn.bind(this);
        this.handleHoverOut = this.handleHoverOut.bind(this);
    }

    handleClick(e){
        const { item, onSelect } = this.props;
        onSelect(item);
    }

    handleHoverOut(e){
        const { onHoverOut } = this.props;
        onHoverOut();
    }

    handleHoverIn(e){
        const { onHoverIn } = this.props;
        onHoverIn();
    }

    render(){

        const { item: { name, img } } = this.props;

        const card = (
            <Card style={styles.category}
                className='service-category Category__Item'
                onClick={this.handleClick}
                onMouseOut={this.handleHoverOut}
                onMouseOver={this.handleHoverIn}>
                <Image style={styles.category.image} className="Category__Icon" src={img} />
            </Card>
        );

        return (
            <NamePopup
                style={styles.popup}
                trigger={card}
                name={name}
                />
        );
    }
}

CategoryItem.PropTypes = {
    item: React.PropTypes.object.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    onHoverIn: React.PropTypes.func.isRequired,
    onHoverOut: React.PropTypes.func.isRequired
};

export default Radium(CategoryItem);