import React from 'react'

const SliderFashion = () => {
  return (
    <>
    <section className="slider-fashion">
    <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="sliderimage"></div>
            <div className="carousel-caption d-none d-md-block">
              <h1>,,</h1>
              <h5>Gold collection</h5>
              <h2>Testimonials</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore maxime, incidunt laborum voluptas fuga animi error, repudiandae magni dolorum recusandae placeat voluptatibus porro sit vel iure in nam nihil odio voluptatem, doloremque quaerat! Soluta sed quam nesciunt non atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, maiores in. Libero eaque veritatis sed! .</p>
              <p className="prg">Gwynn Cadogan</p>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="sliderimage"></div>
            <div className="carousel-caption d-none d-md-block">
              <h1>,,</h1>
              <h5>Silver collection</h5>
              <h2>Testimonials</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore maxime, incidunt laborum voluptas fuga animi error, repudiandae magni dolorum recusandae placeat voluptatibus porro sit vel iure in nam nihil odio voluptatem, doloremque quaerat! Soluta sed quam nesciunt non atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, maiores in. Libero eaque veritatis sed! .</p>
              <p className="prg">Kawona Kaori</p>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="sliderimage"></div>
            <div className="carousel-caption d-none d-md-block">
              <h1>,,</h1>
              <h5>Gold collection</h5>
              <h2>Testimonials</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore maxime, incidunt laborum voluptas fuga animi error, repudiandae magni dolorum recusandae placeat voluptatibus porro sit vel iure in nam nihil odio voluptatem, doloremque quaerat! Soluta sed quam nesciunt non atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, maiores in. Libero eaque veritatis sed! .</p>
              <p className="prg">Gwynn Cadogan</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
      
    </>
  )
}

export default SliderFashion
