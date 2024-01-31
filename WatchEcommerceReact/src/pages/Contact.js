import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Contact extends Component {
    render() {
        return (
            <>
                {/* Breadcumb area Start */}
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="page-title">Contact Us</h1>
                                <ul className="breadcrumb justify-content-center">
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li className="current">
                                        <Link to={"/Contact"}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcumb area End */}
                {/* Main Wrapper Start */}
                <div className="main-content-wrapper">
                    {/* Contact Area Start */}
                    <div className="contact-area ptb--80 ptb-md--60">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="heading-secondary border-bottom mb--30">
                                        TELL US YOUR PROJECT
                                    </h2>
                                    <form
                                        className="form form--contact"
                                        id="contact-form"
                                        action="http://htmldemo.net/mirora/mirora/mail.php"
                                    >
                                        <div className="form-row mb--20">
                                            <div className="col-md-2 text-md-right">
                                                <label htmlFor="contact_name">
                                                    Your Name <sup>*</sup>
                                                </label>
                                            </div>
                                            <div className="col-md-10">
                                                <input
                                                    type="text"
                                                    name="contact_name"
                                                    id="contact_name"
                                                    className="form__input form__input--3"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row mb--20">
                                            <div className="col-md-2 text-md-right">
                                                <label htmlFor="contact_name">
                                                    Your Email <sup>*</sup>
                                                </label>
                                            </div>
                                            <div className="col-md-10">
                                                <input
                                                    type="email"
                                                    name="contact_email"
                                                    id="contact_email"
                                                    className="form__input form__input--3"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row mb--20">
                                            <div className="col-md-2 text-md-right">
                                                <label htmlFor="contact_name">
                                                    Enquiry <sup>*</sup>
                                                </label>
                                            </div>
                                            <div className="col-md-10">
                                                <textarea
                                                    name="contact_message"
                                                    id="contact_message"
                                                    className="form__input form__input--3 form__input--textarea"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-12 text-right">
                                                <button type="submit" className="form__submit"
                                                onClick={(e)=>{
                                                    e.preventDefault();
                                                    alert("Your message has been received. We will get in touch with you soon.");
                                                    window.location.reload();
                                                }}>
                                                    Send Email 
                                                </button>
                                            </div>
                                        </div>
                                        <div className="form__output" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact Area End */}
                </div>
            </>

        )
    }
}
