import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../features/ProductSlice'
import { connect } from 'react-redux'

class Shop extends Component {
    

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <>
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="page-title">Shop</h1>
                                <ul className="breadcrumb justify-content-center">
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li className="current">
                                        <Link to={"/Shop"}>Shop</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // Shop Main starts here */}
                <div className="main-content-wrapper">
                    <div className="shop-area pt--40 pb--80 pt-md--30 pb-md--60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 order-lg-2 mb-md--30">
                                    <div className="row">
                                        <div className="col-12">
                                            {/* Shop Toolbar Start */}
                                            <div className="shop-toolbar">
                                                <div className="product-view-mode" data-default={3}>
                                                </div>
                                                <span className="product-pages">

                                                </span>
                                                <div className="product-showing">
                                                    <label className="select-label">Show:</label>
                                                    <select className="short-select nice-select">
                                                        <option value={1}>1</option>
                                                    </select>
                                                </div>
                                                <div className="product-short">
                                                    <label className="select-label">Short By:</label>
                                                    <select className="short-select nice-select">
                                                        <option value={1}>Relevance</option>
                                                        <option value={2}>Name, A to Z</option>
                                                        <option value={3}>Name, Z to A</option>
                                                        <option value={4}>Price, low to high</option>
                                                        <option value={5}>Price, high to low</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* Shop Toolbar End */}
                                        </div>
                                    </div>
                                    {/* Main Shop wrapper Start */}
                                    <ProductCard />
                                    {/* Main Shop wrapper End */}
                                    {/* Pagination Start */}
                                    <div className="pagination-wrap mt--15 mt-md--10">
                                        <p className="page-ammount"></p>
                                        <ul className="pagination">
                                            <li>
                                                <a href="/" className="first">
                                                    |&lt;
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/" className="prev">
                                                    &lt;
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/" className="current">
                                                    1
                                                </a>
                                            </li>

                                            <li>
                                                <a href="/" className="next">
                                                    &gt;
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/" className="next">
                                                    &gt;|
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Pagination End */}
                                </div>
                                <div className="col-lg-3 order-lg-1">
                                    <aside className="shop-sidebar">
                                        <div className="search-filter">
                                            <div className="filter-price">
                                                <h3 className="filter-heading">Price</h3>
                                                <ul className="filter-list">
                                                    <li>
                                                        <div className="filter-input filter-radio">
                                                            <input
                                                                type="radio"
                                                                name="pricerange"
                                                                id="pricerange-1"
                                                                defaultChecked=""
                                                            />
                                                            <label htmlFor="pricerange-1">$55 - $100 (3)</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="filter-categories">
                                                <h3 className="filter-heading">Brands</h3>
                                                <ul className="filter-list">
                                                    {this.props.brands.map((brand) => (
                                                        <li key={brand.id}>
                                                            <div className="filter-input filter-checkbox">
                                                                <input
                                                                    type="checkbox"
                                                                    name={brand.id} // Farklı bir id değeri kullanın
                                                                    id={brand.id} // Farklı bir id değeri kullanın
                                                                    defaultChecked=""
                                                                />
                                                                <label htmlFor={brand.id}>{brand.title}</label>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        brands: state.products.items,
    };
};

export default connect(mapStateToProps, {  fetchProducts })(Shop);