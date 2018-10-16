import React from 'react'

const Price = (props) => {
    const { price } = props
    if (price.discount) {
        return (
            <h5><del>${Number.parseFloat(price.normal).toFixed(2)}</del> ${Number.parseFloat(price.discount).toFixed(2)}</h5>
        )
    }
    return (
        <h5>${Number.parseFloat(price.normal).toFixed(2)}</h5>
    )
}

export default Price