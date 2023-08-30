import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const Fashion = () => {
  const {t}=useTranslation()
  return (
    <>
    <section className="fashion">
        <div className="container-fluid ">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="access">
                  <div className="accessories">
                      <div className="title">
                      <h2><NavLink>{t("fashion.0")}</NavLink></h2>
                        <h5>{t("fashion.1")}</h5>
                      </div>
                        </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <div className="classics">
                  <div className="classic">
                      <div className="title">
                      <h2><NavLink>{t("fashion.2")}</NavLink></h2>
                        <h5>{t("fashion.3")}</h5>
                      </div>
                        </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <div className="trendys">
                  <div className="trendy">
                      <div className="title">
                      <h2><NavLink>{t("fashion.4")}</NavLink></h2>
                        <h5>{t("fashion.5")}</h5>
                      </div>
                        </div>
                  </div>
                </div>
            </div>
        </div>

    </section>
      
    </>
  )
}

export default Fashion
