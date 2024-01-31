import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBlogs } from '../features/BlogSlice';

class BlogCard extends Component {

 
    componentDidMount() {
        this.props.fetchBlogs();
    }



    render() {
        return (
            <>
                {   this.props.blogs.map((blog) => (
                    <div key={blog.id} className="col-12 mb--30">
                        <article className="post listview sticky single-post format-image">
                            <div className="post-media">
                                <div className="image">
                                    <a href="blog-details-image.html">
                                        <img src={blog.image} alt="blog" />
                                    </a>
                                </div>
                            </div>
                            <div className="post-info">
                                <header className="entry-header">
                                    <div className="entry-meta">
                                        <span className="post-author">
                                            <span className="post-by">Post By: </span>
                                            {blog.postBy}
                                        </span>
                                        <span className="post-date">{blog.postDate}</span>
                                    </div>
                                    <h2 className="post-title">
                                        <a href="blog-details-image.html">{blog.title}</a>
                                    </h2>
                                </header>
                                <div className="post-content">
                                    <p>
                                        {blog.short_description}
                                    </p>
                                </div>
                                <a
                                    href="blog-details-image.html"
                                    className="btn btn-read-more btn-style-2"
                                >
                                    Continue Reading
                                </a>
                            </div>
                        </article>
                    </div>
                ))}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    blogs: state.blog.blogs,
});

export default connect(mapStateToProps, { fetchBlogs })(BlogCard);
