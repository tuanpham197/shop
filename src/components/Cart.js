import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component {
    render() {
        return (
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <tr>
                                <td colSpan="3"></td>
                                <td>
                                    <h4>
                                        <strong>Tổng Tiền</strong>
                                    </h4>
                                </td>
                                <td>
                                    <h4>
                                        <strong>15$</strong>
                                    </h4>
                                </td>
                                <td colSpan="3">
                                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                                        <i className="fa fa-angle-right right"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default Cart;