'use client'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

const Carousel = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min');
    }
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <video className="d-block w-100" autoPlay loop muted>
            <source src="https://cdn-webth.garenanow.com/webth/cdn/fconline/mainsite/video_bg_mobile.mp4" type="video/mp4" /> 
          </video>
          <div className="carousel-caption d-md-block text-center" >
            <img src="/images/fc.png" style={{ maxWidth: '600px', height: 'auto' }} alt="Slide 1" className="d-block w-100 mx-auto" />
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/slider2.jpg" className="d-block w-100 mx-auto" style={{ maxWidth: '1600px', height: 'auto' }} alt="Slide 2"/>
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/slider3.webp" className="d-block w-100 mx-auto "style={{ maxWidth: '1600px', height: 'auto' }} alt="Slide 3"/>
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
