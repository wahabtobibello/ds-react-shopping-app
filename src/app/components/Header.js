import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const { cartSize } = props
    return (
        <header className="shop_header_area carousel_menu_area">
            <div className="carousel_menu_inner">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/"><img src="/img/logo.png" alt="" /></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>

                        </button>

                        <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                            <ul className="navbar-nav justify-content-end">
                                <style>{`style + li a:before {content:"${cartSize}"!important}`}</style>
                                <li className="cart_cart"><Link to="/cart"><i className="icon-handbag icons"></i></Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header