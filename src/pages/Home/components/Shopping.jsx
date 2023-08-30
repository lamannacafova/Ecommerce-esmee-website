import React, { useState } from 'react'
import data from '../../../data/Data'
import CollectionCard from './CollectionCard'

const Shopping = () => {
    const [datas,setDatas]=useState(data)
    const categories=["All", ...new Set(data.map((item)=>item.category))]
    const [collection,setCollection]=useState(categories)
    console.log(setCollection)
    const [search,setSearch]=useState("")
    const [minPrice,setMinPrice]=useState(30)
    const [maxPrice,setMaxPrice]=useState(200)
    console.log(setMaxPrice);
    // const filteredFunction=(value)=>{
    //     if(value === "All"){
    //         setDatas(data)
    //         return
    //     }
    //     const filteredData=data.filter((item)=>item.category === value)
    //     setDatas(filteredData)
      
    // }
    const filteredFunction=(category)=>{
        let filteredData=data;
        if(category !== "All"){
             filteredData=data.filter((item)=>item.category===category)
        }
        filteredData=filteredData.filter((item)=>item.price>=minPrice && item.price<=maxPrice)
        setDatas(filteredData)
    }
  return (
    <>
    <section className="shoppings">
     <div className="container">
         <div className="row">
            <div className="col-lg-9">
            <div className="row">
                 {
                     search=== "" && datas.map((item,index)=>{
                         return <CollectionCard product={item} key={index}/>
                     })
                 }
                 {
                     search !== "" && data.filter((item)=>{
                         return search.toLocaleLowerCase() === "" ? item : item.category.toLocaleLowerCase().includes(search)
                     }).map((item,index)=>{
                         return <CollectionCard product={item} key={index}/>
                     })
                 }
         </div>
            </div>
            <div className="col-lg-3">
                <div className="row">
                    <div className="col-lg-12">
                        <h4>Filter by price</h4>
                      <div>
                        <input type="range" className="form-range" id="customRange1" min={30} max={200}
                        value={minPrice} onChange={(e)=>setMinPrice(Number(e.target.value))} />
                        </div>
                    <p>Price: <span>${minPrice} — ${maxPrice}</span></p>
                    <button onClick={()=>filteredFunction("All")}>Filter</button>
                </div>
                <div className="col-lg-12">
                    <h4>Product categories</h4>
                    <ul>
                        {
                            collection.map((item)=>{
                                return <li onClick={()=>filteredFunction(item)}>{item}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="col-lg-12">
                    <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/shop-sidebar-single1.jpg" alt=""/>
                </div>
                <div className="col-lg-12">
                <div className="search">
                              <form>
                                  <input type="search" placeholder="Search" value={search}
                                  onChange={(e)=>{setSearch(e.target.value)}}
                                   />
                                  <i class="fa-solid fa-magnifying-glass"></i>
                              </form>
                          </div>
                </div>
                <div className="col-lg-12">
                  <h4>Filtered by</h4>
                  <ul>
                      <li>BEIGE (30)</li>
                      <li>BLACK (1)</li>
                      <li>BLUE (1)</li>
                      <li>BROWN (31)</li>
                      <li>DARK BROWN (1)</li>
                      <li>GREEN (30)</li>
                      <li>ORANGE (30)</li>
                      <li>PINK (1)</li>
                      <li>PURPLE (1)</li>
                      <li>SEPIA (1)</li>
                      <li>YELLOW (1)</li>
                  </ul>
                </div>
            </div>
            </div>
         </div>
     </div>
    </section>
      
    </>
  )
}

export default Shopping
