import React from 'react'

const SingleCard = ({product}) => {
  return (
    <>
      <div className="col-lg-12" >
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={product.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">{product.title}</h4>
              <p className="card-text">{product.about}</p>
              <p className="price">{product.price}$</p>
              <button onClick={()=>{window.history.back()}}>Back <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default SingleCard
