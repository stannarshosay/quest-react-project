import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setSimilarProducts } from "../features/product/productSlice";

function Details() {

    const [product, setProduct] = useState(null);
    const similarProducts = useSelector((state)=>state.product.similarProducts);

    const dispatch = useDispatch();

    const { productId } = useParams();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + productId)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
                dispatch(setSimilarProducts(data.category));
            });
    }, [productId]);

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
                        similarProducts.map((product) => {
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