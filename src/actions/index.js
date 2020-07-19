import * as types from '../constants/ActionType';

export const addToCart = (product,qty) =>{
    return {
        type : types.ADD_TO_CART,
        product,
        qty
    }
}
export const updateItemCart = (id,act)=>{
    return {
        type : types.UPDATE_ITEM_CARD,
        id,
        act
    }
}
export const deleteItemCart = (id)=>{
    return {
        type : types.DELETE_ITEM,
        id 
    }
}
export const fetchProductsRequest = ()=>{
    
}
export const fetchProducts = (products)=>{
    return {
        type : types.FETCH_PRODUCTS,
        products
    }
}
export const deleteProduct = (id)=>{
    return {
        type : types.DELETE_PRODUCT,
        id
    }
}