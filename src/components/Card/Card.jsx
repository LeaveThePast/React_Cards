import React from 'react';

const Card = ({ imageSrc, title, children, buttonLink, buttonText }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {imageSrc && <img src={imageSrc} className="card-img-top" alt="..." />}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        <p className="card-text">{children}</p>
        {buttonLink && buttonText && (
          <a href={buttonLink} className="btn btn-primary">
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
