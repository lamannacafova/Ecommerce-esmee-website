import React from 'react'
import { NavLink } from 'react-router-dom'
import data from "../../data/Data"
import CollectionCard from "../Home/components/CollectionCard"
import { useTranslation } from 'react-i18next'
const BigImages = () => {
  const {t}=useTranslation()
  return (
    <>
      <section className="big">
      <div className="shop-page">
          <p>
            <NavLink to="/">Home</NavLink> <span>|</span> Big Image
          </p>
        </div>
        <div className="container">
            <div className="row all-row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-2">
                    <div className="row">
                        <div className="col-12 col-sm-4 col-md-4 col-lg-12">
                            <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/sale-shop-img2.jpg" alt=""/>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4  col-lg-12">
                            <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/sale-shop-img3.jpg" alt=""/>
                        </div>
                        <div className=" col-12 col-sm-4 col-md-4 col-lg-12">
                            <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/sale-shop-img4.jpg" alt=""/>
                        </div>
                           
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <img className="img-width" src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/sale-shop-img1.jpg" alt=""/>
                </div>
                <div className="col-lg-4">
                <h1>{t("shop.0")}</h1>
                <p><del>$95.00</del>$70.00</p>
                <div className="icon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <span>({t("shop.1")})</span>
                </div>
                <p className="big-prg">Integer vel turpis et est ultrices rhoncus. Proin eu euismod nisi. Nulla ultrices placerat aliquam. Fusce ac sapien dolor. Curabitur auctor. Nam magna mi, consectetur vel lorem non.</p>
                <ul>
                    <li>{t("shop.3")}</li>
                    <li>{t("shop.4")}</li>
                    <li>{t("shop.5")}</li>
                </ul>
                <button>{t("shop.6")}</button>
                </div>
            
              <div className="row">
                  <h2>{t("shop.2")}</h2>
                     {
                         data.slice(0,6).map((item,index)=>{
                             return <CollectionCard product={item} key={index}/>
                         })
                     }
              </div>

            </div>
   
              

        </div>
      </section>
    </>
  )
}

export default BigImages
