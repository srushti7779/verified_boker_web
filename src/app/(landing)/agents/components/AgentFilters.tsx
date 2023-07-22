import React, { ReactNode } from "react";

const propertyCategoryElementList = [
  "Apartments",
  "Office",
  "Villa",
  "Township",
];

export default function AgentFilters() {
  function PropertyCategoryElement(props: any): ReactNode {
    return (
      <label className="custom_checkbox">
        {props.label}
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    );
  }
  return (
    <>
      {/* Filters for agents */}
      <div className="row align-items-center mb20">
        <div className="col-md-9">
          <div className="agent-page-meta dropdown-lists">

            
            <div className="d-sm-flex">
              <div className="position-relative mb10 mr10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter agent name"
                />
              </div>
              <div className="position-relative mb10 mr10">
                <button
                  type="button"
                  className="open-btn box-shadow-0 dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  All Categories <i className="fa fa-angle-down ms-2"></i>
                </button>
                <div className="dropdown-menu">
                  <div className="widget-wrapper bdrb1 pb25 mb0 pl20">
                    <div className="checkbox-style1">
                      {
                        propertyCategoryElementList.map((element, index) => {
                          return <PropertyCategoryElement key={`Property_Category_Key_${index}`} label={element} />
                        })
                      }
                    </div>
                  </div>
                  <div className="text-end mt10 pr10">
                    <button
                      type="button"
                      className="done-btn box-shadow-0 ud-btn btn-thm dropdown-toggle"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>

              <div className="position-relative mb10">
                <button
                  type="button"
                  className="open-btn mb15 drop_btn"
                  data-bs-toggle="dropdown"
                >
                  All Cities <i className="fa fa-angle-down ms-2"></i>
                </button>
                <div className="drop_content" style={{ display: "none" }}>
                  <div className="widget-wrapper bdrb1 pb25 mb0 p20">
                    <div className="bootselect-multiselect">
                      <select className="selectpicker">
                        <option>All Cities</option>
                        <option data-tokens="California">California</option>
                        <option data-tokens="Chicago">Chicago</option>
                        <option data-tokens="LosAngeles">Los Angeles</option>
                        <option data-tokens="Manhattan">Manhattan</option>
                        <option data-tokens="NewJersey">New Jersey</option>
                        <option data-tokens="NewYork">New York</option>
                        <option data-tokens="SanDiego">San Diego</option>
                        <option data-tokens="SanFrancisco">
                          San Francisco
                        </option>
                        <option data-tokens="Texas">Texas</option>
                      </select>
                    </div>
                  </div>
                  <div className="text-end mt10 pr10">
                    <button
                      type="button"
                      className="done-btn box-shadow-0 ud-btn btn-thm drop_btn"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="col-md-3">
          <div className="page_control_shorting text-start text-md-end mb20">
            <div className="pcs_dropdown pr10">
              <span>Sort by</span>
              <select className="selectpicker show-tick">
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
      {/* Agent filters end */}
    </>
  );
}
