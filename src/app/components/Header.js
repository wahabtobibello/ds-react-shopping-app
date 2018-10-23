import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const { cartSize } = props
    return (
        <header className="shop_header_area carousel_menu_area">
            <div className="carousel_menu_inner">
                <div className="container">
                    <nav className="navbar navbar-light bg-light">
                        <Link className="navbar-brand" to="/"><img src="/img/logo.png" alt="" /></Link>
                        <ul className="navbar-nav justify-content-end" style={{display:'flex'}}>
                            <style>{`style + li a:before {content:"${cartSize}"!important}`}</style>
                            <li className="cart_cart"><Link to="/cart"><i className="icon-handbag icons"></i></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header