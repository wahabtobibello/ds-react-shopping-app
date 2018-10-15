import React from 'react'

const Price = (props) => {
    const { price } = props
    if (price.discount) {
        return (
            <h5><del>${price.normal.toString()}</del> ${price.discount.toString()}</h5>
        )
    }
    return (
        <h5>${price.normal.toString()}</h5>
    )
}

export default Price