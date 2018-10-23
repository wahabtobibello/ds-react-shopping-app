import React from 'react'

import Product from '../../components/Product'
import Price from './components/Price'

class ProductDetailsPage extends Product {
    state = {
        isLoading: true,
        productImage: "",
        quantity: 1
    }

    handleChangeQuantityButton = (delta) => {
        if (delta === -1 && this.state.quantity === 1) {
            return
        }
        this.setState(
            prevState => ({ quantity: this.state.quantity + delta })
        )
    }

    handleChangeQuantityTextField = (e) => {
        try {
            if (!e.target.value) throw new Error()
            const num = Number.parseInt(e.target.value)
            this.setState(
                prevState => ({ quantity: num })
            )
        } catch{
            this.setState(
                prevState => ({ quantity: 1 })
            )
        }
    }
    render() {
        const { product, addToCart } = this.props
        return (
            <section className="product_details_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3">
                            <div className="product_details_slider">
                                <img src={product.imageUrl} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 my-auto">
                            <div className="product_details_text">
                                <h3>{product.title}</h3>
                                <Price
                                    normalPrice={product.normalPrice}
                                    discountPrice={product.discountPrice}
                                />
                                <div className="quantity">
                                    <div className="custom">
                                        <button onClick={() => this.handleChangeQuantityButton(-1)} className="reduced items-count" type="button"><i className="icon_minus-06"></i></button>
                                        <input type="number" onChange={this.handleChangeQuantityTextField} id="sst" maxLength="12" value={this.state.quantity} title="Quantity:" className="input-text qty" />
                                        <button onClick={() => this.handleChangeQuantityButton(1)} className="increase items-count" type="button"><i className="icon_plus"></i></button>
                                    </div>
                                    <button className="add_cart_btn" onClick={() => addToCart(this.state.quantity)}>add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProductDetailsPage;
