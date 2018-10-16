import React from 'react'

const Price = (props) => {
    const { price } = props
    if (price.discount) {
        return (
            <h4><del>${Number.parseFloat(price.normal).toFixed(2)}</del> ${Number.parseFloat(price.discount).toFixed(2)}</h4>
        )
    }
    return (
        <h4>${Number.parseFloat(price.normal).toFixed(2)}</h4>
    )
}

export default Price