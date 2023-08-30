import React from 'react'
import { useTranslation } from 'react-i18next'

const WhiteDress = () => {
  const {t}=useTranslation()
  return (
    <>
      <section className="white-dress">
          <div className="container">
              <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                  <div className="white-dress">
                     <h6>{t("whitedress.0")}</h6>
                     <h2>{t("whitedress.1")}</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsum ab id, aperiam deserunt atque, quos dolores culpa qui nobis alias, iste voluptates natus similique!</p>
                     <button>{t("whitedress.2")}</button>
                 </div>
                  </div>
                  <div className="col-lg-6">
                  <div className="women">
                     <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/h5-img4-637x850.jpg" alt=""/>
                 </div>
                 <div className="earnning">
                     <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/h5-img5-415x415.jpg" alt=""/>
                 </div>
                  </div>
              </div>
          </div>

      </section>
    </>
  )
}

export default WhiteDress
