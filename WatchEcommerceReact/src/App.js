import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Orders from './pages/Orders';
import BlogDetail from './pages/BlogDetail';


export default class App extends Component {


  render() {
    return (

      <div className="wrapper bg--shaft">
        {/* <Counter/> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ProductDetails/:slug" element={<ProductDetails />} />
          <Route path="/BlogDetail/" element={<BlogDetail />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Orders" element={<Orders/>} />

        </Routes>
        <Footer />
      </div>

    )
  }
}
