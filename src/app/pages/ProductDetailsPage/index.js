import React from 'react';

import Product from '../../components/Product'
import Price from './components/Price'

class ProductDetailsPage extends Product {
    state = {
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
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="product_details_slider">
                                <div id="product_slider2" className="rev_slider" data-version="5.3.1.6">
                                    <ul>
                                        <li data-index="rs-28" data-transition="scaledownfromleft" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="1500" data-thumb="img/product/product-details/p-details-tab-1.jpg" data-rotate="0" data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off" data-title="Umbrella" data-param1="September 7, 2015" data-param2="Alfon Much, The Precious Stones" data-description="">

                                            <img src="img/product/product-details/p-details-big-1.jpg" alt="" width="1920" height="1080" data-lazyload="img/product/product-details/p-details-big-1.jpg" data-bgposition="center center" data-bgfit="contain" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />

                                        </li>
                                        <li data-index="rs-303" data-transition="scaledownfromleft" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="1500" data-thumb="img/product/product-details/p-details-tab-2.jpg" data-rotate="0" data-saveperformance="off" data-title="The Dreaming Girl" data-param1="September 6, 2015" data-param2="Lol" data-description="">

                                            <img src="img/product/product-details/p-details-big-1.jpg" alt="" width="1920" height="1080" data-lazyload="img/product/product-details/p-details-big-1.jpg" data-bgposition="center center" data-bgfit="contain" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />

                                        </li>
                                        <li data-index="rs-301" data-transition="scaledownfromleft" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="1500" data-thumb="img/product/product-details/p-details-tab-4.jpg" data-rotate="0" data-saveperformance="off" data-title="Ride my Bike" data-param1="September 4, 2015" data-param2="Why not another Image?" data-description="">

                                            <img src="img/product/product-details/p-details-big-1.jpg" alt="" width="1920" height="1080" data-lazyload="img/product/product-details/p-details-big-1.jpg" data-bgposition="center center" data-bgfit="contain" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />

                                        </li>
                                        <li data-index="rs-302" data-transition="scaledownfromleft" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="1500" data-thumb="img/product/product-details/p-details-tab-3.jpg" data-rotate="0" data-saveperformance="off" data-title="Ride my Bike" data-param1="September 4, 2015" data-param2="Why not another Image?" data-description="">

                                            <img src="img/product/product-details/p-details-big-1.jpg" alt="" width="1920" height="1080" data-lazyload="img/product/product-details/p-details-big-1.jpg" data-bgposition="center center" data-bgfit="contain" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="product_details_text">
                                <h3>{product.title}</h3>
                                <Price price={product.price} />
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
