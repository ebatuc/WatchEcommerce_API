import React, { Component } from 'react'
import BlogCard from '../components/BlogCard'
import BlogSide from '../components/BlogSide'

export default class Blogs extends Component {
    render() {
        return (
            <>
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="page-title">Blog List</h1>
                                <ul className="breadcrumb justify-content-center">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="current">
                                        <a href="blog-list-left-sidebar.html">Blog List </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcumb area End */}
                {/* Main Wrapper Start */}
                <div className="main-content-wrapper">
                    <div className="blog-area pt--40 pb--80 pt-md--30 pb-md--60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 order-lg-2 order-1 mb-md--30">
                                    <div className="row">
                                        <BlogCard />
                                    </div>
                                </div>
                                <BlogSide />
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}
