import React from 'react'

import Price from './Price'

const ProductItem = (props) => {
    const { title, imageUrl, price } = props
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="l_product_item">
                <div className="l_p_img">
                    <img className="img-fluid" src={imageUrl} alt="" />
                    <h5 className="new">New</h5>
                </div>
                <div className="l_p_text">
                    <ul>
                        <li className="p_icon"><a href="/"><i className="icon_piechart"></i></a></li>
                        <li><a className="add_cart_btn" href="/">Add To Cart</a></li>
                        <li className="p_icon"><a href="/"><i className="icon_heart_alt"></i></a></li>
                    </ul>
                    <h4>{title}</h4>
                    <Price price={price}/>
                </div>
            </div>
        </div>
    )
}

export default ProductItem