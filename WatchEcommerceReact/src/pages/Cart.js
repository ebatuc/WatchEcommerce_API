import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { removeFromCart } from '../features/CartSlice';

class Cart extends Component {
    handleRemoveFromCart = (productId) => {
        this.props.removeFromCart({ productId });
    };


    render() {
        return (
            <>
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="page-title">Cart</h1>
                                <ul className="breadcrumb justify-content-center">
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li className="current">
                                        <Link to={"/Cart"}>Cart</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-content-wrapper">
                    <div className="cart-area pt--40 pb--80 pt-md--30 pb-md--60">
                        <div className="container">
                            <div className="cart-wrapper bg--2 mb--80 mb-md--60">
                                <div className="row">
                                    <div className="col-12">
                                        {/* Cart Area Start */}
                                        <form action="#" className="form cart-form">
                                            <div className="cart-table table-content table-responsive">
                                                <table className="table mb--30">
                                                    <thead>
                                                        <tr>
                                                            <th>remove</th>
                                                            <th>Images</th>
                                                            <th>Product</th>
                                                            <th>Unit Price</th>
                                                            <th>Quantity</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.props.cart.map((cartItem) => (
                                                            <tr key={cartItem.product.id}>
                                                                <td>
                                                                    <Link onClick={() => this.handleRemoveFromCart(cartItem.product.id)} className="delete" >
                                                                        <i className="fa fa-times" />
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <Link >
                                                                        <img
                                                                            src={cartItem.product.image1}
                                                                            alt="product"
                                                                        />
                                                                    </Link>
                                                                </td>
                                                                <td className="wide-column">
                                                                    <h3>
                                                                        <strong>{cartItem.product.title}</strong>
                                                                    </h3>
                                                                </td>
                                                                <td className="cart-product-price">
                                                                    <strong>$ {cartItem.product.price}</strong>
                                                                </td>
                                                                <td>
                                                                    <div className="quantity">
                                                                        <input
                                                                            type="number"
                                                                            className="quantity-input"
                                                                            name="qty"
                                                                            id="pro_qty"
                                                                            defaultValue={cartItem.quantity}
                                                                            min={1}
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td className="cart-product-price">
                                                                    <strong>$ {(cartItem.quantity * cartItem.product.price).toFixed(1)}</strong>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </form>
                                        {/* Cart Area End */}
                                    </div>
                                </div>
                            </div>
                            <div className="cart-page-total-wrapper">
                                <div className="row justify-content-end">
                                    <div className="col-xl-6 col-lg-8 col-md-10">
                                        <div className="cart-page-total bg--dark-3">
                                            <h2>Cart Totals</h2>
                                            <div className="cart-calculator-table table-content table-responsive">
                                                <table className="table">
                                                    <tbody>
                                                        <tr className="cart-subtotal">
                                                            <th>Subtotal</th>
                                                            <td>
                                                                <span className="price-ammount">$ {this.props.cart.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.product.price), 0).toFixed(1)}</span>
                                                            </td>
                                                        </tr>
                                                        <tr className="shipping">
                                                            <th>Shipping</th>
                                                            <td>
                                                                <span className="price-ammount">$ {(this.props.cart.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.product.price), 0)) * 0.15.toFixed(1)}</span>
                                                            </td>
                                                        </tr>
                                                        <tr className="cart-total">
                                                            <th>TOTAL</th>
                                                            <td>
                                                                <span className="price-ammount">$ {(this.props.cart.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.product.price), 0)) * 1.15.toFixed(1)}</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <Link to={"/Checkout"} className="btn btn-medium btn-style-3">
                                                Proceed to Checkout
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    };
};



export default connect(mapStateToProps, { removeFromCart })(Cart);