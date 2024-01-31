import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Orders extends Component {
    
    render() {
        return (
            <>
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="page-title">Orders</h1>
                                <ul className="breadcrumb justify-content-center">
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li className="current">
                                        <Link to={"/Orders"}>Orders</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="main-content-wrapper">
                    <div className="account-wrapper pt--40 pb--80 pt-md--30 pb-md--60">
                        <div className="container">
                            <div className="user-dashboard-tab">
                                <div className="row">
                                   
                                    <div className="col-lg-12">
                                        <div className="user-dashboard-tab__content tab-content">
                                            <div id="orders">
                                                <div className="account-table table-content table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Order</th>
                                                                <th>Date</th>
                                                                <th>Status</th>
                                                                <th>Total</th>
                                                                {/* <th>Actions</th> */}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td className="wide-column">September 19, 2018</td>
                                                                <td>Processing</td>
                                                                <td className="wide-column">$25.00 for 1 item</td>
                                                                {/* <td>
                                                                    <a href="#" className="btn btn-medium btn-style-1">
                                                                        View
                                                                    </a>
                                                                </td> */}
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        )
    }
}
