import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { submitOrder, clearOrder } from '../features/OrderSlice';
// import { v4 as uuidv4 } from 'uuid';

class Checkout extends Component {
    state = {
        billing_fname: '',
        billing_lname: '',
        billing_country: '',
        billing_townCity: '',
        billing_district: '',
        billing_zip: '',
        billing_phone: '',
        billing_email: '',
    };

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleFormSubmit = async (e) => {
        // e.preventDefault();
        const personalInfoId = Math.floor(Math.random() * 1000000);
        const personalInfo = {
            id: personalInfoId,
            firstName: this.state.billing_fname,
            lastName: this.state.billing_lname,
            country: this.state.billing_country,
            city: this.state.billing_townCity,
            district: this.state.billing_district,
            zip: this.state.billing_zip,
            phone: this.state.billing_phone,
            email: this.state.billing_email,
        };

        const calculateTotalPrice = (cart) => {
            return cart.reduce((total, item) => {
                return total + (item.quantity * item.product.price) * 1.15.toFixed(1)
            }, 0);
        };

        const totalOrderPrice = calculateTotalPrice(this.props.cart);
        console.log(totalOrderPrice)
        const OrderID = Math.floor(Math.random() * 1000000);

        const order = {
            id: OrderID,
            // orderDate: new Date().toLocaleDateString('en-GB'),
            personalInfoId: personalInfoId,
            totalPrice:totalOrderPrice
        };

        const orderedProducts = {
            products: this.props.cart.map((item) => ({
                orderId: OrderID,
                productId: item.product.id,
                quantity: item.quantity
            }))
        }

        try {
            for (const product of orderedProducts.products) {
                console.log(product);
                await axios.post('https://localhost:7025/api/OrderedProducts', product);
            }
            await axios.post('https://localhost:7025/api/Personal', personalInfo);
            await this.props.submitOrder(order);
            console.log('Personel Info and Order successfully saved');
            this.props.clearOrder();
            window.location.reload();
        } catch (error) {
            console.error('Error saving the order:', error);
        }
    };




