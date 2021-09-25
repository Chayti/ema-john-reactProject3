import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) =>{
    const {name,img,seller,price,stock,star} = props.product;
    return(
        <div style={{marginLeft: '25%'}}>
            <div className="product d-md-flex ">
              
              <div>
                  <img src={img} alt=""/>
              </div>
              
              <div className="ms-3 container">
                  
                  <h5 className="text-primary prod-name">{name}</h5>
                  <p className="mb-0 pb-0"><small>by: {seller}</small></p>
                  
                  <small>
                      <Rating
                        emptySymbol="far fa-star text-warning mb-3"
                        fullSymbol="fas fa-star text-warning mb-3"
                        initialRating={star}
                        readonly
                      />
                   </small>

                  <h5>$ {price}</h5>
                  <p><small>Only {stock} left in stock - order soon</small></p>
                  
                  <button onClick={()=>props.handleAddToCart(props.product)} className="bg-warning px-5 border-warning d-flex align-items-center rounded">
                      <small>
                          <FontAwesomeIcon icon={faShoppingCart} />
                          &nbsp;Add into cart
                      </small>
                  </button>

                  <button onClick={()=>props.handleRemoveFromCart(props.product.key)}className="bg-danger px-5 mt-2 text-light border-danger d-flex align-items-center rounded"><small>Remove this from cart</small></button>
               </div>

            </div>
            <hr></hr>
        </div>
    );
}

export default Product;