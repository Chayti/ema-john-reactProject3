import React, { useState } from "react";
import './Cart.css';

const Cart = (props) =>{
    const {cart} = props;
    console.log(cart);
    
    let totalPrice = 0;
    let totalShipping = 0;
    let grandTotal = 0;
    
    cart.map(cartProduct => totalPrice=totalPrice+cartProduct.price)
    cart.map(cartShipping => totalShipping=totalShipping+cartShipping.shipping)
    
    return(
        <div>
            <h5 className="fw-bold my-3 text-center">Order Summary</h5>
            
            <p className="my-4 text-center">Items Ordered: {cart.length}</p>
            
            <p className='mb-0'>
                <small>
                    Items: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;
                    <span className="fw-bold">
                        ${totalPrice.toFixed(2)}
                    </span>
                </small>
            </p>
            
            <p className='mb-0'><small>Shipping & Handling:
                <span className="fw-bold">
                    ${totalShipping.toFixed(2)}
                </span>
            </small></p>
            
            <p className='mb-0'>
                <small>
                    Total before tax:&emsp;&emsp;&nbsp;
                        <span className="fw-bold">
                            ${(totalPrice+totalShipping).toFixed(2)}
                        </span>
                </small>
            </p>
            
            <p><small>
                Estimated tax:&emsp;&emsp;&emsp;&nbsp;
                    <span className="fw-bold">
                        $0.00
                    </span>
                </small>
            </p>
            
            <h6 className='fw-bold text-danger'>
                Order Total: &nbsp;${(totalPrice+totalShipping).toFixed(2)}
            </h6>
            
            <div className="d-flex justify-content-center">
                <button className="bg-warning px-4 border-warning d-flex align-items-center rounded"><small>Review your order</small></button>
            </div>
        </div>
    );
}

export default Cart;