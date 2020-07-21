import React, { Component } from 'react';
import {Button} from 'antd';
import { Link ,useLocation } from 'react-router-dom';

class Cart extends Component {
    render() {
        var {children} = this.props;
        return (  
            <section className="section">
                {children[0] ? "" : 
                    <>
                        <h1>Giỏ hàng rỗng</h1>
                        <p>Tiếp tục : 
                            <span>
                                <Link to="/">
                                   <Button type="primary">Mua hàng</Button>
                                </Link>
                                 
                            </span>
                        </p>
                    </>
                }
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
                            {children}
                        </tbody>
                    </table>
                </div>
            </section>
        );
        // if(children[0]){
        //     return (  
        //         <section className="section">
        //             <div className="table-responsive">
        //                 <table className="table product-table">
        //                     <thead>
        //                         <tr>
        //                             <th></th>
        //                             <th>Sản Phẩm</th>
        //                             <th>Giá</th>
        //                             <th>Số Lượng</th>
        //                             <th>Tổng Cộng</th>
        //                             <th></th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {children}
        //                     </tbody>
        //                 </table>
        //             </div>
        //         </section>
        //     );
        // }else{
        //     return (
                // <div>
                //     <h1>Giỏ hàng rỗng</h1>
                //     <p>Tiếp tục : 
                //         <span>
                //             <Link to="/">
                //                 <Button type="primary" size='large'>
                //                     Mua hàng
                //                 </Button>
                //             </Link>
                            
                //         </span>
                //     </p>
                // </div>
        //     )
        // }
       
    }
}

export default Cart;