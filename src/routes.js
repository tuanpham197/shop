import React from 'react'
import CartsContainer from './containers/CartsContainer'
import ProductsContainer from './containers/ProductsContainer'

const routes = [
    {
        path : "/",
        exact : true,
        main : ()=> <ProductsContainer />
    },
    {
        path : "/cart",
        exact : true,
        main : ()=> <CartsContainer />
    },
];
export default routes;
