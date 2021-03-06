import React, { Component } from "react";
import { Table, Space, Button, Modal } from "antd";
import {
	PlusCircleOutlined,
	DeleteOutlined,
	EditOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const confirm = Modal.confirm;

class ManagerProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			visible: false,
			state: { visible: false },
			products: [],
		};
	}
	columns = [
		{
			title: "ID",
			dataIndex: "id",
			key: "id",
			//render: (text) => <a>{text}</a>,
		},
		{
			title: "Tên sản phẩm",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Gía",
			dataIndex: "price",
			key: "price",
		},
		{
			title: "Số lượng",
			dataIndex: "inventory",
			key: "inventory",
		},
		{
			title: "Ảnh",
			dataIndex: "image",
			key: "image",
			render: (text,record) => <img style={{ width: 80}} src={record.image}/>
		},
		{
			title: "Action",
			key: "action",
			render: (text, record) => (
				<Space size="middle">
					{/* //{record.name}// onClick={() => this.onUpdateItem(record.id)} */}
					<Link to={`/manage-product/update/${record.id}`}>
						<Button type="primary" >
							<EditOutlined />
							Update
						</Button>
					</Link>

					<Button
						type="primary"
						danger
						onClick={() => this.onDeleteItem(record.id)}
					>
						<DeleteOutlined />
						Delete
					</Button>
				</Space>
			),
		},
	];
	onDeleteItem = (id) => {
		var { products } = this.state;
		this.setState({
			products: []
		})
		confirm({
			title: "Do you want to delete these items?",
			content: "",
			onOk: async () => {
				this.props.onDeleteItem2(id);
			},
			onCancel() {
				console.log("ko xoa nua");
			},
		});

	};
	handleCancel = () => {
		this.setState({ visible: false });
	};

	render() {
		const { visible, loading } = this.state;
		var { children } = this.props;
		this.state.products = children;
		return (
			<div>
				<Link to="/manage-product/add">
					<Button type="primary">
						<PlusCircleOutlined />
						Thêm mới
					</Button>
				</Link>

				
				<Table
					columns={this.columns}
					dataSource={this.state.products}
					rowKey={(record) => record.id}
				/>
			</div>
		);
	}
}

export default ManagerProduct;
