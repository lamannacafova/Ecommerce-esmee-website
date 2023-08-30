import React from 'react'
import { NavLink } from 'react-router-dom'
import WishlistBtn from '../../Wishlist/WishlistBtn'
import { useCart } from 'react-use-cart'
import { toast } from 'react-toastify'

const ColumnCard = ({product}) => {
    const {addItem}=useCart()
  return (
    <>
      <div className=" col-12 col-sm-12 col-md-6 col-lg-2">
      <div className="card">
            <div className="card-top">
              <img src={product.img} alt=""/>
              <div className="icon">
                  <div className="shop" 
                  onClick={()=>{
                    addItem(product)
                    toast.success("Product added was successfully")
                  }
                  }>
                  <i class="fa-solid fa-basket-shopping"></i>
                  </div>
                  <div className="heart" >
                  {/* <i class="fa-regular fa-heart"></i> */}
                  <WishlistBtn product={product}/>
                  </div>
                  <div className="more">
                  <NavLink to={`/product/${product.id}`}><i class="fa-regular fa-eye"></i></NavLink>
                  </div>
              </div>
            </div>
            <div className="card-body">
                <h4>{product.desc}</h4>
                <h6>{product.title}</h6>
                <p>${product.price}.00</p>
            </div>
            </div>
      </div>
    </>
  )
}

export default ColumnCard
