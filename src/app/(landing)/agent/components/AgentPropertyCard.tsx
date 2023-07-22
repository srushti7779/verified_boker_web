import React from "react";

export default function AgentPropertyCard({
  imgSrc,
  price,
  propertyName,
  propertyAddress,
  bedroomCount,
  bathroomCount,
  area,
  propertyStatus,
  featured,
}: {
  imgSrc: string;
  price: string;
  propertyName: string;
  propertyAddress: string;
  bedroomCount: number;
  bathroomCount: number;
  area: number;
  propertyStatus: string;
  featured : boolean;
}) {
  return (
    <>
      <div className="col-md-6">
        <div className="listing-style1">
          <div className="list-thumb">
            <img className="w-100" src={imgSrc} alt="" />
            {featured && <div className="list-tag fz12">
              <span className="flaticon-electricity me-2"></span>
              FEATURED
            </div>}
            <div className="list-price">
              {price} / <span>mo</span>
            </div>
          </div>
          <div className="list-content">
            <h6 className="list-title">
              <a href="page-property-single-v1.html">{propertyName}</a>
            </h6>
            <p className="list-text">{propertyAddress}</p>
            <div className="list-meta d-flex align-items-center">
              <a href="">
                <span className="flaticon-bed"></span>
                {bedroomCount} bed
              </a>
              <a href="">
                <span className="flaticon-shower"></span>
                {bathroomCount} bath
              </a>
              <a href="">
                <span className="flaticon-expand"></span>
                {area} sqft
              </a>
            </div>
            <hr className="mt-2 mb-2" />
            <div className="list-meta2 d-flex justify-content-between align-items-center">
              <span className="for-what">{propertyStatus}</span>
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
    </>
  );
}
