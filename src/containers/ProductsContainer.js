import React, { Component } from 'react';
import Products from '../components/Products'
import {connect} from 'react-redux';
import Product from '../components/Product'

class ProductsContainer extends Component {
    render() {
        var {products} = this.props
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        );
    }
   showProduct(products){
        var result = null;
        if(products.length > 0){
            result = products.map((e,i)=>{
                return <Product 
                            key={i}
                            product={e}
                        />
            })
        }
        return result;
    }
}

const mapStateToProps = state=>{
    return {
        products : state.products
    }
}
export default connect(mapStateToProps,null)(ProductsContainer);