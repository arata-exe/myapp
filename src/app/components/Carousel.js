'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Image from 'next/image';

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
          <div className="carousel-caption d-md-block text-center">
            <Image
              src="/images/fc.png"
              alt="Slide 1"
              layout="responsive"
              width={600}
              height={auto}  // Provide a specific height or use aspect ratio
              className="d-block mx-auto"
            />
          </div>
        </div>
        <div className="carousel-item">
          <Image
            src="/images/slider2.jpg"
            alt="Slide 2"
            layout="responsive"
            width={1600}
            height={auto}  // Provide a specific height or use aspect ratio
            className="d-block mx-auto"
          />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <Image
            src="/images/slider3.webp"
            alt="Slide 3"
            layout="responsive"
            width={1600}
            height={auto}  // Provide a specific height or use aspect ratio
            className="d-block mx-auto"
          />
          <div className="carousel-caption d-none d-md-block"></div>
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
