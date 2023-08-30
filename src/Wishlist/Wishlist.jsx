import React from 'react'
import { NavLink } from 'react-router-dom'
import WishlistCard from './WishlistCard'
import { useWishlist } from 'react-use-wishlist'

const Wishlist = () => {

  const {items,setWishlistItems,isWishlistEmpty} = useWishlist()
  const myArray=[...new Map(items.map((item)=>[item.id,item])).values()]
  if (isWishlistEmpty) return <section className="empty" ><p>Your cart is empty...</p></section>;
  
  return (
    <>
      <section className="wishlists">
      <div className="wishlist-page">
          <p>
            <NavLink to="/">Home</NavLink> <span>|</span> WishList
          </p>
        </div>
        <div className="container">
          <h2>Wishlist Page</h2>
            <div className="row">
                {
                    myArray.map((item,index)=>{
                        return <WishlistCard product={item} key={index}/>
                    })
                }
            </div>
            <div className="between">
            <button onClick={()=>setWishlistItems([])}>Clear All</button>
            <button onClick={()=>{window.history.back()}}>Back<i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Wishlist
