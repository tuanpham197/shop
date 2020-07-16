import {combineReducers} from 'redux';
import products from './product'
import carts from './cart'

const myReducers = combineReducers({
    products,
    carts
});

export default myReducers;
