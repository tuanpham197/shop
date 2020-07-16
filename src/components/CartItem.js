import React, { Component } from "react";

class CartItem extends Component {
  render() {
    var {cart} = this.props;
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
            <label
              className="btn btn-sm btn-primary
                                            btn-rounded waves-effect waves-light"
            >
              <a>—</a>
            </label>
            <label
              className="btn btn-sm btn-primary
                                            btn-rounded waves-effect waves-light"
            >
              <a>+</a>
            </label>
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
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
