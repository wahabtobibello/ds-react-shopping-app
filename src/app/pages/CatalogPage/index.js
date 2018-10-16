import React, { Component } from 'react'

import ProductItem from './components/ProductItem'

class CatalogPage extends Component {
    render() {
        const { products, addToCart } = this.props
        return (
            <section className="no_sidebar_2column_area" style={{paddingTop: 10}}>
                <div className="container">
                    <div className="showing_fillter">
                        <div className="row m0">
                            <div className="first_fillter">
                                <h4>Showing 1 to 12 of 30 total</h4>
                            </div>
                            <div className="secand_fillter">
                                <h4>SORT BY :</h4>
                                <select className="selectpicker">
                                    <option>Name</option>
                                    <option>Name 2</option>
                                    <option>Name 3</option>
                                </select>
                            </div>
                            <div className="third_fillter">
                                <h4>Show : </h4>
                                <select className="selectpicker">
                                    <option>09</option>
                                    <option>10</option>
                                    <option>10</option>
                                </select>
                            </div>
                            <div className="four_fillter">
                                <h4>View</h4>
                                <a className="active" href="/"><i className="icon_grid-2x2"></i></a>
                                <a href="/"><i className="icon_grid-3x3"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="two_column_product">
                        <div className="row">
                            {
                                products.map((product, index) => (
                                    <ProductItem
                                        key={product._id}
                                        id={product._id}
                                        title={product.title}
                                        price={product.price}
                                        image={product.image}
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
