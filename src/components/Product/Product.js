import React from 'react';
import './Product.css'

const Product = (props) =>{
    const {name,img,seller,price,stock} = props.product;
    return(
        <div style={{marginLeft: '25%'}}>
            <div className="product">
              
              <div>
                  <img src={img} alt=""/>
              </div>
              
              <div className="ms-3">
                  
                  <h5 className="text-primary">{name}</h5>
                  <p><small>by: {seller}</small></p>
                  <h5>$ {price}</h5>
                  <p><small>Only {stock} left in stock - order soon</small></p>
                  
                  <button onClick={()=>props.handleAddToCart(props.product)} className="bg-warning px-5 border-warning d-flex align-items-center rounded"><small>Add into cart</small></button>

                  <button className="bg-danger px-5 mt-2 text-light border-danger d-flex align-items-center rounded"><small>Remove this from cart</small></button>
               </div>

            </div>
            <hr></hr>
        </div>
    );
}

export default Product;