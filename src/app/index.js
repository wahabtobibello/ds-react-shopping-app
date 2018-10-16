import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import AuthPage from "./pages/AuthPage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import CatalogPage from "./pages/CatalogPage"

import './styles.css'

class App extends Component {
  state = {
    products: [
      {
        _id: "1",
        image: {
          url: "img/product/l-product-1.jpg",
          desc: ""
        },
        title: "Womens Libero",
        price: {
          normal: 45.50,
          discount: 40
        }
      },
      {
        _id: "2",
        image: {
          url: "img/product/l-product-2.jpg",
          desc: ""
        },
        title: "Travel Bags",
        price: {
          normal: 130,
          discount: 110
        }
      },
      {
        _id: "3",
        image: {
          url: "img/product/l-product-3.jpg",
          desc: ""
        },
        title: "Summer Dress",
        price: {
          normal: 45.05,
          discount: null
        }
      },
      {
        _id: "4",
        image: {
          url: "img/product/l-product-4.jpg",
          desc: ""
        },
        title: "Nike Shoes",
        price: {
          normal: 130,
          discount: 110
        }
      },
      {
        _id: "5",
        image: {
          url: "img/product/l-product-5.jpg",
          desc: ""
        },
        title: "Oxford Shirt",
        price: {
          normal: 85.50,
          discount: null
        }
      },
      {
        _id: "6",
        image: {
          url: "img/product/l-product-6.jpg",
          desc: ""
        },
        title: "High Heel",
        price: {
          normal: 130.50,
          discount: 110
        }
      },
      {
        _id: "7",
        image: {
          url: "img/product/l-product-7.jpg",
          desc: ""
        },
        title: "Fossil Watch",
        price: {
          normal: 150,
          discount: null
        }
      },
      {
        _id: "8",
        image: {
          url: "img/product/l-product-8.jpg",
          desc: ""
        },
        title: "Ricky Shirt",
        price: {
          normal: 45.05,
          discount: null
        }
      },
      {
        _id: "9",
        image: {
          url: "img/product/four-column/product-1.jpg",
          desc: ""
        },
        title: "Oxford Shoes",
        price: {
          normal: 45.05,
          discount: null
        }
      },
      {
        _id: "10",
        image: {
          url: "img/product/four-column/product-2.jpg",
          desc: ""
        },
        title: "Formal Shirt",
        price: {
          normal: 130,
          discount: 110
        }
      },
      {
        _id: "11",
        image: {
          url: "img/product/four-column/product-3.jpg",
          desc: ""
        },
        title: "Beats HeadPhone",
        price: {
          normal: 33.50,
          discount: null
        }
      },
      {
        _id: "12",
        image: {
          url: "img/product/four-column/product-4.jpg",
          desc: ""
        },
        title: "Wome Bag",
        price: {
          normal: 590.00,
          discount: null
        },
      }
    ],
    cart: []
  }

  handleAddToCart = (prodIndex, quantity = 1) => {
    this.setState(prevState => {
      const product = prevState.products[prodIndex]
      const cartIndex = prevState.cart.findIndex(item => item.product._id === product._id)

      if (cartIndex === -1) {
        const basePrice = (product.price.discount ? product.price.discount : product.price.normal)
        const totalPrice = quantity * basePrice
        return {
          cart: [
            ...prevState.cart,
            {
              product :prevState.products[prodIndex], basePrice, quantity, totalPrice
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

  render() {
    const { products, cart } = this.state
    return (
      <BrowserRouter>
        <div>
          <Header cartSize={cart.length} />
          <Route path="/auth" component={AuthPage} />
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
          <Route path="/checkout" component={CheckoutPage} />
          <Route exact path="/product" render={() =>
            <Redirect
              to="/"
            />
          } />
          <Route path="/product/:productId" render={({ match: { params } }) => {
            let index = products.findIndex(product =>
              product._id === params.productId)
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
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
