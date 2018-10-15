import React, { Component } from 'react';

class ProductDetailsPage extends Component {
    render() {
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
                                <h3>Nike Flex Run Tracksuit</h3>
                                <ul className="p_rating">
                                    <li><a href="/"><i className="fa fa-star"></i></a></li>
                                    <li><a href="/"><i className="fa fa-star"></i></a></li>
                                    <li><a href="/"><i className="fa fa-star"></i></a></li>
                                    <li><a href="/"><i className="fa fa-star"></i></a></li>
                                    <li><a href="/"><i className="fa fa-star"></i></a></li>
                                </ul>
                                <div className="add_review">
                                    <a href="/">5 Reviews</a>
                                    <a href="/">Add your review</a>
                                </div>
                                <h6>Available In <span>Stock</span></h6>
                                <h4>$45.05</h4>
                                <p>Curabitur semper varius lectus sed consequat. Nam accumsan dapibus sem, sed lobortis nisi porta vitae. Ut quam tortor, facilisis nec laoreet consequat, malesuada a massa. Proin pretium tristique leo et imperdiet.</p>
                                <div className="p_color">
                                    <h4 className="p_d_title">color <span>*</span></h4>
                                    <ul className="color_list">
                                        <li><a href="/">*</a></li>
                                        <li><a href="/">*</a></li>
                                        <li><a href="/">*</a></li>
                                        <li><a href="/">*</a></li>
                                        <li><a href="/">*</a></li>
                                        <li><a href="/">*</a></li>
                                    </ul>
                                </div>
                                <div className="p_color">
                                    <h4 className="p_d_title">size <span>*</span></h4>
                                    <select className="selectpicker">
                                        <option>Select your size</option>
                                        <option>Select your size M</option>
                                        <option>Select your size XL</option>
                                    </select>
                                </div>
                                <div className="quantity">
                                    <div className="custom">
                                        <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;" className="reduced items-count" type="button"><i className="icon_minus-06"></i></button>
                                        <input type="text" name="qty" id="sst" maxlength="12" value="01" title="Quantity:" className="input-text qty" />
                                        <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" className="increase items-count" type="button"><i className="icon_plus"></i></button>
                                    </div>
                                    <a className="add_cart_btn" href="/">add to cart</a>
                                </div>
                                <div className="shareing_icon">
                                    <h5>share :</h5>
                                    <ul>
                                        <li><a href="/"><i className="social_facebook"></i></a></li>
                                        <li><a href="/"><i className="social_twitter"></i></a></li>
                                        <li><a href="/"><i className="social_pinterest"></i></a></li>
                                        <li><a href="/"><i className="social_instagram"></i></a></li>
                                        <li><a href="/"><i className="social_youtube"></i></a></li>
                                    </ul>
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
