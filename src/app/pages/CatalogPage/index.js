import React, { Component } from 'react'

import ProductItem from './components/ProductItem'

class CatalogPage extends Component {
    render() {
        const { products, addToCart } = this.props
        if (products.length === 0) {
            return (
                <section className="emty_cart_area p_100">
                    <div className="container">
                        <div className="emty_cart_inner">
                            <i className="icon-clock icons"></i>
                            <h3>Loading...</h3>
                        </div>
                    </div>
                </section>
            )
        }
        return (
            <section className="no_sidebar_2column_area" style={{ paddingTop: 10 }}>
                <div className="container">
                    <div className="two_column_product">
                        <div className="row">
                            {
                                products.map((product, index) => (
                                    <ProductItem
                                        key={product.id}
                                        {...product}
                                        addToCart={() => addToCart(index)}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CatalogPage;
