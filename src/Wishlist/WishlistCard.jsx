import React from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import WishlistBtn from "./WishlistBtn";

const WishlistCard = ({ product }) => {
  const { addItem } = useCart();
  return (
    <>
      <div className="col-lg-4 p-2">
        <div className="card">
          <div className="card-top">
            <img src={product.img} alt="" />
            <div className="icon">
              <div
                className="shop"
                onClick={() => {
                  addItem(product);
                  toast.success("Product added was successfully");
                }}
              >
                <i class="fa-solid fa-basket-shopping"></i>
              </div>
              <div className="heart">
                <WishlistBtn product={product}/>
              </div>
              <div className="more">
                <NavLink to={`product/${product.id}`}>
                  <i class="fa-regular fa-eye"></i>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="titles">
              <h4>{product.desc}</h4>
              <p>${product.price}.00</p>
            </div>
            <h6>{product.title}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistCard;