    render() {
        return (
            <>
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="page-title">Checkout</h1>
                                <ul className="breadcrumb justify-content-center">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="current">
                                        <Link to="/Checkout">Checkout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-content-wrapper">
                    <div className="checkout-area pt--40 pb--80 pt-md--30 pb-md--60">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    {/* Checkout Area Start */}
                                    <div className="checkout-wrapper bg--2">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="checkout-title">
                                                    <h2>Billing Details</h2>
                                                </div>
                                                <div className="checkout-form">
                                                    <form onSubmit={this.handleFormSubmit} className="form">
                                                        <div className="form-row mb--30">
                                                            <div className="form__group col-md-6 mb-sm--30">
                                                                <label name="billing_fname" className="form__label">
                                                                    First Name
                                                                    <span>*</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="billing_fname"
                                                                    id="billing_fname"
                                                                    className="form__input form__input--2"
                                                                    onChange={this.handleInputChange}
                                                                />
                                                            </div>
                                                            <div className="form__group col-md-6">
                                                                <label htmlFor="billing_lname" className="form__label">
                                                                    Last Name
                                                                    <span>*</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="billing_lname"
                                                                    id="billing_lname"
                                                                    className="form__input form__input--2"
                                                                    onChange={this.handleInputChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30">
                                                            <div className="form__group col-12">
                                                                <label
                                                                    htmlFor="billing_country"
                                                                    className="form__label"
                                                                >
                                                                    Country
                                                                </label>
                                                                <select
                                                                    id="billing_country"
                                                                    name="billing_country"
                                                                    className="form__input form__input--2 nice-select"
                                                                    onChange={this.handleInputChange}
                                                                >
                                                                    <option defaultValue="">Select a country…</option>
                                                                    <option value="AF">Afghanistan</option>
                                                                    <option value="AL">Albania</option>
                                                                    <option value="DZ">Algeria</option>
                                                                    <option value="AR">Argentina</option>
                                                                    <option value="AM">Armenia</option>
                                                                    <option value="AU">Australia</option>
                                                                    <option value="AT">Austria</option>
                                                                    <option value="AZ">Azerbaijan</option>
                                                                    <option value="BH">Bahrain</option>
                                                                    <option value="BD" >Bangladesh</option>
                                                                    <option value="BD">Brazil</option>
                                                                    <option value="CN">China</option>
                                                                    <option value="EG">Egypt</option>
                                                                    <option value="FR">France</option>
                                                                    <option value="DE">Germany</option>
                                                                    <option value="HK">Hong Kong</option>
                                                                    <option value="HU">Hungary</option>
                                                                    <option value="IS">Iceland</option>
                                                                    <option value="IN">India</option>
                                                                    <option value="ID">Indonesia</option>
                                                                    <option value="IR">Iran</option>
                                                                    <option value="IQ">Iraq</option>
                                                                    <option value="IE">Ireland</option>
                                                                    <option value="IT">Italy</option>
                                                                    <option value="JP">Japan</option>
                                                                    <option value="KW">Kuwait</option>
                                                                    <option value="MY">Malaysia</option>
                                                                    <option value="MV">Maldives</option>
                                                                    <option value="MX">Mexico</option>
                                                                    <option value="MC">Monaco</option>
                                                                    <option value="NP">Nepal</option>
                                                                    <option value="RU">Russia</option>
                                                                    <option value="KR">South Korea</option>
                                                                    <option value="SS">South Sudan</option>
                                                                    <option value="ES">Spain</option>
                                                                    <option value="LK">Sri Lanka</option>
                                                                    <option value="SD">Sudan</option>
                                                                    <option value="SZ">Swaziland</option>
                                                                    <option value="SE">Sweden</option>
                                                                    <option value="CH">Switzerland</option>
                                                                    <option value="TN">Tunisia</option>
                                                                    <option value="TR">Turkey</option>
                                                                    <option value="UA">Ukraine</option>
                                                                    <option value="AE">United Arab Emirates</option>
                                                                    <option value="GB">United Kingdom (UK)</option>
                                                                    <option value="US">United States (US)</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="form-row mb--30">
                                                            <div className="form__group col-12">
                                                                <label htmlFor="billing_city" className="form__label">
                                                                    Town/City
                                                                    <span>*</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="billing_townCity"
                                                                    id="billing_city"
                                                                    className="form__input form__input--2"
                                                                    onChange={this.handleInputChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30">
                                                            <div className="form__group col-12">
                                                                <label htmlFor="billing_city" className="form__label">
                                                                    District
                                                                    <span>*</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="billing_district"
                                                                    id="billing_district"
                                                                    className="form__input form__input--2"
                                                                    onChange={this.handleInputChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30">
                                                            <div className="form__group col-12">
                                                                <label htmlFor="billing_zip" className="form__label">
                                                                    Post/Zip Code
                                                                    <span>*</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="billing_zip"
                                                                    id="billing_zip"
                                                                    className="form__input form__input--2"
                                                                    onChange={this.handleInputChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30">
                                                            <div className="form__group col-md-6 mb-sm--30">
                                                                <label htmlFor="billing_phone" className="form__label">
                                                                    Phone
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="billing_phone"
                                                                    id="billing_phone"
                                                                    className="form__input form__input--2"
                                                                    onChange={this.handleInputChange}
                                                                />
                                                            </div>
                                                            <div className="form__group col-md-6">
                                                                <label htmlFor="billing_email" className="form__label">
                                                                    Email Address
                                                                    <span>*</span>
                                                                </label>
                                                                <input
                                                                    type="email"
                                                                    name="billing_email"
                                                                    id="billing_email"
                                                                    className="form__input form__input--2"
                                                                    onChange={this.handleInputChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30"></div>
                                                        <div className="payment-btn-group">
                                                            <button type="submit" className="btn btn-style-3">
                                                                Place Order
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mt-md--30">
                                                <div className="order-details">
                                                    <h3 className="heading-tertiary">Your Order</h3>
                                                    <div className="order-table table-content table-responsive mb--30">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Product</th>
                                                                    <th>Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {this.props.cart.map((cartItem) => (
                                                                    <tr key={cartItem.product.id}>
                                                                        <td>
                                                                            {cartItem.product.title} <strong>x{cartItem.quantity}</strong>
                                                                        </td>
                                                                        <td>$ {(cartItem.product.price) * (cartItem.quantity).toFixed(1)}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                            <tfoot>
                                                                <tr className="cart-subtotal">
                                                                    <th>Cart Subtotal</th>
                                                                    <td>$ {this.props.cart.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.product.price), 0).toFixed(2)}</td>
                                                                </tr>
                                                                <tr className="shipping">
                                                                    <th>Shipping</th>
                                                                    <td>$ {(this.props.cart.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.product.price), 0)) * 0.15.toFixed(1)}</td>
                                                                </tr>
                                                                <tr className="order-total">
                                                                    <th>Order Total</th>
                                                                    <td>
                                                                        <span className="order-total-ammount">$ {(this.props.cart.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.product.price), 0)) * 1.15.toFixed(1)}</span>
                                                                    </td>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Checkout Area End */}
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

export default connect(mapStateToProps, { clearOrder, submitOrder })(Checkout);