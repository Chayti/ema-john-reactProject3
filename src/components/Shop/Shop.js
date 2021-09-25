import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () =>{

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    const handleAddToCart = product =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const handleRemoveFromCart = key =>{
        const finalCart = cart.filter(product=>product.key!=key)
        setCart(finalCart);
    }

    return (
        <div className="shop-container row">
            <div className="product-container col-10 border-end">
                <h3 className="text-center py-3">Products: {products.length}</h3>
                {
                    products.map(product => <Product 
                        key={product.key} 
                        product={product}
                        handleAddToCart = {handleAddToCart}
                        handleRemoveFromCart ={handleRemoveFromCart}
                    >
                    </Product>)
                }
            </div>
            <div className="card-container col-2">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
}

export default Shop;