import React from 'react'

const FilterCard = ({filter}) => {
  return (
    <>
      <div className="col-lg-12">
      <div className="card mb-3 filter-card" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={filter.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">{filter.desc}</h4>
              <p className="card-text">{filter.about}</p>
              <p className="card-text price">{filter.price} $</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default FilterCard
