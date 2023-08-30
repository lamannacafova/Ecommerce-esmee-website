import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const {t}=useTranslation()
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className=" col-12 col-sm-6 col-md-6 col-lg-3">
              <img
                src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/logo_light.png"
                alt="Esmee logo"
              />
              <p>
               {t("footer.17")} <br />{t("footer.18")} <br />{t("footer.19")}
              </p>
              <p>+ 40 282 355 9874</p>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <h4>{t("footer.5")}</h4>
              <div className="list">
                <ul>
                  <li><NavLink to="/gallery">{t("footer.6")}</NavLink></li>
                  <li>{t("footer.7")}</li>
                  <li><NavLink to="/cart">{t("footer.8")}</NavLink></li>
                  <li>{t("footer.9")}</li>
                  <li><NavLink to="/wishList">{t("footer.10")}</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <h4>{t("footer.11")}</h4>
              <div className="list">
                <ul>
                  <li>{t("footer.12")}</li>
                  <li><NavLink to="/bigImages">{t("footer.13")}</NavLink></li>
                  <li>{t("footer.14")}</li>
                  <li>{t("footer.15")}</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <h4>{t("footer.16")}</h4>
              <p>
              {t("footer.20")} <br /> {t("footer.21")}
              </p>
              <div className="email">
                <input type="email" placeholder="Your e-mail" />
                <button>
                  <i class="fa-solid fa-envelope"></i>
                </button>
              </div>
              <div className="icons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
