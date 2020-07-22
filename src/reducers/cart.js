import * as types from '../constants/ActionType';

var initialState = [
    
]

const carts = (state = initialState,action)=>{
    switch(action.type){
        case types.ADD_TO_CART:
            var index = state.findIndex(element=> element.product.id === action.product.id);

            if(index !== -1){
                state[index].qty += action.qty;
            }
            else{
                var cartItem = {
                    product : action.product,
                    qty: action.qty
                }
                state = [...state,cartItem];
            }
            return [...state];
        case types.UPDATE_ITEM_CARD:
            const item = state.find(element => element.product.id === action.id);
            if(action.act === "decrement"){         
                if(item.qty > 1)
                    item.qty -= 1;
            }
            if(action.act === "increment"){
                item.qty += 1;
            }
            return [...state];
        case types.DELETE_ITEM:
            state = state.filter(element=> element.product.id !== action.id);
            return [...state];
        default :
            return [...state];
    }
}

export default carts;