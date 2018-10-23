import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NotFoundPage extends Component {

    render() {
        return (
            <section className="emty_cart_area p_100">
                <div className="container">
                    <div className="emty_cart_inner">
                        <i className="icon-check icons"></i>
                        <h3>Order Successful</h3>
                        <Link to="/"><h4>Continue Shopping</h4></Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default NotFoundPage;
