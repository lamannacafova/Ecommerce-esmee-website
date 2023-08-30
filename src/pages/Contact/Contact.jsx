import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  const {t} =useTranslation()
  return (
    <>
    <section className="contact">
    <div className="contact-page">
          <p>
            <NavLink to="/">Home</NavLink> <span>|</span> Contact
          </p>
        </div>
        <div className="contact-image">
            <h6>{t("contact.0")}</h6>
            <h2>{t("contact.1")}</h2>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <ul>
                     <li>
                     <h3><span><i class="fa-solid fa-location-dot"></i></span> {t("contact.2")}</h3>
                       </li>
                       <li><p>{t("contact.3")}</p></li>
                       <li><p>{t("contact.4")}</p></li>
                   </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <ul>
                       <li>
                           <h3><span><i class="fa-solid fa-phone"></i></span> {t("contact.5")}</h3>
                       </li>
                       <li><p>{t("contact.6")}: <b>(+88) – 1990 – 6886</b></p></li>
                       <li><p>{t("contact.7")}: <b>1800 – 1102</b> </p></li>
                       <li><p>{t("contact.8")}: <b>contact@drou.com</b></p></li>
                   </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <ul>
                       <li>
                           <h3><span><i class="fa-solid fa-clock"></i></span>{t("contact.9")}</h3>
                       </li>
                       <li><p>{t("contact.10")}</p></li>
                       <li><p>{t("contact.11")}</p></li>
                   </ul>
                </div>
                <div className=" col-12 col-sm-12 col-md-12 col-lg-12 my-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128179.81027724469!2d49.86938816689395!3d40.40280017347998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrw7w!5e0!3m2!1str!2saz!4v1689856281635!5m2!1str!2saz" width="100%" height="600px" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-9">
                <div className="box-one mb-5">
                <h2>{t("contact.12")}</h2>
                    <div className="box-about">
                     <div className="row">
                     <div className="col-lg-6">
                     <input type="text" id="text" placeholder="Name*"/>
                     </div>
                       <div className="col-lg-6">
                       <input type="text" id="text" placeholder="Last name*"/>
                       </div>
                     </div>
                     <form>
                       <input type="email" placeholder="Email*"/>
                       <input type="subject" placeholder="Subject"/>
                       <textarea name="" id="" cols="112" rows="5" placeholder="Message*"></textarea>
                     </form>
                     <button>Send Message</button>
                    </div>
                </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="box-two">
                  <h5>{t("contact.13")}</h5>
                   <div className="row">
                     <div className="col-lg-12">
                       <ul>
                         <li><i class="fa-solid fa-phone"></i> <span>(200) 554 56 58</span>
                         </li>
                         <li><i class="fa-brands fa-linkedin-in"></i><span>Linkedin</span>
                         </li>
                         <li><i class="fa-brands fa-twitter"></i><span>Twitter</span>
                         </li>
                         <li><i class="fa-brands fa-instagram"></i><span>Instagram</span>
                         </li>
                         <li><i class="fa-solid fa-envelope"></i><span>Email:esmee@gmail.com</span>
                         </li>
                       </ul>
                     </div>
                     <div className="col-lg-12">
                       <h5>Subscribe us</h5>
                    <div className="icons">
                      <div className="facebook">
                      <i class="fa-brands fa-facebook-f"></i>
                      </div>
                      <div className="twitter">
                      <i class="fa-brands fa-twitter"></i>
                      </div>
                      <div className="linkedin">
                      <i class="fa-brands fa-linkedin-in"></i>
                      </div>
                      <div className="instagram">
                      <i class="fa-brands fa-instagram"></i>
                      </div>
                      <div className="pinterest">
                      <i class="fa-brands fa-pinterest"></i>
                      </div>
                    </div>
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

export default Contact
