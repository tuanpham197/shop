import * as types from '../constants/ActionType';

var initialState = [
    {
        product : {
            id : 1,
            name : 'Iphone 7',
            image : 'https://vnn-imgs-f.vgcloud.vn/2019/09/11/05/hinh-anh-va-trai-nghiem-dau-tien-ve-iphone-11-11-pro-va-pro-max.jpg',
            description : 'Sản phẩm mới',
            price : 200,
        },
        qty : 2
    },
    {
        product :{
            id : 2,
            name : 'Xiaomi',
            image : 'https://znews-photo.zadn.vn/w660/Uploaded/fsmyy/2018_05_31/3_2.jpg',
            description : 'Sản phẩm mới',
            price : 200,
        },
        qty : 3
    },
    {
        product:{
            id : 3,
            name : 'Samsung',
            image : 'https://cdn.tgdd.vn/Products/Images/42/179530/samsung-galaxy-s10-plus-white-600x600.jpg',
            description : 'Sản phẩm mới',
            price : 200,
        },
        qty : 2
    },
]

const carts = (state = initialState,action)=>{
    switch(action.type){
        case types.ADD_TO_CART:
            var index = state.findIndex(element=> element.product.id === action.product.id);
            console.log(index, " index of product");
            if(index != -1){
                state[index].qty += 1;
            }
            else{
                var cartItem = {
                    product : action.product,
                    qty: action.qty
                }
                state = [...state,cartItem];
               
            }
            return [...state];
        default :
            return [...state];
    }
}

export default carts;