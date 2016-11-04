import _ from 'lodash';
import Radium from 'radium';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CategoryItem from './category-item';
import { selectCategory } from '../../actions/categories';

const styles = {
    default: {
        margin: 0,
        border: 0,
        borderRadius: 0,
        boxShadow: 'rgba(34, 36, 38, 0.14902) 0px 1px 10px 0px',
        height: '11vh',
        padding: '.6em',
        // zIndex: 30000
    }
};

export class CategoryItemList extends React.Component{
    
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }    

    handleClick({ id }){
        const { selectedCategory, selectCategory } = this.props;
        if(_.eq(id, selectedCategory)) return;
        selectCategory(id);
    }

    handleMouseOut(e){}

    handleMouseOver(e){}

    render(){

        const { categories, loadingCategories } = this.props;

        console.log(this.props.ownProps);

        const rendered = categories.map(category => (
            <CategoryItem 
                key={category.id} 
                item={category} 
                onHoverIn={this.handleMouseOver}
                onHoverOut={this.handleMouseOut}
                onSelect={this.handleClick}/>
        ));

        return(
            <div 
                style ={styles.default}
                className={`ui segment Category__Item__List category-list link cards ${loadingCategories ? 'loading' : ''}`}>
                { rendered }
            </div>
        );
    }
}

CategoryItemList.PropTypes = {
    selectCategory: React.PropTypes.func.isRequired,
    selectedCategory: React.PropTypes.string,
    loadingCategories: React.PropTypes.boolean,
    categories: React.PropTypes.arrayOf(React.PropTypes.object)
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        selectCategory,
    }, dispatch);
}

const mapStateToProps = ({ categories, loadingCategories, filterPriceRange, selectedCategory }, ownProps) => {
    return {
        categories,
        loadingCategories,
        selectedCategory,
        ownProps
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(CategoryItemList));
    