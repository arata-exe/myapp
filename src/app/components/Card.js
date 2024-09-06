'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const Card = ({ title, text, imageUrl, imageWidth, imageHeight }) => {
  return (
    <div className="card">
      <Image
        src={imageUrl}
        className="card-img-top"
        alt={title}
        width={imageWidth}   // Provide a width for the image
        height={imageHeight} // Provide a height for the image
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
