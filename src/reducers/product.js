
import * as types from '../constants/ActionType'

var initialState = [
    {
        id : 1,
        name : 'Iphone 7',
        image : 'public/img/iphone.jpg',
        description : 'Sản phẩm mới',
        price : 200,
        inventory : 10
    },
    {
        id : 2,
        name : 'Xiaomi',
        image : 'public/img/xiaomi.jpg',
        description : 'Sản phẩm mới',
        price : 200,
        inventory : 10
    },
    {
        id : 3,
        name : 'Samsung',
        image : 'public/img/images.jpg',
        description : 'Sản phẩm mới',
        price : 200,
        inventory : 10
    },
]

const products = (state = initialState,action)=>{
    switch(action.type){
        case types.FETCH_PRODUCTS:
            console.log(action.products);
            state = action.products
            return [...state];
        case types.DELETE_PRODUCT: 
            var index = state.findIndex(ele=>ele.id === action.id);
            if(index !== -1){
                state.splice(index,1);
            }
            return [...state];
        default :
            return [...state];
    }
}

export default products;