import React, { Component } from "react";
import { Button, notification, Space } from 'antd';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

class Product extends Component {

	addToCart = (product) => {
		this.props.addToCart(product, 1);
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
		var { product } = this.props;

		return (
			<div className="col-lg-4 col-md-6 mb-r">
				<div className="card text-center card-cascade narrower">
					<div className="view overlay hm-white-slight z-depth-1">
						<img
							src={product.image}
							className="img-fluid"
							alt=""
						/>
						<a>
							<div className="mask waves-light waves-effect waves-light"></div>
						</a>
					</div>
					<div className="card-body">
						<h4 className="card-title">
							<strong>
								<Link to={`product/${product.id}`}>
									{product.name}
								</Link>
							</strong>
						</h4>
						<ul className="rating">
							<li>
								<i className="fa fa-star"></i>
							</li>
							<li>
								<i className="fa fa-star"></i>
							</li>
							<li>
								<i className="fa fa-star"></i>
							</li>
							<li>
								<i className="fa fa-star"></i>
							</li>
							<li>
								<i className="fa fa-star"></i>
							</li>
						</ul>
						<p className="card-text">{product.description}</p>
						<div className="card-footer">
							<span className="left">{product.price}$</span>
							<span className="right">
								<a
									className="btn-floating blue-gradient"
									data-toggle="tooltip"
									data-placement="top"
									title=""
									data-original-title="Add to Cart"
									onClick={() => this.addToCart(product)}
								>
									<i className="fa fa-shopping-cart"></i>
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	}).isRequired
}

export default Product;
