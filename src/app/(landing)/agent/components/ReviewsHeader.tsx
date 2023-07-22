import React from "react";

export default function ReviewsHeader() {
  return (
    <>
      <div className="col-lg-12">
        <div className="total_review d-flex align-items-center justify-content-between mb20 mt30">
          <h6 className="fz17 mb15">
            <i className="fas fa-star fz12 pe-2"></i>5.0 · 3 reviews
          </h6>
          <div className="page_control_shorting d-flex align-items-center justify-content-center justify-content-sm-end">
            <div className="pcs_dropdown mb15">
              <span style={{ margin: "1rem" }}>Sort by</span>
              <select className="show-tick">
                <option>Newest</option>
                <option>Best Seller</option>
                <option>Best Match</option>
                <option>Price Low</option>
                <option>Price High</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
