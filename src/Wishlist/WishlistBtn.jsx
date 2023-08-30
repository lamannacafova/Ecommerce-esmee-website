import React from 'react'
import { useWishlist } from 'react-use-wishlist'
import {AiFillHeart,AiOutlineHeart} from "react-icons/ai"
import { toast } from 'react-toastify'
const WishlistBtn = ({product}) => {
   const { addWishlistItem,removeWishlistItem,inWishlist}=useWishlist()
   const toggleWishlist=(myItem)=>{
       if(inWishlist(myItem.id)){
           removeWishlistItem(myItem.id)
       }
       else{
           addWishlistItem(myItem)
       }
   }
  return (
    <>
       <button className="btn-wishlist" onClick={()=>{
           toggleWishlist(product)
           inWishlist(product.id) ? toast.warn("Close wishlist") : toast.success("Added wishlist")
       }}>
      {
        inWishlist(product.id) ? <AiFillHeart/> : <AiOutlineHeart/>
      }
    </button>
    </>
  )
}

export default WishlistBtn
