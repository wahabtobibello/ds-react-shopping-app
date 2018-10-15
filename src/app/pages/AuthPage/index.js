import React, { Component } from 'react'

class AuthPage extends Component {
    render() {
        return (
            <section className="login_area p_100">
                <div className="container">
                    <div className="login_inner">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="login_title">
                                    <h2>log in your account</h2>
                                    <p>Log in to your account to discovery all great features in this template.</p>
                                </div>
                                <form className="login_form row">
                                    <div className="col-lg-12 form-group">
                                        <input className="form-control" type="text" placeholder="Name" />
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <input className="form-control" type="text" placeholder="User Name" />
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <div className="creat_account">
                                            <input type="checkbox" id="f-option" name="selector" />
                                            <label for="f-option">Keep me logged in</label>
                                            <div className="check"></div>
                                        </div>
                                        <h4>Forgot your password ?</h4>
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <button type="submit" value="submit" className="btn update_btn form-control">Login</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-8">
                                <div className="login_title">
                                    <h2>create account</h2>
                                    <p>Follow the steps below to create email account enjoy the great mail.com emailing experience. Vivamus tempus risus vel felis condimentum, non vehicula est iaculis.</p>
                                </div>
                                <form className="login_form row">
                                    <div className="col-lg-6 form-group">
                                        <input className="form-control" type="text" placeholder="Name" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <input className="form-control" type="email" placeholder="Email" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <input className="form-control" type="text" placeholder="User Name" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <input className="form-control" type="text" placeholder="Phone" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <input className="form-control" type="password" placeholder="Password" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <input className="form-control" type="password" placeholder="Re-Password" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <button type="submit" value="submit" className="btn subs_btn form-control">register now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AuthPage