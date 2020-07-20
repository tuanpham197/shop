import React, { Component } from 'react';
import Products from '../components/Products'
import {connect} from 'react-redux';
import Product from '../components/Product'
import * as actions from '../actions/index';
import ManagerProduct from '../components/manager/ManageProduct';
import ProductItem from '../components/manager/ProductItem';


class ManagerProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : []
        }
    }
    onDeleteItem = (id)=>{
        this.props.deleteProduct(id);
    }
    componentDidMount(){
        this.props.fetchProducts();
    }
    render() {
        var {products} = this.props;
        return (
            <ManagerProduct onDeleteItem2={this.onDeleteItem}>
                {products}
            </ManagerProduct>
        );
    }


}

const mapStateToProps = state=>{
    return {
        products : state.products
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return {
        fetchProducts : ()=>{
            dispatch(actions.callApiGetProduct());
        },
        deleteProduct : (id)=>{
            dispatch(actions.deleteProduct(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ManagerProductContainer);