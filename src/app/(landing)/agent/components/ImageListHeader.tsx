"use client";
import React from "react";

export default function ImageListHeader({setPropertyFilter, propertyFilter} : {setPropertyFilter : Function, propertyFilter : string}) {
  return (
    <>
      <div className="col-sm-4">
        <h6 className="fz17">Listing 27</h6>
      </div>
      <div className="col-sm-8">
        <div className="dark-light-navtab style4 mt-0 mt-lg-4 mb30">
          <ul
            className="nav nav-pills justify-content-start justify-content-sm-end"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${propertyFilter === 'All' ? 'active' : ''}`}
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                onClick={() => { console.log('Clicked'); setPropertyFilter('All')}}
              >
                All
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${propertyFilter === 'For Rent' ? 'active' : ''}`}
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                onClick={() => setPropertyFilter('For Rent')}
              >
                For Rent
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link me-0 ${propertyFilter === 'For Sale' ? 'active' : ''}`}
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
                onClick={() => setPropertyFilter('For Sale')}
              >
                For Sale
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
