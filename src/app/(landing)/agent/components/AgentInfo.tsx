import React from "react";

export default function AgentInfo() {
  return (
    <>
      <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs12 p30 mt30">
        <div className="widget-wrapper mb-0">
          <h6 className="title fz17 mb35">Professional Information</h6>
          <div className="list-news-style d-flex align-items-center justify-content-between mb10">
            <div className="flex-shrink-0">
              <h6 className="fz14 mb-0">Broker address</h6>
            </div>
            <div className="news-content flex-shrink-1 ms-3 text-end">
              <p className="text mb-0 fz14">House on the Northridge</p>
            </div>
          </div>
          <div className="list-news-style d-flex align-items-center justify-content-between mb10">
            <div className="flex-shrink-0">
              <h6 className="fz14 mb-0">Office</h6>
            </div>
            <div className="news-content flex-shrink-1 ms-3 text-end">
              <p className="text mb-0 fz14">(484) 524-3699</p>
            </div>
          </div>
          <div className="list-news-style d-flex align-items-center justify-content-between mb10">
            <div className="flex-shrink-0">
              <h6 className="fz14 mb-0">Mobile</h6>
            </div>
            <div className="news-content flex-shrink-1 ms-3 text-end">
              <p className="text mb-0 fz14">(484) 524-7963</p>
            </div>
          </div>
          <div className="list-news-style d-flex align-items-center justify-content-between mb10">
            <div className="flex-shrink-0">
              <h6 className="fz14 mb-0">Fax</h6>
            </div>
            <div className="news-content flex-shrink-1 ms-3 text-end">
              <p className="text mb-0 fz14">(484) 524-1023</p>
            </div>
          </div>
          <div className="list-news-style d-flex align-items-center justify-content-between mb10">
            <div className="flex-shrink-0">
              <h6 className="fz14 mb-0">Websites</h6>
            </div>
            <div className="news-content flex-shrink-1 ms-3 text-end">
              <p className="text mb-0 fz14">www.realton.com</p>
            </div>
          </div>
          <div className="list-news-style d-flex align-items-center justify-content-between">
            <div className="flex-shrink-0">
              <h6 className="fz14 mb-0">Member since</h6>
            </div>
            <div className="news-content flex-shrink-1 ms-3 text-end">
              <p className="text mb-0 fz14">10-01-2022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
