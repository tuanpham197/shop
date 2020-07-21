import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Redirect} from 'react-router-dom';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
class Login extends Component {
	constructor(props) {
		super(props);
		this.wrapper = React.createRef();
		this.state = {
			idAuth : false
		}
	}
	
  onFinish = (values) => {
	//console.log("Success:", values);
	if(values.username == "tuan" && values.password == "123"){
		localStorage.setItem("user",JSON.stringify({
			username : values.username,
			password : values.password
		}))
		this.setState({
			idAuth : true
		});
	}
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
	  var user = localStorage.getItem("user");
	  var {location } = this.props;
	if(user){
		return <Redirect 
			to={{
				pathname: "/",
				state :{
					from : location
				}
			}}
		/>
	}else{
		return (
			<div >
				
				<Form
					{...layout}
					name="basic"
					initialValues={{
						remember: true,
					}}
					onFinish={this.onFinish}
					onFinishFailed={this.onFinishFailed}
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[
						{
							required: true,
							message: "Please input your username!",
						},
						]}
					>
						<Input />
					</Form.Item>
	
					<Form.Item
						label="Password"
						name="password"
						rules={[
						{
							required: true,
							message: "Please input your password!",
						},
						]}
					>
						<Input.Password />
					</Form.Item>
	
					<Form.Item {...tailLayout} name="remember" valuePropName="checked">
						<Checkbox>Remember me</Checkbox>
					</Form.Item>
	
					<Form.Item {...tailLayout}>
						<Button  ref={this.wrapper}  type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		  
		);
	}
  }
}

export default Login;
