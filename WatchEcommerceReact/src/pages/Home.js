import React, { Component } from 'react'
import Slider from '../components/Slider'
import ProductCard from '../components/ProductCard'
// import BlogHome from '../components/BlogHome'

export default class Home extends Component {
    render() {
        return (
            <div className='main-content-wrapper'>
                <Slider />
                <div className="shop-area pt--40 pb--80 pt-md--30 pb-md--60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 order-lg-2 mb-md--30">
                                <ProductCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
