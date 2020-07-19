import React, { Component } from 'react';
import Products from '../components/Products'
import {connect} from 'react-redux';
import Product from '../components/Product'
import * as actions from '../actions/index';
import ManagerProduct from '../components/manager/ManageProduct';
import ProductItem from '../components/manager/ProductItem';
import callApi from '../utils/apiCaller';

class ManagerProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : []
        }
    }
    onDeleteItem = (id)=>{
        callApi(`products/${id}`,'DELETE')
        .then(res=>{
            if(res.status === 200){
                this.props.deleteProduct(id);
            }
        }).catch(err=>{
            console.log(err);
        })
    }
    componentDidMount(){
        callApi('products','GET')
        .then(res=>{
            this.props.fetchProducts(res.data);
        })
    }
    render() {
        var {products} = this.props;

        return (
            <ManagerProduct test={`123`} onDeleteItem2={this.onDeleteItem}>
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
        fetchProducts : (products)=>{
            dispatch(actions.fetchProducts(products));
        },
        deleteProduct : (id)=>{
            dispatch(actions.deleteProduct(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ManagerProductContainer);