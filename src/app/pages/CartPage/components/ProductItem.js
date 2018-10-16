import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = (props) => {
    const { title, image, price, removeFromCart } = props
    return (
        <tr>
            <th scope="row">
                <img src="img/icon/close-icon.png" alt="" onClick={removeFromCart} />
            </th>
            <td>
                <Link to="/product">
                    <div className="media">
                        <div className="d-flex">
                            <img src={image.url} alt={image.desc} width="102px" height="123px" />
                        </div>
                        <div className="media-body">
                            <h4>{title}</h4>
                        </div>
                    </div>
                </Link>
            </td>
            <td><p className="red">${Number.parseFloat(price).toFixed(2)}</p></td>
            <td>
                <div className="quantity">
                    <h6>Quantity</h6>
                    <div className="custom">
                        <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;" className="reduced items-count" type="button"><i className="icon_minus-06"></i></button>
                        <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" className="input-text qty" />
                        <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" className="increase items-count" type="button"><i className="icon_plus"></i></button>
                    </div>
                </div>
            </td>
            <td><p>${Number.parseFloat(price).toFixed(2)}</p></td>
        </tr>
    )
}

export default ProductItem