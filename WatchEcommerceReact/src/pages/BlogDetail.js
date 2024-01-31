import React, { Component } from 'react'
import axios from 'axios';

export default class BlogDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
        };
    }

    componentDidMount() {
        this.fetchBlogs();
    }

    fetchBlogs = async () => {
        try {
            const response = await axios.get('https://localhost:7025/api/Blog');
            this.setState({ blogs: response.data });
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    getBlogBySlugs = (slug) => {
        return this.state.blogs.find(item => item.slug === slug);
    }
    render() {
        return (
            <>
                {this.state.blogs.map((blog) => (
                    <div className="single-post-area pt--40 pb--80 pt-md--30 pb-md--60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 order-lg-2 order-1 mb-md--30">
                                    <div className="single-post-wrapper">
                                        <article className="post post-details mb--30">
                                            <div className="post-media">
                                                <div className="image">
                                                    <img src="assets/img/blog/blog1.jpg" alt="blog" />
                                                </div>
                                            </div>
                                            <div className="post-info">
                                                <header className="entry-header">
                                                    <div className="entry-meta">
                                                        <span className="post-author">
                                                            <span className="post-by">Post By:</span>
                                                            admin
                                                        </span>
                                                        <span className="post-date">Feb 02 2016</span>
                                                    </div>
                                                    <h2 className="post-title">{blog.title}</h2>
                                                </header>
                                                <div className="post-content">
                                                    <p>
                                                        Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras
                                                        pretium arcu ex. Aenean posuere libero eu augue condimentum
                                                        rhoncus. Praesent ornare tortor ac ante egestas hendrerit.
                                                        Aliquam et metus pharetra, bibendum massa nec, fermentum
                                                        odio. Nunc id leo ultrices, mollis ligula in, finibus
                                                        tortor. Mauris eu dui ut lectus fermentum eleifend.
                                                        Pellentesque faucibus sem ante, non malesuada odio varius
                                                        nec. Suspendisse potenti.{" "}
                                                    </p>
                                                    <blockquote>
                                                        Quisque semper nunc vitae erat pellentesque, ac placerat
                                                        arcu consectetur. In venenatis elit ac ultrices convallis.
                                                        Duis est nisi, tincidunt ac urna sed, cursus blandit lectus.
                                                        In ullamcorper sit amet ligula ut eleifend. Proin dictum
                                                        tempor ligula, ac feugiat metus. Sed finibus tortor eu
                                                        scelerisque scelerisque.
                                                    </blockquote>
                                                    <p>
                                                        Aenean et tempor eros, vitae sollicitudin velit. Etiam
                                                        varius enim nec quam tempor, sed efficitur ex ultrices.
                                                        Phasellus pretium est vel dui vestibulum condimentum. Aenean
                                                        nec suscipit nibh. Phasellus nec lacus id arcu facilisis
                                                        elementum. Curabitur lobortis, elit ut elementum congue,
                                                        erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis
                                                        suscipit metus ante, sed convallis quam posuere quis. Ut
                                                        tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc
                                                        vitae lacus eget lectus imperdiet tempus sed in dui. Nam
                                                        molestie magna at risus consectetur, placerat suscipit justo
                                                        dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.
                                                    </p>
                                                    <p>
                                                        Suspendisse turpis ipsum, tempus in nulla eu, posuere
                                                        pharetra nibh. In dignissim vitae lorem non mollis. Praesent
                                                        pretium tellus in tortor viverra condimentum. Nullam
                                                        dignissim facilisis nisl, accumsan placerat justo ultricies
                                                        vel. Vivamus finibus mi a neque pretium, ut convallis dui
                                                        lacinia. Morbi a rutrum velit. Curabitur sagittis quam quis
                                                        consectetur mattis. Aenean sit amet quam vel turpis interdum
                                                        sagittis et eget neque. Nunc ante quam, luctus et neque a,
                                                        interdum iaculis metus. Aliquam vel ante mattis, placerat
                                                        orci id, vehicula quam. Suspendisse quis eros cursus,
                                                        viverra urna sed, commodo mauris. Cras diam arcu, fringilla
                                                        a sem condimentum, viverra facilisis nunc. Curabitur vitae
                                                        orci id nulla maximus maximus. Nunc pulvinar sollicitudin
                                                        molestie.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>

        )
    }
}
