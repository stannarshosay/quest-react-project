import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../App";

function Home() {

    const [products, setProducts] = useState([]);

    const value = useContext(ProductsContext);

    useEffect(()=>{
        setProducts(value);
    },[value]);

    if (products.length)
        return (
            <>
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
        <div className="loader-container">
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Home;
