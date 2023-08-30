import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import data from "../../data/Data";
import CollectionCard from "../Home/components/CollectionCard";
import FilterCard from "./FilterCard";

const Gallery = () => {
  const [datas, setDatas] = useState(data);
  const categories = ["All", ...new Set(data.map((item) => item.category))];
  const [collection, setCollection] = useState(categories);
  console.log(setCollection);
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState(true);
  const row = () => {
    setRows(true);
  };

  const col = () => {
    setRows(false);
  };
  const filteredFunction = (value) => {
    if (value === "All") {
      setDatas(data);
      return;
    }
    // console.log(setCollection);
    const filteredData = data.filter((item) => item.category === value);
    setDatas(filteredData);
  };
  const handleSort = (e) => {
    const sortOption = e.target.value;
    let sortData = [...datas];
    if (sortOption === "sortAZ") {
      sortData = sortData.sort((a, b) => a.desc.localeCompare(b.desc));
    } else if (sortOption === "reverseAZ") {
      sortData = sortData.sort((a, b) => b.desc.localeCompare(a.desc));
    } else if (sortOption === "asc") {
      sortData = sortData.sort((a, b) => a.price - b.price);
      console.log(sortData);
    } else if (sortOption === "desc") {
      sortData = sortData.sort((a, b) => b.price - a.price);
    }
    setDatas(sortData);
  };
  return (
    <>
      <section className="shops">
        <div className="shop-page">
          <p>
            <NavLink to="/">Home</NavLink> <span>|</span> Gallery
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="search">
                <form>
                  <input
                    type="search"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <i class="fa-solid fa-magnifying-glass"></i>
                </form>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="filter-box">
                <div className="filter-icon">
                  <FaListUl className="i" onClick={row} />
                  <CgMenuGridO className="i" onClick={col} />
                </div>
                <div className="show-text">
                  <p>
                    Showing 1 - <span>{datas.length}</span> of 18 result
                  </p>
                </div>
                <div className="sort">
                  <span>Sort By:</span>
                  <select onChange={handleSort}>
                    <option value="sortAZ">Alphabetically, A - Z</option>
                    <option value="reverseAZ">Alphabetically, Z - A</option>
                    <option value="asc">Price,low to high</option>
                    <option value="desc">Price,high to low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row all-row">
            <div className="col-lg-3">
              <div className="row">
                <div className="col-lg-12">
                  <div className="categories">
                    <h4>Categories</h4>
                    <ul type="circle">
                      {collection.map((item, index) => {
                        return (
                          <li onClick={() => filteredFunction(item)} key={index}>{item}</li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="recent">
                    <h4>Recent Posts</h4>
                    <div className="col-lg-12">
                      <div className="card border-0 rounded-0 mb-3">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/blog-img5-650x650.jpg"
                              className="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h6 className="card-title">Fashion Designer</h6>
                              <p className="card-text">AUGUST 5, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card border-0 rounded-0 mb-3">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/blog-img6-650x650.jpg"
                              className="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h6 className="card-title">NY Fashion Week</h6>
                              <p className="card-text">AUGUST 5, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card border-0 rounded-0 mb-3">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/blog-img8-650x650.jpg"
                              className="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h6 className="card-title">Amazon Prime Day</h6>
                              <p className="card-text">AUGUST 5, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="follow">
                    <h4>Follow us:</h4>
                    <ul>
                      <li>
                        <i class="fa-brands fa-instagram"></i>Instagram
                      </li>
                      <li>
                        <i class="fa-brands fa-youtube"></i>Youtube
                      </li>
                      <li>
                        <i class="fa-brands fa-facebook-f"></i>Facebook
                      </li>
                      <li>
                        <i class="fa-brands fa-pinterest-p"></i>Pinterest
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row g-3 row-padd">
                {/* {
                  data.map((item)=>{
                    return(
                    <>
                      {
                        rows ? <CollectionCard product={item}/> :<FilterCard filter={item}/>
                      }

                      </>
                    )
                  })
                } */}
                {search === "" &&
                  datas.map((item, index) => {
                    return (
                      <>
                        {rows ? (
                          <CollectionCard product={item} key={index} />
                        ) : (
                          <FilterCard filter={item} key={index} />
                        )}
                      </>
                    );
                  })}
                {search !== "" &&
                  data
                    .filter((item) => {
                      return search.toLocaleLowerCase() === ""
                        ? item
                        : item.category.toLocaleLowerCase().includes(search);
                    })
                    .map((item, index) => {
                      return <CollectionCard product={item} key={index} />;
                    })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
