import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Slider extends Component {
  render() {
    return (
        <div className="slider-area">
        <div className="homepage-slider">
            {/* Single Slide Start */}
            <div
                className="single-slider content-v-center"
                style={{
                    backgroundImage: "url(assets/img/slider/slider1-mirora2-1920x634.jpg)"
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slider-content">
                                <h5 data-animation="rollIn" data-duration=".8s" data-delay=".5s">
                                    Exclusive Offer -20% Off This Week
                                </h5>
                                <h1
                                    data-animation="fadeInDown"
                                    data-duration=".8s"
                                    data-delay=".2s"
                                >
                                    H-Vault Classico
                                </h1>
                                <p
                                    className="mb--30 mb-sm--20"
                                    data-animation="fadeInDown"
                                    data-duration=".8s"
                                    data-delay=".2s"
                                >
                                    H-Vault Watches Are A Lot Like Classic American Muscle Cars -
                                    Expect For The American Part That Is.{" "}
                                </p>
                                <p
                                    className="mb--50 mb-sm--20"
                                    data-animation="fadeInDown"
                                    data-duration=".8s"
                                    data-delay=".2s"
                                >
                                    Starting At <strong>$1.499.00</strong>
                                </p>
                                <div
                                    className="slide-btn-group"
                                    data-animation="fadeInUp"
                                    data-duration="1s"
                                    data-delay=".3s"
                                >
                                    <Link to={"/Shop"} className="btn btn-bordered btn-style-1">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Slide End */}
        </div>
    </div>
    )
  }
}
