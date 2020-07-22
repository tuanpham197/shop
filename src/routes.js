import React from 'react'
import CartsContainer from './containers/CartsContainer'
import ProductsContainer from './containers/ProductsContainer'
import Login from './components/Login';
import ManageProductContainer from './containers/ManageProductContainer';
import AddProduct from './components/manager/AddProduct';
import { Button } from 'antd';
import Message from './components/Message';
import ProductDetail from './components/ProductDetail';

const routes = [
    {
        path : "/",
        exact : true,
        main : ({location})=> <ProductsContainer location={location}/>
    },
    {
        path : "/cart",
        exact : true,
        main : ()=> <CartsContainer />
    },
    {
        path : '/login',
        exact : true,
        main : ({location})=> <Login location={location} />
    },
    {
        path : '/manage-product',
        exact : true,
        main : ()=><ManageProductContainer />
    },
    {
        path : '/manage-product/add',
        exact : true,
        main : ({history})=> <AddProduct history={history}></AddProduct>
    },
    {
        path : '/manage-product/update/:id', 
        exact : true,
        main : ({match,history})=> <AddProduct match={match} history={history}/>
    },
    {
        path : '/product/:id',
        exact : false,
        main : ({match})=><ProductDetail match={match} />
    },
];
export default routes;
