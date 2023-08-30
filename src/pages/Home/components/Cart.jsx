import React from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useCart } from 'react-use-cart'
import {AiOutlineShoppingCart} from "react-icons/ai"
import {useNavigate} from "react-router-dom"
const Cart = () => {
    const {items,updateItemQuantity,removeItem,cartTotal,setItems,isEmpty}=useCart()
    const data=JSON.parse(localStorage.getItem("User"))
    const location=useNavigate()
    const checkUser=()=>{
        if(data){
            setItems([])
        }
        else{
            location("/login")
        }
    }
    if (isEmpty)
    return <section className="empty">
    <h4>Shopping Cart is Empty.</h4>
    <AiOutlineShoppingCart className="fs-1"/>
    <h5>You Have No Items In Your Shopping Cart.</h5>
    <button><NavLink to="/shopping">Return to shop</NavLink></button>
    </section>
  return (
    <>
      <section className="cart">
          <div className="cart-page">
          <p>
            <NavLink to="/">Home</NavLink> <span>|</span> Cart
          </p>
          </div>
          <div className="container">
              <div className="row" style={{paddingTop:"130px"}}>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <table className="table">
                    <thead>
                    <tr>
                        <th >IMAGE</th>
                        <th>PRODUCT NAME</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                     {
                         items.map((item,index)=>{
                             return <tr key={index}>
                             <td>
                                 <img src={item.img} alt=""/>
                             </td>
                             <td>
                                 <p>{item.title}</p>
                             </td>
                             <td>
                                 <p>{item.price}$</p>
                             </td>
                             <td>
                                 <div className="quantity">
                                     <span className="decrease" onClick={()=>{
                                         updateItemQuantity(item.id,item.quantity-1)
                                         toast.warning("The number of products decreased")
                                     }}>-</span>
                                     <span>{item.quantity}</span>
                                     <span className="increase" onClick={()=>{
                                         updateItemQuantity(item.id,item.quantity+1)
                                         toast.success("The number of products increase")
                                     }}>+</span>
                                 </div>
                             </td>
                             <td>
                                 <p>{item.quantity * item.price}$</p>
                             </td>
                             <td>
                             <i class="fa-solid fa-xmark"
                              onClick={()=>{
                                removeItem(item.id)
                                toast.error("The product has been deleted")
                              }}></i>
                             </td>
                         </tr>
                         })
                     }
                    </tbody>
                  </table>
                  </div>
                  <div className="col-lg-12">
                  <div className="cart-end">
                  <div className="total">
                          <h2>Cart Totals : <span>{cartTotal}$</span> </h2>
                      </div>
                      <div className="buy">
                        <button onClick={()=>{
                        checkUser()
                        toast.warning("Products removed from cart")
                        }}>Buy Now</button>
                    </div>
                  </div>
                      
                  </div>
              </div>
          </div>

      </section>
    </>
  )
}

export default Cart
