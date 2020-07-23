import React, { Component } from 'react';
import Products from '../components/Products'
import {connect} from 'react-redux';
import Product from '../components/Product'
import * as actions from '../actions/index';
import { Spin } from 'antd';

class ProductsContainer extends Component {
    componentDidMount(){
        if(this.props.products === []){
            this.props.fetchProductsRequest();
        }   
    }
    render() {
        var {products} = this.props;
        console.log(this.props);
        return (
            <Spin tip="Loading..." spinning={this.props.loading.loading}>
                <Products>
                    {this.showProduct(products)}
                </Products>
            </Spin>
            
        );
    }
   showProduct(products){
       var {addToCart} = this.props;
        var result = null;
        if(products.length > 0){
            result = products.map((e,i)=>{
                return <Product 
                            key={i}
                            product={e}
                            addToCart = {addToCart}
                            
                        />
            })
        }
        return result;
    }
}

const mapStateToProps = state=>{
    return {
        products : state.products,
        loading : state.loading
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return {
        addToCart : (product,qty)=>{
            dispatch(actions.addToCart(product,qty));
        },
        fetchProductsRequest : ()=>{
            dispatch(actions.callApiGetProduct());
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);