import React, { Component } from "react";
import {
	Form,
	Input,
	Button,
	Radio,
	Select,
	Cascader,
	DatePicker,
	InputNumber,
	TreeSelect,
	Switch,
} from "antd";
import callApi from '../../utils/apiCaller'

class AddProduct extends Component {
	onFinish = values => {
		var {history} = this.props;
		console.log('Received values of form: ', values);
		callApi('products','POST',{
			name : values.username,
			price : values.price,
			inventory : values.inventory,
			image : values.image
		}).then(res=>{
			history.goBack();
		}).catch(err=>{
			console.log(err);
		})
	};

	render() {
		return (
		<>
		<h1>Thêm mới sản phẩm</h1>
			<Form
				labelCol={{
					span: 4,
				}}
				wrapperCol={{
					span: 14,
				}}
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
				<Input />
			</Form.Item>
			<Form.Item 
				label="Gía"
				name="price"
				rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm' }]}
			>
				<InputNumber />
			</Form.Item>
			<Form.Item 
				label="Số lượng"
				name="inventory"
				rules={[{ required: true, message: 'Vui lòng nhập số lượng sản phẩm' }]}
			>
				<InputNumber />
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
		</>
		);
	}
}

export default AddProduct;
