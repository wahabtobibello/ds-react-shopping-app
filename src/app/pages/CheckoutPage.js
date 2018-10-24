import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class CheckoutPage extends Component {
    state = {
        formData: {
            firstName: "Tobi",
            lastName: "Bello",
            address: "111, Igbosere Road, Lagos Island, Lagos.",
            email: "tobibello001@gmail.com",
            phoneNumber: "2348134202889"
        },
        formInvalid: false
    }

    handleTextInputChange = (stateField, value) => {
        this.setState(prevState => {
            return {
                formData: {
                    [stateField]: value
                }
            }
        })
    }

    handleFormSubmit = async (e) => {

        const { orderFormSubmit, goToOrderSuccessPage } = this.props
        e.preventDefault()
        for (let key in this.state.formData) {
            if (!this.state.formData[key]) {
                this.setState({ formInvalid: true })
                return
            }
        }
        this.setState({ formInvalid: false })

        const response = orderFormSubmit(this.state.formData)
        if (response) {
            goToOrderSuccessPage()
        }
    }

    render() {
        const { cart } = this.props
        const {
            formData: {
                firstName,
                lastName,
                address,
                email,
                phoneNumber },
            formInvalid
        } = this.state
        if (cart.length === 0) {
            return (<Redirect to="/cart" />)
        }
        const totalCost = cart.reduce((total, item) => item.totalPrice + total, 0)
        return (
            <section className="register_area p_100">
                <div className="container">
                    <div className="register_inner">
                        <form className="billing_inner row" onSubmit={this.handleFormSubmit}>
                            <div className="col-lg-7">
                                <div className="billing_details">
                                    <h2 className="reg_title">Billing Detail</h2>
                                    <div className=" row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="name">First Name <span>*</span></label>
                                                <input type="text" className={`form-control${formInvalid && !firstName ? " is-invalid" : ""}`} id="firstName" value={firstName}
                                                    onChange={(e) => this.handleTextInputChange("firstName", e.target.value)} />
                                                <div className="invalid-feedback">Field is required</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="last">Last Name <span>*</span></label>
                                                <input type="text" className={`form-control${formInvalid && !lastName ? " is-invalid" : ""}`} id="last" value={lastName}
                                                    onChange={(e) => this.handleTextInputChange("lastName", e.target.value)} />
                                                <div className="invalid-feedback">Field is required</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="address">Address <span>*</span></label>
                                                <textarea className={`form-control${formInvalid && !address ? " is-invalid" : ""}`} id="order" rows="3" value={address}
                                                    onChange={(e) => this.handleTextInputChange("address", e.target.value)} ></textarea>
                                                <div className="invalid-feedback">Field is required</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="email">Email <span>*</span></label>
                                                <input type="email" className={`form-control${formInvalid && !email ? " is-invalid" : ""}`} id="email" value={email}
                                                    onChange={(e) => this.handleTextInputChange("email", e.target.value)} />
                                                <div className="invalid-feedback">Field is required</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone <span>*</span></label>
                                                <input type="text" className={`form-control${formInvalid && !phoneNumber ? " is-invalid" : ""}`} id="phone" placeholder="23480XXXXXXXX" value={phoneNumber}
                                                    onChange={(e) => this.handleTextInputChange("phoneNumber", e.target.value)} />
                                                <div className="invalid-feedback">Field is required</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="order_box_price">
                                    <h2 className="reg_title">Your Order</h2>
                                    <div className="payment_list">
                                        <div className="price_single_cost">
                                            {cart.map((item) => <h5 key={item.product.id}>{item.quantity} - {item.product.title}<span>${Number.parseFloat(item.totalPrice).toFixed(2)}</span></h5>)}
                                            <h4>Cart Subtotal <span>${Number.parseFloat(totalCost).toFixed(2)}</span></h4>
                                            <h3><span className="normal_text">Order Totals</span> <span>${Number.parseFloat(totalCost).toFixed(2)}</span></h3>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn subs_btn form-control">place order</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default CheckoutPage;
