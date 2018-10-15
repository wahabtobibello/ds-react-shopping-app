import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import uuid from 'uuid/v4'

import Header from './components/Header'
import Footer from './components/Footer'

import AuthPage from "./pages/AuthPage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import CatalogPage from "./pages/CatalogPage"

class App extends Component {
  state = {
    products: [
      {
        _id: uuid(),
        imageUrl: "img/product/l-product-1.jpg",
        title: "Womens Libero",
        price: {
          normal: 45.50,
          discount: 40
        }
      },
      {
        _id: uuid(),
        imageUrl: "img/product/l-product-2.jpg",
        title: "Travel Bags",
        price: {
          normal: 130,
          discount: 110
        }
      },
      {
        _id: uuid(),
        imageUrl: "img/product/l-product-3.jpg",
        title: "Summer Dress",
        price: {
          normal: 45.05,
          discount: null
        }
      },
      {
        _id: uuid(),
        imageUrl: "img/product/l-product-4.jpg",
        title: "Nike Shoes",
        price: {
          normal: 130,
          discount: 110
        }
      },
      {
        _id: uuid(),
        imageUrl: "img/product/l-product-5.jpg",
        title: "Oxford Shirt",
        price: {
          normal: 85.50,
          discount: null
        }
      },
      {
        _id: uuid(),
        imageUrl: "img/product/l-product-6.jpg",
        title: "High Heel",
        price: {
          normal: 130.50,
          discount: 110
        }
      },
      {
        _id: uuid(),
        imageUrl: "img/product/l-product-7.jpg",
        title: "Fossil Watch",
        price: {
          normal: 150,
          discount: null
        }
      },
      {
        _id: uuid(),
        imageUrl: "img/product/l-product-8.jpg",
        title: "Ricky Shirt",
        price: {
          normal: 45.05,
          discount: null
        }
      },
      {
        _id: uuid(),
        imageUrl: "img/product/four-column/product-1.jpg",
        title: "Oxford Shoes",
        price: {
          normal: 45.05,
          discount: null
        }
      },
      {
        _id: uuid(),
        imageUrl: "img/product/four-column/product-2.jpg",
        title: "Formal Shirt",
        price: {
          normal: 130,
          discount: 110
        }
      },
      {
        _id: uuid(),
        imageUrl: "img/product/four-column/product-3.jpg",
        title: "Beats HeadPhone",
        price: {
          normal: 33.50,
          discount: null
        }
      },
      {
        _id: uuid(),
        imageUrl: "img/product/four-column/product-4.jpg",
        title: "Wome Bag",
        price: {
          normal: 590.00,
          discount: null
        },
      }
    ]
  }

  render() {
    const { products } = this.state
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/auth" component={AuthPage} />
          <Route exact path="/" render={() => <CatalogPage products={products} />} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/product" component={ProductDetailsPage} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
