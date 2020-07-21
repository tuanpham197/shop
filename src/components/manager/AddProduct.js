import React, { Component } from "react";
import {
	Form,
	Input,
	Button,
	InputNumber,
} from "antd";
import * as actions from '../../actions/index';
import {connect} from 'react-redux';
import { Spin } from 'antd';


class AddProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id : '',
			name : '',
			price : '',
			inventory : '',
			action : '',
			image : '',
			loading : false,
			title : ''
		}
	}
	formRef = React.createRef();
	componentDidMount(){
		
		var {match} = this.props;
			if(match){
				this.setState({
					loading : true
				})
				setTimeout(()=>{
					this.setState({
						loading : false,
						title : 'Cập nhật sản phẩm'
					})
					var product = this.findPrduct(match.params.id);
					this.setState({ 
						id : product.id, 
						name : product.name,
						price : product.price,
						inventory : product.inventory,
						image : product.image,	
					})
					this.formRef.current.setFieldsValue({
						username: product.name,
						price : product.price,
						inventory : product.inventory,
						image : product.image,

					});
				},1000);
			}else{
				this.setState({ 
					action : 'add', 
					title : 'Thêm mới sản phẩm'
				})
			}
		
		
		
	}
	findPrduct = (id)=>{
		if(this.props.products){
			var {products} = this.props;
			return products.find(ele=>ele.id === id);
		}
		
	}
	onFinish = values => {
		if(this.state.action === 'add'){
			this.props.addProduct({
				name : values.username,
				price : values.price,
				inventory : values.inventory,
				image : values.image
			});
			this.setState({ 
				loading:true
			});
			setTimeout(()=>{
				var {history} = this.props;
				history.goBack();
			},1000);
			
			// var {history} = this.props;
			// history.goBack();
			// console.log('Received values of form: ', values);
			// callApi('products','POST',{
			// 	name : values.username,
			// 	price : values.price,
			// 	inventory : values.inventory,
			// 	image : values.image
			// }).then(res=>{
				
			// }).catch(err=>{
			// 	console.log(err);
			// })
		}
		else{
			console.log("updating.....");
			this.props.updateProduct(this.state.id,{
				name : values.username,
				price : values.price,
				inventory : values.inventory,
				image : values.image
			});
			this.setState({ 
				loading:true
			})
			setTimeout(()=>{
				var {history} = this.props;
				history.goBack();
			},1000);
		}
	};
	
	render() {
	
		return (
		<>
			<Spin tip="Loading..." spinning={this.state.loading}>
				<h1>{this.state.title}</h1>
				<Form
					labelCol={{
						span: 4,
					}}
					wrapperCol={{
						span: 14,
					}}
					ref={this.formRef}
					onFinish={this.onFinish}
					layout="horizontal"
					initialValues={{
						size: 'large',

					}}
				>
				<Form.Item 
					label="Tên sản phẩm"
					name="username"
					rules={[{ required: true, message: 'Vui lòng điền tên sản phẩm' }]}
				>
					<Input  />
				</Form.Item>
				<Form.Item 
					label="Gía"
					name="price"
					rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm' }]}
				>
					<InputNumber  />
				</Form.Item>
				<Form.Item 
					label="Số lượng"
					name="inventory"
					rules={[{ required: true, message: 'Vui lòng nhập số lượng sản phẩm' }]}
				>
					<InputNumber  />
				</Form.Item>
				<Form.Item 
					label="Ảnh sản phẩm"
					name="image"
					rules={[{ required: true, message: 'Vui lòng nhập ảnh sản phẩm' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item label=" " colon={false}>
					<Button type="primary" htmlType="submit">
					Submit
					</Button>
				</Form.Item>
				</Form>
			</Spin>
		</>
		);
	}
}
const mapStateToProps = state=>{
    return {
        products : state.products
    }
}
const mapDispatchToProps = (dispatch,props)=>{
	return {
		addProduct : (product)=>{
			dispatch(actions.addProduct(product));
		},
		updateProduct : (id,product)=>{
			dispatch(actions.updateProduct(id,product));
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);
