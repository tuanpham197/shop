import {combineReducers} from 'redux';
import products from './product'
import carts from './cart'
import loading from './loading'

const myReducers = combineReducers({
    products,
    carts,
    loading
});

export default myReducers;
