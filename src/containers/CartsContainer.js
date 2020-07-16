import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';

class CartsContainer extends Component {
    render() {
        var {carts} = this.props;
        return (
            <Cart>
                {this.showCart(carts)}
                {this.totalPrice(carts)}
            </Cart>
        );
    }

    showCart = (carts)=>{
        var result = null;
        if(carts.length > 0){
            result = carts.map((e,i)=>{
                return <CartItem 
                            key={i}
                            cart={e}
                        />
            })
        }
        return result;
    }
    totalPrice = (carts)=>{
        if(carts.length > 0){
            return <CartResult carts={carts} />
        }
    }
}

const mapStateToProps = state =>{
    return{
        carts : state.carts
    }
}
export default connect(mapStateToProps,null)(CartsContainer);