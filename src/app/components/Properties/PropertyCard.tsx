import React from "react";

interface PropertyCardProps {
  imageUrl: string;
  city: string;
  numProperties: number;
}

const PropertyCard = ({ imageUrl, city, numProperties }: PropertyCardProps) => {
  return (
    <div className="item">
      <div className="feature-style1 mb30">
        <div className="feature-img">
          <img className="w-100" src={imageUrl} alt="" />
        </div>
        <div className="feature-content">
          <div className="top-area">
            <h6 className="title mb-1">{city}</h6>
            <p className="text">{numProperties} Properties</p>
          </div>
          <div className="bottom-area">
            <a className="ud-btn2" href="/">
              See All Cities
              <i className="fal fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
