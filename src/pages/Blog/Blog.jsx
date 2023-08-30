import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import BlogCard from './components/BlogCard'
import { useTranslation } from 'react-i18next'

const Blog = () => {
    const {t}=useTranslation()
    const myBlogs=useSelector((store)=>store.AppReducer)
    useEffect(() => {
        localStorage.setItem("Blogs", JSON.stringify(myBlogs));
      },[myBlogs]);
  return (
    <>
    <section className="blog">
    <div className="blog-page">
          <p>
            <NavLink to="/">Home</NavLink> <span>|</span> Blog
          </p>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                  <div className="row all-row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="image">
                        <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/blog-a-300x300.jpg" alt=""/>
                        <h6>{t("blog.0")}</h6>
                        <h4>Sarah Blake</h4>
                        <p>Lorem ipsum dolor sit amet, <br/> conse ctetur adipiscing elit, sed <br/> do eiusmod tepor quis</p>
                        </div>
                      </div>
                      <div className=" col-12 col-sm-12 col-md-12col-lg-12">
                          <div className="categories">
                              <h4>{t("blog.1")}</h4>
                              <ul>
                                  <li>{t("blog.2")}</li>
                                  <li>{t("blog.3")}</li>
                                  <li>{t("blog.4")}</li>
                                  <li>{t("blog.5")}</li>
                              </ul>
                          </div>
                      </div>
                          <div className="recent">
                              <h4>{t("blog.6")}</h4>
                          <div className=" col-lg-12">
                          <div className="card border-0 rounded-0 mb-3">
                            <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/blog-img5-650x650.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <h6 className="card-title">{t("blog.7")}</h6>
                                <p className="card-text">{t("blog.10")}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                          </div>
                          <div className=" col-lg-12">
                          <div className="card border-0 rounded-0 mb-3">
                            <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/blog-img6-650x650.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <h6 className="card-title">{t("blog.8")}</h6>
                                <p className="card-text">{t("blog.10")}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                          </div>
                          <div className=" col-lg-12">
                          <div className="card border-0 rounded-0 mb-3">
                            <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/blog-img8-650x650.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <h6 className="card-title">{t("blog.9")}</h6>
                                <p className="card-text">{t("blog.10")}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                          </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="search">
                              <form>
                                  <input type="search" placeholder="Search"/>
                                  <i class="fa-solid fa-magnifying-glass"></i>
                              </form>
                          </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="follow">
                                <h4>Follow us:</h4>
                                <ul>
                                    <li><i class="fa-brands fa-instagram"></i>Instagram</li>
                                    <li><i class="fa-brands fa-youtube"></i>Youtube</li>
                                    <li><i class="fa-brands fa-facebook-f"></i>Facebook</li>
                                    <li><i class="fa-brands fa-pinterest-p"></i>Pinterest</li>
                                </ul>
                            </div>
                        </div>

                      </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-9">
               <div className="row">
                   <div className=" col-12 col-sm-12 col-md-12 col-lg-12">
                   <div className="imgs">
                 <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/blog-img1.jpg" alt=""/>
                 <h6>{t("blog.11")}</h6>
                 <h2>{t("blog.12")}</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis ipsum suspendisse ultrices. Ipsum consequat nisl vel pretium. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque</p>
                 <NavLink>{t("blog.13")}<i class="fa-solid fa-arrow-right"></i></NavLink>
                 </div>
                   </div>
                   <div className=" col-12 col-sm-12 col-md-12col-lg-12">
                       <div className="box-one">
                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit soluta corporis delectus distinctio nihil natus nemo velit cupiditate numquam, repellat vero voluptate quam eos? Nostrum.</p>
                           <h4>Sarah blake</h4>
                       </div>
                   </div>

                   <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                   <div className="imgs">
                 <img src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/blog-img2.jpg" alt=""/>
                 <h6>{t("blog.14")}</h6>
                 <h2>{t("blog.15")}</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis ipsum suspendisse ultrices. Ipsum consequat nisl vel pretium. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque</p>
                 <NavLink>{t("blog.13")}<i class="fa-solid fa-arrow-right"></i></NavLink>
                 </div>
                   </div>
                   <div className=" col-12 col-sm-12 col-md-12 col-lg-12">
                       <div className="box-two">
                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                       </div>
                   </div>
               
               {
                   myBlogs.map((item,index)=>{
                       return <BlogCard myBlog={item} key={index}/>
                   })
               }
                   
               </div>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Blog
