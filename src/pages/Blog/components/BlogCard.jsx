import React from 'react'

const BlogCard = ({myBlog}) => {
  return (
    <>
      <div className="col-lg-12">
                   <div className="card border-0 rounded-0 mt-5">
                 <img src={myBlog.img} className="card-img-top" alt="..." style={{width:"955px", height:"524px",objectFit:"cover"}} />
                 <div className="card-body">
                  <h5 className="card-title">{myBlog.title}</h5>
                  <p className="card-text">{myBlog.desc}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCard
