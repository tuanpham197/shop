import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Card,Button ,InputNumber,Layout,Row,Col,notification} from 'antd';
import * as actions from '../actions/index'

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            name:'',
            price : '',
            image : '',
            inventory : '',
            loading : false,
            number : 1
        }
    }
    componentDidMount(){
        this.setState({
            loading : true
        })
        setTimeout(()=>{
            var { products,match} = this.props;
            var product = products.find(ele=>ele.id === match.params.id);
            this.setState({
                id: product.id,
                name : product.name,
                image : product.image,
                price : product.price,
                inventory : product.inventory,
                loading : false
            })
        },2000);
    }
    onChange = (value)=>{
        this.setState({
            number : value
        })
    }
    onClick = (product)=>{
        this.props.addToCart(product,this.state.number);
        this.openNotificationWithIcon('success');
    }
    openNotificationWithIcon = type => {
		notification[type]({
			message: 'Thông báo',
			description:
				'Thêm sản phẩm vào giỏ thành công',
			duration: 1,
		});
	};
    render() {
        return   (
            <Card style={{ width: "100%", marginTop: 16 }} loading={this.state.loading}>
                <h4>Thông tin chi tiết sản phẩm</h4>
                <Row>
                    <Col md={4} lg={4} ></Col>
                    <Col md={14} lg={14}>
                   
                        <div>
                            <p>Name : {this.state.name} </p>
                            <p>Gía : {this.state.price}$</p>
                            <p>Ảnh sản Phẩm</p>
                            <img style={{ width:"100%"}} src={this.state.image} />
                        </div>
                    </Col>
                    <Col md={2} lg={2}>
                        <InputNumber min={1} max={10} defaultValue={1} onChange={this.onChange} />
                        <Button type="primary" onClick={()=> this.onClick(this.state)}>Mua sản phẩm</Button>
                    </Col>
                    <Col md={4} lg={4} ></Col>
                </Row>
                
            </Card>   
        )
    }
}
const mapStateToProps = state =>{
    return {
        products : state.products
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return {
        addToCart : (product,qty)=>{
            dispatch(actions.addToCart(product,qty));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)
