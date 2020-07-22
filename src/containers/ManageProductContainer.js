import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import { Table, Space, Button, Modal } from "antd";

import * as actions from '../actions/index';
import ManagerProduct from '../components/manager/ManageProduct';

const confirm = Modal.confirm;


class ManagerProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    onDeleteItem = (id) => {
        
        var {carts} = this.props;
        if(carts){
            var item = carts.find(ele=> ele.product.id === id);
            
            if(item !== undefined){
                confirm({
                    title: "Cảnh báo",
                    content: "Sản phẩm đang được mua",
                    onOk:  () => {
                        this.props.deleteProduct(id);
                    },
                    onCancel() {
                        console.log("ko xoa nua");
                    },
                });
            }else{
                this.props.deleteProduct(id);
            }
        }
    }
    componentDidMount() {
        if (this.props.products === []) {
            this.props.fetchProducts();
        }

    }
    render() {
        var { products } = this.props;
        var user = localStorage.getItem("user");

        if(!user){
            return <Redirect 
			to={{
				pathname: "/login"
			}}
		/>
        }
        return (
            <ManagerProduct onDeleteItem2={this.onDeleteItem}>
                {products}
            </ManagerProduct>
        );
    }


}

const mapStateToProps = state => {
    return {
        products: state.products,
        carts : state.carts
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchProducts: () => {
            dispatch(actions.callApiGetProduct());
        },
        deleteProduct: (id) => {
            dispatch(actions.deleteProduct(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagerProductContainer);