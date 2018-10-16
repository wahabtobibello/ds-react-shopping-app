import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import ProductItem from './components/ProductItem'

class CartPage extends Component {
    render() {
        const { cart, updateCart, removeFromCart } = this.props
        const totalCost = cart.reduce((total, item) => item.totalPrice + total, 0)
        if (cart.length === 0) {
            return (
                <section className="emty_cart_area p_100">
                    <div className="container">
                        <div className="emty_cart_inner">
                            <i className="icon-handbag icons"></i>
                            <h3>Your Cart is Empty</h3>
                            <h4>back to <Link to="/">shopping</Link></h4>
                        </div>
                    </div>
                </section>
            )
        }
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
                                            {cart.map((item, index) => (
                                                <ProductItem
                                                    key={item._id}
                                                    id={item._id}
                                                    title={item.title}
                                                    price={item.totalPrice}
                                                    image={item.image}
                                                    quantity={item.quantity}
                                                    updateCart={(quantity) => updateCart(index, quantity)}
                                                    removeFromCart={() => removeFromCart(index)}
                                                />))}
                                            <tr>
                                                <th scope="row">
                                                </th>
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
                                            <h6>${totalCost}</h6>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="d-flex">
                                            <h5>Shipping</h5>
                                        </div>
                                        <div className="media-body">
                                            <p>Free Shipping</p>
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
                                        ${totalCost}
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
