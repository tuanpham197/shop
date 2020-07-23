
import * as types from '../constants/ActionType'

var initialState = [
  
]

const products = (state = initialState,action)=>{
    switch(action.type){
        case types.ADD_PRODUCT: 
            var arrId = state.map(ele=>{
                return ele.id;
            });
            var maxId = Math.max(...arrId);

            state.push({...action.product,id:maxId+1+""});
            return [...state];
        case types.GET_PRODUCTS:
            return [...state];
        case types.FETCH_PRODUCTS:
            state = action.json;
            return [...state];
        case types.UPDATE_PRODUCT: 
            var product = state.find(ele=> ele.id === action.id);
            product.name = action.product.name;
            product.price = action.product.price;
            product.inventory = action.product.inventory;
            product.image = action.product.image;
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