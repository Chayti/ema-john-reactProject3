import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () =>{

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    return (
        <div className="shop-container row">
            <div className="product-container col-10 border-end">
                <h3 className="text-center py-3">Products: {products.length}</h3>
                {
                    products.map(product => <Product key={product.key} product={product}></Product>)
                }
            </div>
            <div className="card-container col-2 text-center">
                    <h5 className="fw-bold my-3">Order Summary</h5>
                    <p className="my-4">Items Ordered:</p>
            </div>
        </div>
    );
}

export default Shop;