import React, { useState } from 'react'
import data from '../../data/Data'
import ColumnCard from './ColumnCard'
import { NavLink } from 'react-router-dom'

const Columns = () => {
  const [product,setProduct]=useState(data)
  const category=["All", ...new Set(data.map((item)=>item.category))]
  const [list,setList]=useState(category)
  const filterFunction=(value)=>{
  if(value === "All"){
    setProduct(data)
    return
  }
  const filterProduct=data.filter((item)=>item.category === value)
  setProduct(filterProduct)
  }
  return (
    <>
    <div className="columns">
    <div className="shop-page">
          <p>
            <NavLink to="/">Home</NavLink> <span>|</span> Six Columns
          </p>
        </div>
            <div className="container-fluid">
           <ul>
           {
                list.map((item)=>{
                  return <li onClick={()=>filterFunction(item)}>{item}</li>
                })
              }
           </ul>
                <div className="row g-4">
                    {
                        product.map((item,index)=>{
                            return <ColumnCard product={item} key={index}/>
                        })
                    }
                </div>
            </div>
    </div>
      
    </>
  )
}

export default Columns
