import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { fetchServices } from '../../actions/services';
import { selectCategory } from '../../actions/categories';
import CategoryListItem from './category-list-item';

class CategoryList extends React.Component{
    constructor(props){
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    componentDidMount () {
        // const { categories, fetchServices, filterPriceRange } = this.props;
        // const firtCategoryId = _.head(categories);
        // console.log(categories);
        // fetchServices(firtCategoryId, filterPriceRange);
    }

    componentWillReceiveProps() {
        console.log('cwillrecprop -> ');
        const { categories, selectCategory, selectedCategory } = this.props;
        if(! _.isEmpty(categories) && selectedCategory === null){
            const { fetchServices, filterPriceRange } = this.props;
            const firtCategoryId = _.head(categories)['id'];
            fetchServices(firtCategoryId, filterPriceRange);
            selectCategory(firtCategoryId);
        }
    }
    

    handleOnClick(item){
        const { fetchServices, filterPriceRange, selectedCategory, selectCategory } = this.props;
        if(_.eq(item.id, selectedCategory)) return;
        selectCategory(item.id);
        fetchServices(item.id, filterPriceRange);
        
        console.log(`clicked on category item => ${item.id}`);
    }

    render(){

        const { categories, loadingCategories } = this.props;

        const rendered = categories.map(category => (
            <CategoryListItem key={category.id} item={category} onClick={this.handleOnClick}/>
        ))

        return(
            <div className={`ui segment category-list link cards ${loadingCategories ? 'loading' : ''}`}>
                { rendered }
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        fetchServices,
        selectCategory
    }, dispatch);
}

const mapStateToProps = ({ categories, loadingCategories, filterPriceRange, selectedCategory }, ownProps) => {
    return {
        categories,
        loadingCategories,
        filterPriceRange,
        selectedCategory
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
    