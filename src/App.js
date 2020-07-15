import React from 'react';
import './App.css';
import Header from './components/Header';
import Message from './components/Message';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductsContainer from './containers/ProductsContainer';

function App() {
  return (
    <div>
    {/* <!-- Header --> */}
    <Header />
    <main id="mainContainer">
        <div className="container">
            {/* <!-- Products --> */}
            <ProductsContainer />
            {/* <!-- Message --> */}
            <Message />
            {/* <!-- Cart --> */}
            <Cart />
        </div>
    </main>
	<Footer />
    
</div>
  );
}

export default App;
