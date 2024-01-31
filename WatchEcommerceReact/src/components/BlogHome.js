import React, { Component } from 'react'

export default class BlogHome extends Component {
    render() {
        return (
            <section className="blog-area pt--80 pb--40 pt-md--60 pb-md--30">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title mb--30">
                                <h2>Form Our Blog</h2>
                            </div>
                        </div>
                    </div>
                 
                    <div className="row mt--35 mt-md--25">
                        <div className="col-12 text-center">
                            <a
                                href="https://instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-medium btn-style-2"
                            >
                                <i className="fa fa-instagram" />
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
