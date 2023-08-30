import React from 'react'
import { NavLink } from 'react-router-dom'
import data from '../../../data/Data'
import CollectionCard from './CollectionCard'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useTranslation } from 'react-i18next';
const SilkPage = () => {
  const {t}=useTranslation()
    const options = {
        margin: 10,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        items: 4,
        smartSpeed: 1000,
        autoplayTimeout: 2000,
        loop: true,
        dots:false,
        responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:3
        }
    }
    };
  return (
    <>
      <div className="silk-page">
      <div className="silks-page">
          <p>
            <NavLink to="/">Home</NavLink> <span>|</span> Silk Page
          </p>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <div className="row">
                        <div className="col-12 col-sm-4 col-md-4 col-lg-12">
                            <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/shop-standard-img3.jpg" alt=""/>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-12">
                            <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/shop-standard-img2.jpg" alt=""/>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-12">
                            <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/shop-standard-img4.jpg" alt=""/>
                        </div>
                           
                    </div>
                </div>
                <div className="col-lg-6">
                <img className="img-width" src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/shop-standard-img1.jpg" alt=""/>
                </div>
                <div className="col-lg-4">
                <h1>{t("silkpage.0")}</h1>
                <p>$70.00</p>
                <div className="icon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <span>({t("silkpage.1")})</span>
                </div>
                <p className="big-prg">Integer vel turpis et est ultrices rhoncus. Proin eu euismod nisi. Nulla ultrices placerat aliquam. Fusce ac sapien dolor. Curabitur auctor. Nam magna mi, consectetur vel lorem non.</p>
                <ul>
                    <li>{t("silkpage.2")}</li>
                    <li>{t("silkpage.3")}</li>
                    <li>{t("silkpage.4")}</li>
                </ul>
                <button>{t("silkpage.5")}</button>
                </div>
            
              <div className="row">
                  <h2>{t("silkpage.6")}</h2>
         <div className="carousel">
           <div className="carousel-main">
           <OwlCarousel className="slider-items owl-carousel" {...options}  >
                  {
                  data.slice(8,16).map((item,index)=>{
                      return  <CollectionCard product={item} key={index}/>
                     
                      
                    })
                  }
            </OwlCarousel>

           </div>
         </div>
              </div>

            </div>
   
              

        </div>
      </div>
    </>
  )
}

export default SilkPage
