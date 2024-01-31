import React, { Component } from 'react'

export default class ProductDetails extends Component {
    render() {
        return (
            <div className="main-content-wrapper">
                <div className="single-products-area section-padding section-md-padding">
                    <div className="container">
                        {/* Single Product Start */}
                        <section className="mirora-single-product pb--80 pb-md--60">
                            <div className="row">
                                <div className="col-lg-6 d-flex flex-row-reverse align-items-center align-items-sm-start mb--30">
                                    {/* Tab Content Start */}
                                    <div
                                        className="tab-content product-details-thumb-large vertical vertical-reverse"
                                        id="myTabContent-3"
                                    >
                                        <div className="tab-pane fade show active" id="product-large-one">
                                            <div className="product-details-img easyzoom">
                                                <a
                                                    className="popup-btn"
                                                    href="assets/img/products/3-900x900.jpg"
                                                >
                                                    <img
                                                        src="assets/img/products/3-900x900.jpg"
                                                        alt="product"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="product-large-two">
                                            <div className="product-details-img easyzoom">
                                                <a
                                                    className="popup-btn"
                                                    href="assets/img/products/4-900x900.jpg"
                                                >
                                                    <img
                                                        src="assets/img/products/4-900x900.jpg"
                                                        alt="product"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="product-large-three">
                                            <div className="product-details-img easyzoom">
                                                <a
                                                    className="popup-btn"
                                                    href="assets/img/products/5-900x900.jpg"
                                                >
                                                    <img
                                                        src="assets/img/products/5-900x900.jpg"
                                                        alt="product"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="product-large-four">
                                            <div className="product-details-img easyzoom">
                                                <a
                                                    className="popup-btn"
                                                    href="assets/img/products/6-900x900.jpg"
                                                >
                                                    <img
                                                        src="assets/img/products/6-900x900.jpg"
                                                        alt="product"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="product-large-five">
                                            <div className="product-details-img easyzoom">
                                                <a
                                                    className="popup-btn"
                                                    href="assets/img/products/10-900x900.jpg"
                                                >
                                                    <img
                                                        src="assets/img/products/10-900x900.jpg"
                                                        alt="product"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Tab Content End */}
                                    {/* Product Thumbnail Carousel Start */}
                                    <div className="product-details-thumbnail vertical">
                                        <div
                                            className="thumb-menu product-details-thumb-menu nav-horizontal-center"
                                            id="thumbmenu-vertical"
                                        >
                                            <div className="thumb-menu-item">
                                                <a
                                                    href="#product-large-one"
                                                    data-bs-toggle="tab"
                                                    className="nav-link active"
                                                >
                                                    <img
                                                        src="assets/img/products/3-450x450.jpg"
                                                        alt="product thumb"
                                                    />
                                                </a>
                                            </div>
                                            <div className="thumb-menu-item">
                                                <a
                                                    href="#product-large-two"
                                                    data-bs-toggle="tab"
                                                    className="nav-link"
                                                >
                                                    <img
                                                        src="assets/img/products/4-450x450.jpg"
                                                        alt="product thumb"
                                                    />
                                                </a>
                                            </div>
                                            <div className="thumb-menu-item">
                                                <a
                                                    href="#product-large-three"
                                                    data-bs-toggle="tab"
                                                    className="nav-link"
                                                >
                                                    <img
                                                        src="assets/img/products/5-450x450.jpg"
                                                        alt="product thumb"
                                                    />
                                                </a>
                                            </div>
                                            <div className="thumb-menu-item">
                                                <a
                                                    href="#product-large-four"
                                                    data-bs-toggle="tab"
                                                    className="nav-link"
                                                >
                                                    <img
                                                        src="assets/img/products/6-450x450.jpg"
                                                        alt="product thumb"
                                                    />
                                                </a>
                                            </div>
                                            <div className="thumb-menu-item">
                                                <a
                                                    href="#product-large-five"
                                                    data-bs-toggle="tab"
                                                    className="nav-link"
                                                >
                                                    <img
                                                        src="assets/img/products/10-450x450.jpg"
                                                        alt="product thumb"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Thumbnail Carousel End */}
                                </div>
                                <div className="col-lg-6">
                                    {/* Single Product Content Start */}
                                    <div className="product-details-content">
                                        <div className="product-details-top">
                                            <h2 className="product-details-name">Aliquam lobortis</h2>
                                            <div className="ratings-wrap">
                                                <div className="ratings">
                                                    <i className="fa fa-star rated" />
                                                    <i className="fa fa-star rated" />
                                                    <i className="fa fa-star rated" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                            <ul className="product-details-list list-unstyled">
                                                <li>
                                                    Brand: <a href="/">Apple</a>
                                                </li>
                                                <li>Product Code: Watches</li>
                                                <li>Availability: In Stock</li>
                                            </ul>
                                            <div className="product-details-price-wrapper">
                                                <span className="money">$550.00</span>
                                            </div>
                                        </div>
                                        <div className="product-details-bottom">
                                            <p className="product-details-availability">
                                                <i className="fa fa-check-circle" />
                                                200 In Stock
                                            </p>
                                            <div className="product-details-action-wrapper mb--20">
                                                <div className="product-details-action-top d-flex align-items-center mb--20">
                                                    <div className="quantity">
                                                        <span>Qty: </span>
                                                        <input
                                                            type="number"
                                                            className="quantity-input"
                                                            name="qty"
                                                            id="pro_qty"
                                                            defaultValue={1}
                                                            min={1}
                                                        />
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-medium btn-style-2 add-to-cart"
                                                    >
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="product-details-action-bottom">
                                                    <a href="wishlist.html">+Add to wishlist</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Product Content End */}
                                </div>
                            </div>
                        </section>
                        {/* Single Product End */}
                        {/* Single Product Tab Start */}
                        <section className="product-details-tab bg--dark-4 ptb--80 ptb-md--60">
                            <div className="row">
                                <div className="col-12">
                                    <ul
                                        className="product-details-tab-head nav nav-tab"
                                        id="singleProductTab"
                                        role="tablist"
                                    >
                                        <li className="nav-item product-details-tab-item">
                                            <a
                                                className="nav-link product-details-tab-link active"
                                                id="nav-desc-tab"
                                                data-bs-toggle="tab"
                                                href="#nav-desc"
                                                role="tab"
                                                aria-controls="nav-desc"
                                                aria-selected="true"
                                            >
                                                Description
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="product-details-tab-content tab-content">
                                        <div
                                            className="tab-pane fade show active"
                                            id="nav-desc"
                                            role="tabpanel"
                                            aria-labelledby="nav-desc-tab"
                                        >
                                            <p className="product-details-description">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                                fringilla augue nec est tristique auctor. Donec non est at
                                                libero vulputate rutrum. Morbi ornare lectus quis justo
                                                gravida semper. Nulla tellus mi, vulputate adipiscing cursus
                                                eu, suscipit id nulla. Donec a neque libero.
                                            </p>
                                            <p className="product-details-description">
                                                Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
                                                feugiat sem, quis fermentum turpis eros eget velit. Donec ac
                                                tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
                                                eget sagittis vulputate, sapien libero hendrerit est, sed
                                                commodo augue nisi non neque. Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Sed tempor, lorem et placerat
                                                vestibulum, metus nisi posuere nisl, in accumsan elit odio
                                                quis mi.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Single Product Tab End */}
                    </div>
                </div>
            </div>

        )
    }
}
