import React from "react";

interface FeaturedCardProps {
  title: string;
  imageSrc: string;
  tag?: {
    icon: string;
    text: string;
  };
  price: string;
  location: string;
  meta: {
    icon: string;
    text: string;
  }[];
  forWhat: string;
}

const FeaturedCard = ({
  title,
  imageSrc,
  tag,
  price,
  location,
  meta,
  forWhat,
}: FeaturedCardProps) => {
  return (
    <div className="item">
      <div className="listing-style1">
        <div className="list-thumb">
          <img className="w-100" src={imageSrc} alt="" />
          {tag && (
            <div className="list-tag fz12">
              <span className={`${tag.icon} me-2`}></span>
              {tag.text}
            </div>
          )}
          <div className="list-price">
            {price.split("/")[0]} <span>/{price.split("/")[1]}</span>
          </div>
        </div>
        <div className="list-content">
          <h6 className="list-title">
            <a href="page-property-single-v1.html">{title}</a>
          </h6>
          <p className="list-text">{location}</p>
          <div className="list-meta d-flex align-items-center">
            {meta.map((item, index) => {
              return (
                <a key={index} href="">
                  <span className={`${item.icon} me-1`}></span>
                  {item.text}
                </a>
              );
            })}
          </div>
          <hr className="mt-2 mb-2" />
          <div className="list-meta2 d-flex justify-content-between align-items-center">
            <span className="for-what">{forWhat}</span>
            <div className="icons d-flex align-items-center">
              <a href="">
                <span className="flaticon-fullscreen"></span>
              </a>
              <a href="">
                <span className="flaticon-new-tab"></span>
              </a>
              <a href="">
                <span className="flaticon-like"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
