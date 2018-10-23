import React from 'react'

const Price = (props) => {
    const { discountPrice, normalPrice } = props
    if (discountPrice) {
        return (
            <h5><del>${Number.parseFloat(normalPrice).toFixed(2)}</del> ${Number.parseFloat(discountPrice).toFixed(2)}</h5>
        )
    }
    return (
        <h5>${Number.parseFloat(normalPrice).toFixed(2)}</h5>
    )
}

export default Price