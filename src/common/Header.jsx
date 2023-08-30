import React,{useContext,useState} from 'react'
import {AiOutlineHeart } from "react-icons/ai"
import { CiShoppingBasket} from "react-icons/ci"
import { BsSearch } from "react-icons/bs"
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { GlobalThemeContext } from '../context/ThemeContext'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useWishlist } from 'react-use-wishlist'
import AuthBtn from '../pages/Login/AuthBtn'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n/i18n'
import { Button, Form, ListGroup } from 'react-bootstrap'
import product from "../data/Data"
import LinkContainer from 'react-router-bootstrap/LinkContainer'

// import Flag from 'react-world-flags'
const Header = () => {;
  const {totalItems}=useCart()
  const {darkMode,toggleTheme}=useContext(GlobalThemeContext)
  const { totalWishlistItems}= useWishlist()
  const {t}=useTranslation()
  const handleChange=(lang)=>{
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
}
const [query, setQuery] = useState("");
const [data, setData] = useState(product);

  return (
    <>
  
      <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
         <NavLink to="/">
         <div className="esmee-img"></div>
         </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">{t("header.0")}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">{t("header.1")}</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link">{t("header.2")}</a>
                <div className="main">
                  <ul>
                    <li><NavLink className="link" to="/gallery">{t("header.3")}</NavLink></li>
                    <li><NavLink className="link" href="" to="/bigImages">{t("header.4")}</NavLink></li>
                    <li><NavLink className="link" to="/column">{t("header.5")}</NavLink></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">{t("header.6")}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">{t("header.7")}</NavLink>
              </li>
            </ul>
            <div className="icons">
               <div className="search">
                <BsSearch className="fs-5 searchs" data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>
                </div>
              <div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Search Products</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                      <div className="modal-body">
                      <Form className="d-flex border-bottom">
                            <Form.Control
                              type="search"
                              placeholder="Search products..."
                              className=" header-input border-0  "
                              aria-label="Search"
                              onChange={e => setQuery(e.target.value)}
                            />
                            <Button id='nav-button1' variant="outline-none border-0" ><i class="search-icon fa-solid fa-magnifying-glass"></i></Button>
                          </Form>
                          <div className="test">
                          { query.length===0 ? "" :product.filter(q => q.category.toLocaleLowerCase().includes(query)).map(item => {
                            return <ListGroup className='mt-4'>
                                <LinkContainer to={`/product/${item.id}`}>
                                  <button className='text-dark btn btn-light d-flex justify-space-around align-items-center '><img src={item.img} alt=""/>
                                {item.title}
                                  </button>
                                </LinkContainer>
                            </ListGroup>
                          })}

                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               <div className="wishlist">
              <NavLink to="/wishlist">
              <AiOutlineHeart className="fs-4 heart"/><span className="position-absolute top-10  start-150 translate-middle badge rounded-pill bg-secondary">{totalWishlistItems / 2}</span>
              </NavLink>
                </div> 
                <div className="shopping">
               <NavLink to="/cart">
               <CiShoppingBasket className="fs-4 basket"/><span className="position-absolute top-10  start-150 translate-middle badge rounded-pill bg-secondary">{totalItems}</span>
               </NavLink>
                </div>
                <div className="person">
                 <AuthBtn/>
                </div>
                <div> 
            </div>
                <DarkModeSwitch
                  style={{marginTop:"10px" }}
                  checked={darkMode}
                  onChange={toggleTheme}
                  size={28}
                    />
                       <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginTop:"9px",marginLeft:"8px"}}>
                      {i18n.language}
                    </button>
                    <ul className="dropdown-menu">
                    <li onClick={()=>handleChange('az')}  className="dropdown-item">AZ</li>
                    <li onClick={()=>handleChange('en')} className="dropdown-item">EN</li>
                    </ul>
                    </div>
            </div>
          </div>
        </div>
      </nav>
      </header>
    </>
  )
}

export default Header
