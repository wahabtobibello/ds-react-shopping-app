import React from 'react'

const Footer = () => {
    return (
        <footer className="footer_area">
            <div className="container">
                <div className="footer_widgets">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-6">
                            <aside className="f_widget f_about_widget">
                                <img src="img/logo.png" alt="" />
                                <p>Persuit is a Premium PSD Template. Best choice for your online store. Let purchase it to
                                enjoy now</p>
                                <h6>Social:</h6>
                                <ul>
                                    <li><a href="/"><i className="social_facebook"></i></a></li>
                                    <li><a href="/"><i className="social_twitter"></i></a></li>
                                    <li><a href="/"><i className="social_pinterest"></i></a></li>
                                    <li><a href="/"><i className="social_instagram"></i></a></li>
                                    <li><a href="/"><i className="social_youtube"></i></a></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <aside className="f_widget link_widget f_info_widget">
                                <div className="f_w_title">
                                    <h3>Information</h3>
                                </div>
                                <ul>
                                    <li><a href="/">About us</a></li>
                                    <li><a href="/">Delivery information</a></li>
                                    <li><a href="/">Terms & Conditions</a></li>
                                    <li><a href="/">Help Center</a></li>
                                    <li><a href="/">Returns & Refunds</a></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <aside className="f_widget link_widget f_service_widget">
                                <div className="f_w_title">
                                    <h3>Customer Service</h3>
                                </div>
                                <ul>
                                    <li><a href="/">My account</a></li>
                                    <li><a href="/">Ordr History</a></li>
                                    <li><a href="/">Wish List</a></li>
                                    <li><a href="/">Newsletter</a></li>
                                    <li><a href="/">Contact Us</a></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <aside className="f_widget link_widget f_extra_widget">
                                <div className="f_w_title">
                                    <h3>Extras</h3>
                                </div>
                                <ul>
                                    <li><a href="/">Brands</a></li>
                                    <li><a href="/">Gift Vouchers</a></li>
                                    <li><a href="/">Affiliates</a></li>
                                    <li><a href="/">Specials</a></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <aside className="f_widget link_widget f_account_widget">
                                <div className="f_w_title">
                                    <h3>My Account</h3>
                                </div>
                                <ul>
                                    <li><a href="/">My account</a></li>
                                    <li><a href="/">Ordr History</a></li>
                                    <li><a href="/">Wish List</a></li>
                                    <li><a href="/">Newsletter</a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
                <div className="footer_copyright">
                    <h5>©
                    {new Date().getFullYear()}
                        Copyright &copy;
                    {new Date().getFullYear()} All rights reserved | This template is
                    made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                    </h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer