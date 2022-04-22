import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delCart } from "../redux/action";
import {NavLink} from 'react-router-dom'

function Cart() {
  const state = useSelector((state) => state.handleCart);
  console.log("cart state", state);
  const dispatch = useDispatch();
  const handleClose = (i) => {
    dispatch(delCart(i));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>

              <p className="lead fw-bold">{cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const emptyCart = () => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3">
          <div className="container py-4">
              <div className="row">
                  <img src="/assets/empty.png" alt="cart is empty" />
              </div>
          </div>
        </div>
      </>
    );
  };
  const button =()=>{
      return  (
          <div className="container">
              <div className="row">
                  <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To Checkout</NavLink>
              </div>
          </div>
      )

  }
  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
}

export default Cart;
