import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className="footer border-top ptb--40 ptb-md--30">
        <div className="container">
            <div className="row mb--40 mb-md--30">
                <div className="col-lg-4 col-md-6 mb-md--30">
                    <div className="footer-widget">
                        <h3 className="widget-title">About Mirora</h3>
                        <div className="widget-content mb--20">
                            <p>Address: 123 Main Street, Anytown, <br/> CA 12345 - USA.</p>
                            <p>Phone: (012) 800 456 789</p>
                            <p>Fax: (012) 800 456 789</p>
                            <p>Email: Contact@plazathemes.com</p>
                        </div>
                        <ul className="social social-round">
                            <li className="social__item">
                                <a className="social__link"  href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li className="social__item">
                                <a className="social__link"  href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li className="social__item">
                                <a className="social__link"  href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-youtube"></i>
                                </a>
                            </li>
                            <li className="social__item">
                                <a className="social__link"  href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                            <li className="social__item">
                                <a className="social__link"  href="https://plus.google.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-google-plus"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-md--30">
                    <div className="footer-widget">
                        <h3 className="widget-title">Information</h3>
                        <ul className="widget-menu">
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Delivery Information</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Terms &amp; Conditions</a></li>
                            <li><a href="/">Gift Certificates</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-sm--30">
                    <div className="footer-widget">
                        <h3 className="widget-title">Extras</h3>
                        <ul className="widget-menu">
                            <li><a href="/">Brands</a></li>
                            <li><a href="/">Gift Certificates</a></li>
                            <li><a href="/">Affiliate</a></li>
                            <li><a href="/">Specials</a></li>
                            <li><a href="/">My Account</a></li>
                            <li><a href="/">Returns</a></li>
                        </ul>
                    </div>
                </div>
            
            </div>
            <div className="row mb--40 mb-md--30">
                <div className="col-12">
                    <ul className="footer-menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Online Store</a></li>
                        <li><a href="/">Promotion</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms Of Use</a></li>
                        <li><a href="/">Sitemap</a></li>
                        <li><a href="/">Support</a></li>
                        <li><a href="/">Contacts</a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <p className="copyright-text">&copy; Mirora 2021 Made With <i className="fa fa-heart"></i> BY <a href="https://hasthemes.com/">HasThemes</a> </p>
                    <img src="assets/img/others/payment.png" alt="payment"/>
                </div>
            </div>
        </div>
    </footer>
    )
  }
}
