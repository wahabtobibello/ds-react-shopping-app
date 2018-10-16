import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProductItem extends Component {
    state = {
        quantity: this.props.quantity
    }

    handleChangeQuantityButton = (delta) => {
        if (delta === -1 && this.state.quantity === 1) {
            return
        }
        this.setState(
            prevState => ({ quantity: this.state.quantity + delta })
        )
        this.props.updateCart(this.state.quantity + delta)
    }

    handleChangeQuantityTextField = (e) => {
        try {
            if (!e.target.value) throw new Error()
            const num = Number.parseInt(e.target.value)
            this.setState(
                prevState => ({ quantity: num })
            )
            this.props.updateCart(num)
        } catch{
            this.setState(
                prevState => ({ quantity: 1 })
            )
            this.props.updateCart(1)
        }
    }

    render() {
        const { id, title, image, price, removeFromCart } = this.props
        const { quantity } = this.state
        return (
            <tr>
                <th scope="row">
                    <img src="img/icon/close-icon.png" alt="" onClick={removeFromCart} />
                </th>
                <td>
                    <Link to={`/product/${id}`}>
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
                            <button onClick={() => this.handleChangeQuantityButton(-1)} className="reduced items-count" type="button"><i className="icon_minus-06"></i></button>
                            <input type="number" name="qty" id="sst" maxLength="12" value={quantity} onChange={this.handleChangeQuantityTextField} title="Quantity:" className="input-text qty" />
                            <button onClick={() => this.handleChangeQuantityButton(1)} className="increase items-count" type="button"><i className="icon_plus"></i></button>
                        </div>
                    </div>
                </td>
                <td><p>${Number.parseFloat(price).toFixed(2)}</p></td>
            </tr>
        )
    }
}

export default ProductItem