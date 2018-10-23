import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NotFoundPage extends Component {

    render() {
        return (
            <section className="error_area p_100">
                <div className="container">
                    <div className="error_inner">
                        <h4>404</h4>
                        <h5>Error - Not Found</h5>
                        <p>Sorry We’re not able to find what you looking for</p>
                        <h6>back to <Link to="/">Home</Link></h6>
                    </div>
                </div>
            </section>
        )
    }
}

export default NotFoundPage;
