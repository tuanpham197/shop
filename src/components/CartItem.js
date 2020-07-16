import React, { Component } from "react";

class CartItem extends Component {

	updateItemCart = (id, act) => {
		this.props.updateItem(id, act);
	}
	deleteItemCart = (id) => {
		//console.log("pswpTap");
		this.props.deleteItem(id);
	}
	render() {
		var { cart } = this.props;
		return (
			<tr>
				<th scope="row">
					<img
						src={cart.product.image}
						alt=""
						className="img-fluid z-depth-0"
					/>
				</th>

				<td>
					<h5>

						<strong>{cart.product.name}</strong>
					</h5>
				</td>
				<td>{cart.product.price}</td>
				<td className="center-on-small-only">
					<span className="qty">{cart.qty} </span>
					<div className="btn-group radio-group" data-toggle="buttons">
						<button className="btn btn-sm btn-primary
                                            btn-rounded waves-effect waves-light" onClick={() => this.updateItemCart(cart.product.id, "decrement")}>-</button>
						<button className="btn btn-sm btn-primary
                                            btn-rounded waves-effect waves-light" onClick={() => this.updateItemCart(cart.product.id, "increment")}>+</button>
					</div>
				</td>
				<td>{cart.product.price * cart.qty}</td>
				<td>
					<button
						type="button"
						className="btn btn-sm btn-primary waves-effect waves-light"
						data-toggle="tooltip"
						data-placement="top"
						title=""
						data-original-title="Remove item"
						onClick={() => this.deleteItemCart(cart.product.id)}
					>
						X
          			</button>
				</td>
			</tr>
		);
	}
}

export default CartItem;
