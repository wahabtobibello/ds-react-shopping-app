import React, { Component } from 'react';

class QuantityChangeForm extends Component {
    state = {
        quatity: this.props.quantity
    }

    handleChangeQuantityButton = (delta) => {
        if (delta === -1 && this.state.quantityToOrder === 1) {
            return
        }
        this.setState(prevState => ({ quantityToOrder: this.state.quantityToOrder + delta })
        )
    }
    handleChangeQuantityTextField = (e) => {
        this.setState(prevState => ({ quantityToOrder: e.target.value })
        )
    }

    render() {
        return (
            <div className="custom">
                <button onClick={() => this.handleChangeQuantityButton(-1)} className="reduced items-count" type="button"><i className="icon_minus-06"></i></button>
                <input type="text" name="qty" id="sst" maxLength="12" value={this.state.quantity} title="Quantity:" className="input-text qty" />
                <button onClick={() => this.handleChangeQuantityButton(1)} className="increase items-count" type="button"><i className="icon_plus"></i></button>
            </div>
        )
    }
}

export default QuantityChangeForm;
