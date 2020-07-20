import * as types from '../constants/ActionType';
import callApi from '../utils/apiCaller';

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
// export const deleteProductsRequest = (id)=>{
//     return (dispatch)=>{
//         return callApi(`products/${id}`,'DELETE')
//                 .then(res=>{
//                     if(res.status === 200){
//                         console.log(res);
//                         dispatch(deleteProduct(res.data.id));
//                     }
//                 })
//     }    
// }
export const deleteItemCart = (id)=>{
    return {
        type : types.DELETE_ITEM,
        id 
    }
}
// export const fetchProductsRequest = ()=>{
//     return (dispatch)=>{
//         return callApi('products','GET')
//                 .then(res=>{
//                     if(res.status === 200){
//                         dispatch(fetchProducts(res.data));
//                     }
//                 })
//     }    
// }
export const callApiGetProduct = ()=>{
    return {
        type : types.GET_PRODUCTS
    }
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
export const addProduct = (product)=>{
    return {
        type : types.ADD_PRODUCT,
        product
    }
}
export const updateProduct = (id,product)=>{
    return {
        type : types.UPDATE_ITEM_CARD,
        id,
        product
    }
}