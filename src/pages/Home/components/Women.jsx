import React from 'react'
import { useTranslation } from 'react-i18next'

const Women = () => {
    const {t}=useTranslation()
  return (
    <>
    <section className="women">
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
               <div className="urban-scale">
               <div className="urban">
                    <div className="urban-title">
                        <h2>{t("women.0")}</h2>
                    </div>
                </div>
               </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="women-scale">
               <div className="womens">
                    <div className="women-title">
                        <h2>{t("women.1")}</h2>
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

export default Women
