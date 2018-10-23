import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header'
import Footer from './components/Footer'

import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import CatalogPage from "./pages/CatalogPage"
import OrderSuccessPage from './pages/OrderSuccessPage'
import NotFoundPage from './pages/NotFoundPage'

import './styles.css'

class App extends Component {
  state = {
    products: [],
    cart: [
      // {
      // product: {
      //   createdAt: 1539854152083,
      //   discountPrice: 40,
      //   id: "5bc84f482d76221d2033ea30",
      //   imageUrl: "/img/product/l-product-1.jpg",
      //   normalPrice: 45.5,
      //   title: "Womens Libero",
      //   updatedAt: 1539854152083
      // },
      // totalPrice: 40,
      // basePrice: 40,
      // quantity: 1
      // }
    ]
  }

  async componentDidMount() {
    try {
      const { data: products } = await axios.get('http://localhost:1337/api/v1/product')
      this.setState(prevState => {
        return {
          products: [...products]
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  handleAddToCart = (prodIndex, quantity = 1) => {
    this.setState(prevState => {
      const product = prevState.products[prodIndex]
      const cartIndex = prevState.cart.findIndex(item => item.product.id === product.id)

      if (cartIndex === -1) {
        const basePrice = (product.discountPrice ? product.discountPrice : product.normalPrice)
        const totalPrice = quantity * basePrice
        return {
          cart: [
            ...prevState.cart,
            {
              product: prevState.products[prodIndex], basePrice, quantity, totalPrice
            }
          ]
        }
      }

      else {
        const cartItem = prevState.cart[cartIndex]
        const newQuantity = cartItem.quantity + quantity
        const totalPrice = newQuantity * cartItem.basePrice
        return {
          cart: [
            ...prevState.cart.slice(0, cartIndex),
            { ...cartItem, quantity: newQuantity, totalPrice },
            ...prevState.cart.slice(cartIndex + 1)

          ]
        }
      }
    })
  }

  handleUpdateCart = (cartIndex, quantity) => {
    this.setState(prevState => {
      const cartItem = prevState.cart[cartIndex]
      const totalPrice = quantity * cartItem.basePrice
      return {
        cart: [
          ...prevState.cart.slice(0, cartIndex),
          { ...cartItem, quantity, totalPrice },
          ...prevState.cart.slice(cartIndex + 1)

        ]
      }
    })
  }

  handleRemoveFromCart = (index) => {
    this.setState(prevState => ({
      cart: [
        ...prevState.cart.slice(0, index),
        ...prevState.cart.slice(index + 1)
      ]
    }))
  }

  handleOrderFormSubmit = async (formData) => {
    console.log("Placing Order...")
    const {
      firstName,
      lastName,
      address,
      email,
      phoneNumber
    } = formData
    const order = {
      firstName,
      lastName,
      address,
      email,
      phoneNumber,
      cart: [...this.state.cart]
    }
    try {
      const { data: response } = await axios.post("http://localhost:1337/api/v1/order", order)
      if (response.success) {
        this.setState(() => ({ cart: [] }))
      }
      return true
    } catch (e) {
      console.error(e)
      return false
    }
  }

  render() {
    const { products, cart } = this.state
    return (
      <BrowserRouter>
        <div>
          <Header cartSize={cart.length} />
          <Switch>
            <Route exact path="/" render={() =>
              <CatalogPage
                products={products}
                addToCart={this.handleAddToCart}
              />
            } />
            <Route path="/cart" render={() =>
              <CartPage
                cart={cart}
                updateCart={this.handleUpdateCart}
                removeFromCart={this.handleRemoveFromCart}
              />
            } />
            <Route path="/checkout" render={({ history }) =>
              <CheckoutPage
                cart={cart}
                orderFormSubmit={this.handleOrderFormSubmit}
                goToOrderSuccessPage={() => history.push('/order-success')}
              />
            } />
            <Route exact path="/product" render={() =>
              <Redirect
                to="/"
              />
            } />
            <Route path="/product/:productId" render={({ match: { params } }) => {
              let index = products.findIndex(product =>
                product.id === params.productId)
              if (index === -1) {
                return (<Redirect to="/" />)
              }
              let product = products[index]
              return (
                <ProductDetailsPage
                  product={product}
                  addToCart={(quantityToAdd) => {
                    this.handleAddToCart(index, quantityToAdd);
                  }}
                />
              )
            }} />
            <Route path="/order-success" component={OrderSuccessPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
