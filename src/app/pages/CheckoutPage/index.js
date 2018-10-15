import React, { Component } from 'react';

class CheckoutPage extends Component {
    render() {
        return (
            <section className="register_area p_100">
                <div className="container">
                    <div className="register_inner">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="billing_details">
                                    <h2 className="reg_title">Billing Detail</h2>
                                    <form className="billing_inner row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label for="cun">Country <span>*</span></label>
                                                <select className="selectpicker" id="cun">
                                                    <option>United State America (USA)</option>
                                                    <option>Bangladesh (BAN)</option>
                                                    <option>United State America (USA)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label for="name">First Name <span>*</span></label>
                                                <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label for="last">Last Name <span>*</span></label>
                                                <input type="text" className="form-control" id="last" aria-describedby="last" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label for="cname">Company Name <span>*</span></label>
                                                <select className="selectpicker" id="cname">
                                                    <option>United State America (USA)</option>
                                                    <option>Bangladesh (BAN)</option>
                                                    <option>United State America (USA)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label for="address">Address <span>*</span></label>
                                                <input type="text" className="form-control" id="address" aria-describedby="address" />
                                                <input type="text" className="form-control" id="address2" aria-describedby="address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label for="ctown">City / Town <span>*</span></label>
                                                <select className="selectpicker" id="ctown">
                                                    <option>United State America (USA)</option>
                                                    <option>Bangladesh (BAN)</option>
                                                    <option>United State America (USA)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label for="email">Email <span>*</span></label>
                                                <input type="email" className="form-control" id="email" aria-describedby="email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label for="phone">Phone <span>*</span></label>
                                                <input type="text" className="form-control" id="phone" aria-describedby="phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <div className="creat_account">
                                                    <input type="checkbox" id="f-option" name="selector" />
                                                    <label for="f-option">Ship to a different address?</label>
                                                    <div className="check"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label for="cunt">Country <span>*</span></label>
                                                <select className="selectpicker" id="cunt">
                                                    <option>United State America (USA)</option>
                                                    <option>Bangladesh (BAN)</option>
                                                    <option>United State America (USA)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label for="name2">First Name <span>*</span></label>
                                                <input type="text" className="form-control" id="name2" aria-describedby="name2" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label for="last2">Last Name <span>*</span></label>
                                                <input type="text" className="form-control" id="last2" aria-describedby="last2" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label for="company">Company Name <span>*</span></label>
                                                <input type="text" className="form-control" id="company" aria-describedby="company" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label for="city">City / Town <span>*</span></label>
                                                <input type="text" className="form-control" id="city" aria-describedby="city" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label for="order">Order Notes <span>*</span></label>
                                                <textarea className="form-control" id="order" rows="3"></textarea>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="order_box_price">
                                    <h2 className="reg_title">Your Order</h2>
                                    <div className="payment_list">
                                        <div className="price_single_cost">
                                            <h5>Mens Casual Shirt <span>$25.20</span></h5>
                                            <h5>Mens Casual Shirt <span>$25.20</span></h5>
                                            <h4>Cart Subtotal <span>$50.00</span></h4>
                                            <h3><span className="normal_text">Order Totals</span> <span>$50.00</span></h3>
                                        </div>
                                        <div id="accordion" role="tablist" className="price_method">
                                            <div className="card">
                                                <div className="card-header" role="tab" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <a data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne">
                                                            direct bank transfer
                                                    </a>
                                                    </h5>
                                                </div>

                                                <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. Lorem Ipsum has been the industry's.
                                                </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" role="tab" id="headingTwo">
                                                    <h5 className="mb-0">
                                                        <a className="collapsed" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">
                                                            cheque payment
                                                    </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. Lorem Ipsum has been the industry's.
                                                </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" role="tab" id="headingThree">
                                                    <h5 className="mb-0">
                                                        <a className="collapsed" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">
                                                            cash on delivery
                                                    </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. Lorem Ipsum has been the industry's.
                                                </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" role="tab" id="headingfour">
                                                    <h5 className="mb-0">
                                                        <a className="collapsed" data-toggle="collapse" href="#collapsefour" role="button" aria-expanded="false" aria-controls="collapsefour">
                                                            paypal
                                                    </a>
                                                    </h5>
                                                </div>
                                                <div id="collapsefour" className="collapse" role="tabpanel" aria-labelledby="headingfour" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. Lorem Ipsum has been the industry's.
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" value="submit" className="btn subs_btn form-control">place order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CheckoutPage;
