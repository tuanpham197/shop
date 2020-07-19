
import {cancel, fork, put, takeLatest,takeEvery, all ,delay} from 'redux-saga/effects';
import callApi from '../utils/apiCaller';
import * as types from '../constants/ActionType';
import { fetchProducts } from '../actions';

function* fetchProduct(){
    var products = yield callApi('products','GET')
            .then(res=>{
                if(res.status === 200){
                    return res;
                }
            }).catch(err=>{
                return err;
            });
    if(products)
        yield put({type: types.FETCH_PRODUCTS,json:products.data});
}
function* watchAction(){
    yield takeEvery(types.GET_PRODUCTS,fetchProduct);
}
export default function* rootSaga(){
    yield all([
        watchAction()
    ])
}