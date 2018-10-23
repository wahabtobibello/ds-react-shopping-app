import React from 'react'

const Price = (props) => {
    const { discountPrice, normalPrice } = props
    if (discountPrice) {
        return (
            <h4><del>${Number.parseFloat(normalPrice).toFixed(2)}</del>    <span style={{ color: "tomato" }}>${Number.parseFloat(discountPrice).toFixed(2)}</span></h4>
        )
    }
    return (
        <h4 className="red">${Number.parseFloat(normalPrice).toFixed(2)}</h4>
    )
}

export default Price