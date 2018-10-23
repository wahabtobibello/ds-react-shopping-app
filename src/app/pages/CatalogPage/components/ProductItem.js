import React from 'react'
import { Link } from 'react-router-dom'

import Price from './Price'

const ProductItem = (props) => {
    const { id, title, imageUrl, normalPrice, discountPrice, addToCart } = props
    return (

        <div className="col-lg-3 col-sm-6">

            <div className="l_product_item">
                <Link to={`/product/${id}`}>
                    <div className="l_p_img">
                        <img className="img-fluid" src={imageUrl} alt="" />
                    </div>
                </Link>
                <div className="l_p_text">
                    <ul>
                        {/* <li className="p_icon"><a href="/"><i className="icon_piechart"></i></a></li> */}
                        <li><button className="add_cart_btn" onClick={addToCart}>Add To Cart</button></li>
                        {/* <li className="p_icon"><a href="/"><i className="icon_heart_alt"></i></a></li> */}
                    </ul>
                    <h4>{title}</h4>
                    <Price
                        normalPrice={normalPrice}
                        discountPrice={discountPrice} />
                </div>
            </div>
        </div>
    )
}

export default ProductItem