import React, { Component } from 'react';

class CartPage extends Component {
    render() {
        return (
            <section className="shopping_cart_area p_100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cart_items">
                                <h3>Your Cart Items</h3>
                                <div className="table-responsive-md">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <img src="img/icon/close-icon.png" alt="" />
                                                </th>
                                                <td>
                                                    <div className="media">
                                                        <div className="d-flex">
                                                            <img src="img/product/cart-product/cart-3.jpg" alt="" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h4>Round Sunglasses</h4>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><p className="red">$150</p></td>
                                                <td>
                                                    <div className="quantity">
                                                        <h6>Quantity</h6>
                                                        <div className="custom">
                                                            <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;" className="reduced items-count" type="button"><i className="icon_minus-06"></i></button>
                                                            <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" className="input-text qty" />
                                                            <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" className="increase items-count" type="button"><i className="icon_plus"></i></button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><p>$150</p></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <img src="img/icon/close-icon.png" alt="" />
                                                </th>
                                                <td>
                                                    <div className="media">
                                                        <div className="d-flex">
                                                            <img src="img/product/cart-product/cart-4.jpg" alt="" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h4>Adidas Trefoil Black </h4>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><p className="red">$150</p></td>
                                                <td>
                                                    <div className="quantity">
                                                        <h6>Quantity</h6>
                                                        <div className="custom">
                                                            <button onclick="var result = document.getElementById('sst2'); var sst2 = result.value; if( !isNaN( sst2 ) &amp;&amp; sst2 > 0 ) result.value--;return false;" className="reduced items-count" type="button"><i className="icon_minus-06"></i></button>
                                                            <input type="text" name="qty" id="sst2" maxlength="12" value="1" title="Quantity:" className="input-text qty" />
                                                            <button onclick="var result = document.getElementById('sst2'); var sst2 = result.value; if( !isNaN( sst2 )) result.value++;return false;" className="increase items-count" type="button"><i className="icon_plus"></i></button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><p>$250</p></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                </th>
                                            </tr>
                                            <tr className="last">
                                                <th scope="row">
                                                    <img src="img/icon/cart-icon.png" alt="" />
                                                </th>
                                                <td>
                                                    <div className="media">
                                                        <div className="d-flex">
                                                            <h5>Cupon code</h5>
                                                        </div>
                                                        <div className="media-body">
                                                            <input type="text" placeholder="Apply cuopon" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><p className="red"></p></td>
                                                <td>
                                                    <h3>update cart</h3>
                                                </td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart_totals_area">
                                <h4>Cart Totals</h4>
                                <div className="cart_t_list">
                                    <div className="media">
                                        <div className="d-flex">
                                            <h5>Subtotal</h5>
                                        </div>
                                        <div className="media-body">
                                            <h6>$14</h6>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="d-flex">
                                            <h5>Shipping</h5>
                                        </div>
                                        <div className="media-body">
                                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model tex</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="d-flex">

                                        </div>
                                        <div className="media-body">
                                            <select className="selectpicker">
                                                <option>Calculate Shipping</option>
                                                <option>Calculate Shipping</option>
                                                <option>Calculate Shipping</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="total_amount row m0 row_disable">
                                    <div className="float-left">
                                        Total
                                </div>
                                    <div className="float-right">
                                        $400
                                </div>
                                </div>
                            </div>
                            <button type="submit" value="submit" className="btn subs_btn form-control">Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CartPage;
