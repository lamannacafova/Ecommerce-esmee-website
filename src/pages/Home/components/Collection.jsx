import React from 'react'
import data from '../../../data/Data'
import CollectionCard from './CollectionCard'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useTranslation } from 'react-i18next';
const Collection = () => {
  const {t}=useTranslation()
  const options = {
    margin: 10,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    items: 4,
    navText: ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
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
    <section className="collection">
     <div className="container">
        <div className="collection-title">
            <h6>{t("collection.0")}</h6>
            <h2>{t("collection.1")}</h2>
        </div>
        <div className="row mt-5">
            {/* {
                data.slice(0,8).map((item,index)=>{
                    return <CollectionCard product={item} key={index}/>
                })
            } */}
                   <div className="carousel">
           <div className="carousel-main">
           <OwlCarousel className="slider-items owl-carousel" {...options}  >
                  {
                  data.map((item,index)=>{
                      return  <CollectionCard product={item} key={index}/>
                     
                      
                    })
                  }
            </OwlCarousel>

           </div>
         </div>
        </div>
     </div>
    </section>
      
    </>
  )
}

export default Collection
