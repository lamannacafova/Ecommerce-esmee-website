import React from 'react'
import { useTranslation } from 'react-i18next'

const Team = () => {
    const {t}=useTranslation()
  return (
    <>
    <div className="team">
        <div className="team-title">
            <h6>{t("about.0")}</h6>
            <h2>{t("about.1")}</h2>
        </div>
        <div className="container">
            <div className="row">
                <div className=" col-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="card border-0 rounded-0">
                      <div className="card-image">
                          <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/team-img4.jpg" alt=""/>
                      </div>
                      <div className="card-bottom">
                          <h4>Veronica Timmy</h4>
                          <h5>{t("about.2")}</h5>
                          <div className="icons">
                          <i class="fa-brands fa-instagram"></i>
                          <i class="fa-brands fa-facebook-f"></i>
                          </div>
                      </div>

                  </div>
                </div>
                <div className=" col-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="card border-0 rounded-0">
                      <div className="card-image">
                          <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/team-img5.jpg" alt=""/>
                      </div>
                      <div className="card-bottom">
                          <h4>Leonesse Ham</h4>
                          <h5>{t("about.3")}</h5>
                          <div className="icons">
                          <i class="fa-brands fa-instagram"></i>
                          <i class="fa-brands fa-facebook-f"></i>
                          </div>
                      </div>

                  </div>
                </div>
                <div className=" col-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="card border-0 rounded-0">
                      <div className="card-image">
                          <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/team-img6.jpg" alt=""/>
                      </div>
                      <div className="card-bottom">
                          <h4>Tanya Turner</h4>
                          <h5>{t("about.4")}</h5>
                          <div className="icons">
                          <i class="fa-brands fa-instagram"></i>
                          <i class="fa-brands fa-facebook-f"></i>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
        <div className="member-title">
            <h6>{t("about.5")}</h6>
            <h2>{t("about.6")}</h2>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <img className="member-image" src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/team-img7.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Team
