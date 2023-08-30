import React from 'react'
import { useTranslation } from 'react-i18next'

const Design = () => {
  const {t}=useTranslation()
  return (
    <>
    <div className="design">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                  <div className="design-about">
                  <h6>{t("design.0")}</h6>
                    <h2>{t("design.1")}</h2>
                    <p>{t("design.2")} <br/> {t("design.3")} <br/> {t("design.4")}</p>
                    <p>N{t("design.5")} <br/>{t("design.6")} <br/> {t("design.7")} </p>
                    <p>{t("design.8")} <br/>{t("design.9")} <br/> {t("design.10")} </p>
                    <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/09/signature-img-1.png"  alt=""/>
                  </div>
                </div>
                <div className="col-lg-6">
                    <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/aboutme-img-1.jpg" alt=""/>
                </div>
            </div>
        </div>

       <div className="apply">
          <div className="apply-title">
          <h6> {t("design.11")}</h6>
           <h2> {t("design.12")}</h2>
           <p> {t("design.13")}</p>
          </div>
          <div className="forms">
              <form>
                  <input type="email" placeholder="Your e-mail"/>
                  <button>Send new</button>
              </form>
          </div>
       </div>

    </div>
      
    </>
  )
}

export default Design
