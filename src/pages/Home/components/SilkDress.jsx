import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const SilkDress = () => {
    const {t}=useTranslation()
  return (
    <>
    <section className="silkdress">
     <div className="container">
         <div className="row">
             <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                 <div className="dress">
                     <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/h5-img2-637x850.jpg" alt=""/>
                 </div>
                 <div className="skirt">
                     <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/h5-img1-303x303.jpg" alt=""/>
                 </div>
             </div>
             <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                 <div className="silk-dress">
                     <h6>{t("silkdress.0")}</h6>
                     <h2>{t("silkdress.1")}</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsum ab id, aperiam deserunt atque, quos dolores culpa qui nobis alias, iste voluptates natus similique!</p>
                     <button><NavLink to="/silkPage">{t("silkdress.2")}</NavLink></button>
                 </div>
             </div>
         </div>
     </div>
    </section>
      
    </>
  )
}

export default SilkDress
