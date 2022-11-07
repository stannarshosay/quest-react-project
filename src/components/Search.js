import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchProducts } from "../features/product/productSlice";

function Search() {

    const products = useSelector((state) => state.product.searchProducts);
    const dispatch = useDispatch();

    function searchProduct(event) {
        dispatch(searchProducts(event.target.value));
    }

    if (products.length)
        return (
            <>
                <h1 className="text-center">Search Products</h1>
                <input className="text-center" type="text" onInput={searchProduct}></input>
                <div className="card-container">
                    {
                        products.map((product) => {
                            return (
                                <div key={product.id} className="card">
                                    <img src={product.image} alt={product.title}></img>
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                    <h2>$ {product.price}</h2>
                                    <Link to={"/product/" + product.id} className="more-details-link">View More</Link>
                                </div>
                            );
                        })
                    }
                </div>
            </>
        );
    return (
        <>
            <h1 className="text-center">Search Products</h1>
            <input className="text-center" type="text" onInput={searchProduct}></input>
            <div className="loader-container">
                <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    );
}

export default Search;