import React, { Component } from 'react'
import './App.css';
import 'antd/dist/antd.less'
import Header from './components/Header';
import Message from './components/Message';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartsContainer from './containers/CartsContainer';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import routes from './routes';

class App extends Component {
	showContentMenu = (routes)=>{
        var result = null;
        if(routes.length > 0){
            result = routes.map((ele,index)=>{
                return <Route
                        key={index}
                        path={ele.path}
                        exact = {ele.exact}
                        component={ele.main}
                    >

                </Route>
            })
        }
        return result;
    }
	render() {
		console.log(routes);
		return (
			<Router>
			`	<div>
				{/* <!-- Header --> */}
					<Header />
					<main id="mainContainer">
						<div className="container">
							<Switch>
								{this.showContentMenu(routes)}
							</Switch>
						</div>
					</main>
					<Footer />

				</div>
			</Router>
		)
	}
}
export default App;
