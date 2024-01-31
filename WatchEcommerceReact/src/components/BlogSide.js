import React, { Component } from 'react'

export default class BlogSide extends Component {
    render() {
        return (
            <div className="col-lg-3 order-lg-1 order-2">
                <aside className="blog-sidebar">
                    {/* Search Widget Start */}
                    <div className="sidebar-widget search-widget">
                        <h3 className="widget-title">Search</h3>
                        <div className="widget_conent">
                            <form action="#" className="searchform">
                                <input
                                    type="text"
                                    className="searchform__input"
                                    name="search"
                                    id="blog_search"
                                    placeholder="Search..."
                                />
                                <button className="searchform__submit">
                                    <i className="fa fa-search" />
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* Search Widget End */}
                    {/* Archive Widget Start */}
                    <div className="sidebar-widget archive-widget">
                        <h3 className="widget-title">Blog Archives</h3>
                        <div className="widget_conent">
                            <ul>
                                <li>
                                    <a href="single-blog.html">March 2015</a> <span>(1)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Archive Widget Start */}
                    {/* Recent Post Widget Start */}
                    <div className="sidebar-widget recent-post-widget">
                        <h3 className="widget-title">Recent Posts</h3>
                        <div className="widget_conent">
                            <div className="recent-post-single">
                                <div className="recent-post-media">
                                    <div className="image">
                                        <img src="assets/img/blog/post2-370x230.jpg" alt="Blog" />
                                    </div>
                                </div>
                                <div className="recent-post-content">
                                    <h4>
                                        <a href="single-blog.html">
                                            Gravida luctus lorem accumsan est massa mauris.
                                        </a>
                                    </h4>
                                    <p>
                                        <a href="single-blog.html">28-10-18</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

        )
    }
}
