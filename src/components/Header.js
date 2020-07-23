import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
  Link,
  Redirect
  } from "react-router-dom";

class Header extends Component {
  onLogout = ()=>{
    localStorage.clear();
  }
  render() {
    return (
        <header>
          <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">
            <div className="float-left">
              <a data-activates="slide-out" className="button-collapse">
                <i className="fa fa-bars"></i>
              </a>
            </div>

            <div className="breadcrumb-dn mr-auto">
              <ol className="breadcrumb header-breadcrumb">
                <li className="breadcrumb-item">
					        <Link to="/">Trang chủ</Link>
                </li>
                <li className="breadcrumb-item">
					        <Link to="/manage-product">Quản lý sản phẩm</Link>
                </li>
              </ol>
            </div>

            <ul className="nav navbar-nav nav-flex-icons ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-light"
                  id="dropdownMenu1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-user"></i> Tài Khoản
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenu1"
                >
					          <Link className="dropdown-item waves-effect waves-light" to="/cart">Giỏ Hàng</Link>
                    <Link className="dropdown-item waves-effect waves-light" to="/login">Đăng Nhập</Link>
                  <a className="dropdown-item waves-effect waves-light" onClick={()=>this.onLogout()}>
                    Đăng Xuất
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </header>
    );
  }
}

export default Header;
