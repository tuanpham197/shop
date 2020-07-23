
import {cancel, fork, put, takeLatest,takeEvery, all ,delay, take} from 'redux-saga/effects';
import callApi from '../utils/apiCaller';
import * as types from '../constants/ActionType';
import { fetchProducts } from '../actions';
import {showLoading,hideLoading} from '../actions/index';

function* fetchProduct(){
    yield put(showLoading());
   
    var products = yield callApi('products','GET')
            .then(res=>{
                if(res.status === 200){
                    return res;
                }
            }).catch(err=>{
                return err;
            });
    if(products){
        yield put({type: types.FETCH_PRODUCTS,json:products.data});
    }
    yield delay(1000);
    yield put(hideLoading());   
}
function* deleteProduct(payload){
    yield callApi(`products/${payload.id}`,'DELETE')
            .catch(err=>{
                console.log(err);
            })
}
function* addProduct(payload){
    yield callApi('products','POST',payload.product);
}
function* updateProduct(payload){
    yield callApi(`products/${payload.id}`,'PUT',payload.product);
}
function* watchAction(){
    yield takeEvery(types.GET_PRODUCTS,fetchProduct);
}

export default function* rootSaga(){
    //fetch dữ liệu khi lần đầu khởi chạy 
    
    yield fork(fetchProduct);

    yield takeLatest(types.ADD_PRODUCT,addProduct);
    yield takeLatest(types.DELETE_PRODUCT,deleteProduct);
    yield takeLatest(types.UPDATE_PRODUCT,updateProduct);

    
    yield all([
        watchAction()
    ])
}