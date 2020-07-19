import React, { Component } from "react";
import { Table, Space, Button, Modal } from "antd";
import {
  PlusCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import callApi from "../../utils/apiCaller";
const confirm = Modal.confirm;

class ManagerProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      state: { visible: false },
      products: [],
      flag : ""
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
      title: "Số lượng",
      dataIndex: "inventory",
      key: "inventory",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          {/* //{record.name} */}
          <Button type="primary" onClick={() => this.onUpdateItem(record.id)}>
            <EditOutlined />
            Update
          </Button>
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
      products : []
    })
    confirm({
      title: "Do you want to delete these items?",
      content: "",
      onOk : async  ()=> {
        this.props.onDeleteItem2(id);
        // var result = await callApi(`products/${id}`, "DELETE");
        // if (result.status === 200) {
        //   var index = products.findIndex((ele) => ele.id === id);
        //   if (index !== -1) {
        //     products.splice(index,1)
        //     this.setState({
        //       flag : index
        //     });
        //   }
        // }
      },
      onCancel() {
        console.log("ko xoa nua");
      },
    });
    
  };
  findIndex = () => {
    console.log("123");
  };
  onUpdateItem = (id) => {
    console.log(id);
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
        <Link to="/manager-product/add">
          <Button type="primary">
            <PlusCircleOutlined />
            Thêm mới
          </Button>
        </Link>

        <Modal
          title="Modal"
          visible={this.state.visible}
          onOk={this.onProcess}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
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
