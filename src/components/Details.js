import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../App";

function Details() {

    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([]);

    const { productId } = useParams();

    const value = useContext(ProductsContext);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + productId)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, []);

    useEffect(()=>{
        setFilteredProducts(value);
    },[value,product]);

    function setFilteredProducts(allProducts){

        if(product===null) return;
        let similarProducts = allProducts.filter((item)=>{
            return product.category === item.category;
        });
        setProducts(similarProducts);
    }

    if (product)
        return (
            <>
                <div className="product-container">
                    <h1>{product.title}</h1>
                    <small>{product.category}</small>
                    <img src={product.image} />
                    <p>{product.description}</p>
                    <h4>${product.price}</h4>
                </div>
                <h1 className="text-center">Similar Products</h1>
                <div className="card-container">
                    {
                        products.map((product) => {
                            return (
                                <div key={product.id} className="card similar">
                                    <img src={product.image} alt={product.title}></img>
                                    <h5>{product.title}</h5>
                                    <h4>$ {product.price}</h4>
                                    <Link to={"/product/" + product.id} className="more-details-link">View More</Link>
                                </div>
                            );
                        })
                    }
                </div>
                <br />
                <br />
                <br />
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

export default Details;