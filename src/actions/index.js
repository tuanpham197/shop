import * as types from '../constants/ActionType';

export const addToCart = (product,qty) =>{
    return {
        type : types.ADD_TO_CART,
        product,
        qty
    }
}