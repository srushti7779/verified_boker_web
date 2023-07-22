"use client";

import SignupModal from "./components/SignupModal";

const PropertiesPage = () => {
  return (
    <>
      <div className="wrapper ovh">
        <SignupModal />

        <div className="lefttside-hidden-bar">
          <div className="hsidebar-header">
            <div className="sidebar-close-icon">
              <span className="far fa-times"></span>
            </div>
          </div>
          <div className="hsidebar-content">
            <div className="widget-wrapper">
              <h6 className="list-title">Find your home</h6>
              <div className="search_area">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What are you looking for?"
                />
                <label>
                  <span className="flaticon-search"></span>
                </label>
              </div>
            </div>
            <div className="widget-wrapper">
              <h6 className="list-title">Listing Status</h6>
              <div className="radio-element">
                <div className="form-check d-flex align-items-center mb10">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault4"
                  >
                    Buy
                  </label>
                </div>
                <div className="form-check d-flex align-items-center mb10">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault5"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault5"
                  >
                    Rent
                  </label>
                </div>
                <div className="form-check d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault6"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault6"
                  >
                    Sold
                  </label>
                </div>
              </div>
            </div>
            <div className="widget-wrapper">
              <h6 className="list-title">Property Type</h6>
              <div className="checkbox-style1">
                <label className="custom_checkbox">
                  Houses
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="custom_checkbox">
                  Apartments
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark"></span>
                </label>
                <label className="custom_checkbox">
                  Office
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="custom_checkbox">
                  Villa
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="custom_checkbox">
                  Townhome
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="widget-wrapper">
              <h6 className="list-title">Price Range</h6>
              <div className="range-slider-style2">
                <div className="range-wrapper">
                  <div className="mb30 mt35" id="slider"></div>
                  <div className="d-flex align-items-center">
                    <span id="slider-range-value1"></span>
                    <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon"></i>
                    <span id="slider-range-value2"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget-wrapper">
              <h6 className="list-title">Bedrooms</h6>
              <div className="d-flex">
                <div className="selection">
                  <input id="any2" name="beds" type="radio" defaultChecked />
                  <label htmlFor="any2">any</label>
                </div>
                <div className="selection">
                  <input id="oneplus2" name="beds" type="radio" />
                  <label htmlFor="oneplus2">1+</label>
                </div>
                <div className="selection">
                  <input id="twoplus2" name="beds" type="radio" />
                  <label htmlFor="twoplus2">2+</label>
                </div>
                <div className="selection">
                  <input id="threeplus2" name="beds" type="radio" />
                  <label htmlFor="threeplus2">3+</label>
                </div>
                <div className="selection">
                  <input id="fourplus2" name="beds" type="radio" />
                  <label htmlFor="fourplus2">4+</label>
                </div>
                <div className="selection">
                  <input id="fiveplus2" name="beds" type="radio" />
                  <label htmlFor="fiveplus2">5+</label>
                </div>
              </div>
            </div>
            <div className="widget-wrapper">
              <h6 className="list-title">Bathrooms</h6>
              <div className="d-flex">
                <div className="selection">
                  <input
                    id="bathany2"
                    name="bath"
                    type="radio"
                    defaultChecked
                  />
                  <label htmlFor="bathany2">any</label>
                </div>
                <div className="selection">
                  <input id="bathoneplus2" name="bath" type="radio" />
                  <label htmlFor="bathoneplus2">1+</label>
                </div>
                <div className="selection">
                  <input id="bathtwoplus2" name="bath" type="radio" />
                  <label htmlFor="bathtwoplus2">2+</label>
                </div>
                <div className="selection">
                  <input id="baththreeplus2" name="bath" type="radio" />
                  <label htmlFor="baththreeplus2">3+</label>
                </div>
                <div className="selection">
                  <input id="bathfourplus2" name="bath" type="radio" />
                  <label htmlFor="bathfourplus2">4+</label>
                </div>
                <div className="selection">
                  <input id="bathfiveplus2" name="bath" type="radio" />
                  <label htmlFor="bathfiveplus2">5+</label>
                </div>
              </div>
            </div>
            <div className="widget-wrapper advance-feature-modal">
              <h6 className="list-title">Location</h6>
              <div className="form-style2 input-group">
                <select className="selectpicker" data-width="100%">
                  <option>All Cities</option>
                  <option data-tokens="California">California</option>
                  <option data-tokens="Chicago">Chicago</option>
                  <option data-tokens="LosAngeles">Los Angeles</option>
                  <option data-tokens="Manhattan">Manhattan</option>
                  <option data-tokens="NewJersey">New Jersey</option>
                  <option data-tokens="NewYork">New York</option>
                  <option data-tokens="SanDiego">San Diego</option>
                  <option data-tokens="SanFrancisco">San Francisco</option>
                  <option data-tokens="Texas">Texas</option>
                </select>
              </div>
            </div>
            <div className="widget-wrapper">
              <h6 className="list-title">Square Feet</h6>
              <div className="space-area">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="form-style1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Min."
                    />
                  </div>
                  <span className="dark-color">-</span>
                  <div className="form-style1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Max"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="widget-wrapper">
              <h6 className="list-title">Year Built</h6>
              <div className="space-area">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="form-style1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="2019"
                    />
                  </div>
                  <span className="dark-color">-</span>
                  <div className="form-style1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="2022"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="widget-wrapper">
              <div className="feature-accordion">
                <div className="accordion" id="accordionExample2">
                  <div className="accordion-item border-none">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button border-none p-0 after-none feature-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        <span className="flaticon-settings"></span> Other
                        Features
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body p-0 mt15">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="checkbox-style1">
                              <label className="custom_checkbox">
                                Attic
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="custom_checkbox">
                                Basketball court
                                <input type="checkbox" defaultChecked />
                                <span className="checkmark"></span>
                              </label>
                              <label className="custom_checkbox">
                                Air Conditioning
                                <input type="checkbox" defaultChecked />
                                <span className="checkmark"></span>
                              </label>
                              <label className="custom_checkbox">
                                Lawn
                                <input type="checkbox" defaultChecked />
                                <span className="checkmark"></span>
                              </label>
                              <label className="custom_checkbox">
                                TV Cable
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="custom_checkbox">
                                Dryer
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="checkbox-style1">
                              <label className="custom_checkbox">
                                Outdoor Shower
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="custom_checkbox">
                                Washer
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="custom_checkbox">
                                Lake view
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="custom_checkbox">
                                Wine cellar
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="custom_checkbox">
                                Front yard
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                              <label className="custom_checkbox">
                                Refrigerator
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget-wrapper mb20">
              <div className="btn-area d-grid align-items-center">
                <button className="ud-btn btn-thm">
                  <span className="flaticon-search align-text-top pr10"></span>
                  Search
                </button>
              </div>
            </div>
            <div className="reset-area d-flex align-items-center justify-content-between">
              <a className="reset-button" href="#">
                <span className="flaticon-turn-back"></span>
                <u>Reset all filters</u>
              </a>
              <a className="reset-button" href="#">
                <span className="flaticon-favourite"></span>
                <u>Save Search</u>
              </a>
            </div>
          </div>
        </div>

        <div className="hiddenbar-body-ovelay"></div>

        <div className="body_content">
          <section className="breadcumb-section bgc-f7">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="breadcumb-style1">
                    <h2 className="title">New York Homes for Sale</h2>
                    <div className="breadcumb-list">
                      <a href="">Home</a>
                      <a href="">For Rent</a>
                    </div>
                    <a
                      href=""
                      className="filter-btn-left mobile-filter-btn d-block d-lg-none"
                    >
                      <span className="flaticon-settings"></span> Filter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt0 pb90 bgc-f7">
            <div className="container">
              <div className="row gx-xl-5">
                <div className="col-lg-4 d-none d-lg-block">
                  <div className="list-sidebar-style1">
                    <div className="widget-wrapper">
                      <h6 className="list-title">Find your home</h6>
                      <div className="search_area">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="What are you looking for?"
                        />
                        <label>
                          <span className="flaticon-search"></span>
                        </label>
                      </div>
                    </div>
                    <div className="widget-wrapper">
                      <h6 className="list-title">Listing Status</h6>
                      <div className="radio-element">
                        <div className="form-check d-flex align-items-center mb10">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Buy
                          </label>
                        </div>
                        <div className="form-check d-flex align-items-center mb10">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Rent
                          </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault3"
                          >
                            Sold
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="widget-wrapper">
                      <h6 className="list-title">Property Type</h6>
                      <div className="checkbox-style1">
                        <label className="custom_checkbox">
                          Houses
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="custom_checkbox">
                          Apartments
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark"></span>
                        </label>
                        <label className="custom_checkbox">
                          Office
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="custom_checkbox">
                          Villa
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="custom_checkbox">
                          Townhome
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div className="widget-wrapper">
                      <h6 className="list-title">Price Range</h6>
                      <div className="range-slider-style1">
                        <div className="range-wrapper">
                          <div className="slider-range mt30 mb20"></div>
                          <div className="text-center">
                            <input
                              type="text"
                              className="amount"
                              placeholder="$20"
                            />
                            <span className="fa-sharp fa-solid fa-minus mx-2 dark-color"></span>
                            <input
                              type="text"
                              className="amount2"
                              placeholder="$70987"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-wrapper">
                      <h6 className="list-title">Bedrooms</h6>
                      <div className="d-flex">
                        <div className="selection">
                          <input
                            id="any"
                            name="beds"
                            type="radio"
                            defaultChecked
                          />
                          <label htmlFor="any">any</label>
                        </div>
                        <div className="selection">
                          <input id="oneplus" name="beds" type="radio" />
                          <label htmlFor="oneplus">1+</label>
                        </div>
                        <div className="selection">
                          <input id="twoplus" name="beds" type="radio" />
                          <label htmlFor="twoplus">2+</label>
                        </div>
                        <div className="selection">
                          <input id="threeplus" name="beds" type="radio" />
                          <label htmlFor="threeplus">3+</label>
                        </div>
                        <div className="selection">
                          <input id="fourplus" name="beds" type="radio" />
                          <label htmlFor="fourplus">4+</label>
                        </div>
                        <div className="selection">
                          <input id="fiveplus" name="beds" type="radio" />
                          <label htmlFor="fiveplus">5+</label>
                        </div>
                      </div>
                    </div>
                    <div className="widget-wrapper">
                      <h6 className="list-title">Bathrooms</h6>
                      <div className="d-flex">
                        <div className="selection">
                          <input
                            id="bathany"
                            name="bath"
                            type="radio"
                            defaultChecked
                          />
                          <label htmlFor="bathany">any</label>
                        </div>
                        <div className="selection">
                          <input id="bathoneplus" name="bath" type="radio" />
                          <label htmlFor="bathoneplus">1+</label>
                        </div>
                        <div className="selection">
                          <input id="bathtwoplus" name="bath" type="radio" />
                          <label htmlFor="bathtwoplus">2+</label>
                        </div>
                        <div className="selection">
                          <input id="baththreeplus" name="bath" type="radio" />
                          <label htmlFor="baththreeplus">3+</label>
                        </div>
                        <div className="selection">
                          <input id="bathfourplus" name="bath" type="radio" />
                          <label htmlFor="bathfourplus">4+</label>
                        </div>
                        <div className="selection">
                          <input id="bathfiveplus" name="bath" type="radio" />
                          <label htmlFor="bathfiveplus">5+</label>
                        </div>
                      </div>
                    </div>
                    <div className="widget-wrapper advance-feature-modal">
                      <h6 className="list-title">Location</h6>
                      <div className="form-style2 input-group">
                        <select className="selectpicker" data-width="100%">
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
                    <div className="widget-wrapper">
                      <h6 className="list-title">Square Feet</h6>
                      <div className="space-area">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="form-style1">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Min."
                            />
                          </div>
                          <span className="dark-color">-</span>
                          <div className="form-style1">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Max"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-wrapper">
                      <h6 className="list-title">Year Built</h6>
                      <div className="space-area">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="form-style1">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="2019"
                            />
                          </div>
                          <span className="dark-color">-</span>
                          <div className="form-style1">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="2022"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-wrapper">
                      <div className="feature-accordion">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item border-none">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button border-none p-0 after-none feature-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                <span className="flaticon-settings"></span>{" "}
                                Other Features
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body p-0 mt15">
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="checkbox-style1">
                                      <label className="custom_checkbox">
                                        Attic
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                      </label>
                                      <label className="custom_checkbox">
                                        Basketball court
                                        <input type="checkbox" defaultChecked />
                                        <span className="checkmark"></span>
                                      </label>
                                      <label className="custom_checkbox">
                                        Air Conditioning
                                        <input type="checkbox" defaultChecked />
                                        <span className="checkmark"></span>
                                      </label>
                                      <label className="custom_checkbox">
                                        Lawn
                                        <input type="checkbox" defaultChecked />
                                        <span className="checkmark"></span>
                                      </label>
                                      <label className="custom_checkbox">
                                        TV Cable
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                      </label>
                                      <label className="custom_checkbox">
                                        Dryer
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="checkbox-style1">
                                      <label className="custom_checkbox">
                                        Outdoor Shower
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                      </label>
                                      <label className="custom_checkbox">
                                        Washer
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                      </label>
                                      <label className="custom_checkbox">
                                        Lake view
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                      </label>
                                      <label className="custom_checkbox">
                                        Wine cellar
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                      </label>
                                      <label className="custom_checkbox">
                                        Front yard
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                      </label>
                                      <label className="custom_checkbox">
                                        Refrigerator
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-wrapper mb20">
                      <div className="btn-area d-grid align-items-center">
                        <button className="ud-btn btn-thm">
                          <span className="flaticon-search align-text-top pr10"></span>
                          Search
                        </button>
                      </div>
                    </div>
                    <div className="reset-area d-flex align-items-center justify-content-between">
                      <a className="reset-button" href="#">
                        <span className="flaticon-turn-back"></span>
                        <u>Reset all filters</u>
                      </a>
                      <a className="reset-button" href="#">
                        <span className="flaticon-favourite"></span>
                        <u>Save Search</u>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row align-items-center mb20">
                    <div className="col-sm-6">
                      <div className="text-center text-sm-start">
                        <p className="pagination_page_count mb-0">
                          Showing 1–10 of 13 results
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="page_control_shorting d-flex align-items-center justify-content-center justify-content-sm-end">
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
                        <a
                          className="pl15 pr15 bdrl1 bdrr1 d-none d-md-block"
                          href=""
                        >
                          Grid
                        </a>
                        <a className="pl15 d-none d-md-block" href="">
                          List
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row mt15">
                    <div className="col-sm-6 col-lg-6">
                      <div className="listing-style1">
                        <div className="list-thumb">
                          <img
                            className="w-100"
                            src="images/listings/g1-1.jpg"
                            alt=""
                          />
                          <div className="list-tag fz12">
                            <span className="flaticon-electricity me-2"></span>
                            FEATURED
                          </div>
                          <div className="list-price">
                            $14,000 / <span>mo</span>
                          </div>
                        </div>
                        <div className="list-content">
                          <h6 className="list-title">
                            <a href="page-property-single-v1.html">
                              Equestrian Family Home
                            </a>
                          </h6>
                          <p className="list-text">California City, CA, USA</p>
                          <div className="list-meta d-flex align-items-center">
                            <a href="">
                              <span className="flaticon-bed"></span>3 bed
                            </a>
                            <a href="">
                              <span className="flaticon-shower"></span>4 bath
                            </a>
                            <a href="">
                              <span className="flaticon-expand"></span>1200 sqft
                            </a>
                          </div>
                          <hr className="mt-2 mb-2" />
                          <div className="list-meta2 d-flex justify-content-between align-items-center">
                            <span className="for-what">For Rent</span>
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
                    <div className="col-sm-6 col-lg-6">
                      <div className="listing-style1">
                        <div className="list-thumb">
                          <img
                            className="w-100"
                            src="images/listings/g1-2.jpg"
                            alt=""
                          />
                          <div className="list-price">
                            $82,000 / <span>mo</span>
                          </div>
                        </div>
                        <div className="list-content">
                          <h6 className="list-title">
                            <a href="page-property-single-v1.html">
                              Luxury villa in Rego Park
                            </a>
                          </h6>
                          <p className="list-text">California City, CA, USA</p>
                          <div className="list-meta d-flex align-items-center">
                            <a href="">
                              <span className="flaticon-bed"></span>3 bed
                            </a>
                            <a href="">
                              <span className="flaticon-shower"></span>4 bath
                            </a>
                            <a href="">
                              <span className="flaticon-expand"></span>1200 sqft
                            </a>
                          </div>
                          <hr className="mt-2 mb-2" />
                          <div className="list-meta2 d-flex justify-content-between align-items-center">
                            <span className="for-what">For Rent</span>
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
                    <div className="col-sm-6 col-lg-6">
                      <div className="listing-style1">
                        <div className="list-thumb">
                          <img
                            className="w-100"
                            src="images/listings/g1-3.jpg"
                            alt=""
                          />
                          <div className="list-price">
                            $63,000 / <span>mo</span>
                          </div>
                        </div>
                        <div className="list-content">
                          <h6 className="list-title">
                            <a href="page-property-single-v1.html">
                              Villa on Hollywood Boulevard
                            </a>
                          </h6>
                          <p className="list-text">California City, CA, USA</p>
                          <div className="list-meta d-flex align-items-center">
                            <a href="">
                              <span className="flaticon-bed"></span>3 bed
                            </a>
                            <a href="">
                              <span className="flaticon-shower"></span>4 bath
                            </a>
                            <a href="">
                              <span className="flaticon-expand"></span>1200 sqft
                            </a>
                          </div>
                          <hr className="mt-2 mb-2" />
                          <div className="list-meta2 d-flex justify-content-between align-items-center">
                            <span className="for-what">For Rent</span>
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
                    <div className="col-sm-6 col-lg-6">
                      <div className="listing-style1">
                        <div className="list-thumb">
                          <img
                            className="w-100"
                            src="images/listings/g1-4.jpg"
                            alt=""
                          />
                          <div className="list-price">
                            $63,000 / <span>mo</span>
                          </div>
                        </div>
                        <div className="list-content">
                          <h6 className="list-title">
                            <a href="page-property-single-v1.html">
                              Triple Story House for Rent
                            </a>
                          </h6>
                          <p className="list-text">California City, CA, USA</p>
                          <div className="list-meta d-flex align-items-center">
                            <a href="">
                              <span className="flaticon-bed"></span>3 bed
                            </a>
                            <a href="">
                              <span className="flaticon-shower"></span>4 bath
                            </a>
                            <a href="">
                              <span className="flaticon-expand"></span>1200 sqft
                            </a>
                          </div>
                          <hr className="mt-2 mb-2" />
                          <div className="list-meta2 d-flex justify-content-between align-items-center">
                            <span className="for-what">For Rent</span>
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
                    <div className="col-sm-6 col-lg-6">
                      <div className="listing-style1">
                        <div className="list-thumb">
                          <img
                            className="w-100"
                            src="images/listings/g1-5.jpg"
                            alt=""
                          />
                          <div className="list-price">
                            $14,000 / <span>mo</span>
                          </div>
                        </div>
                        <div className="list-content">
                          <h6 className="list-title">
                            <a href="page-property-single-v1.html">
                              Northwest Office Space
                            </a>
                          </h6>
                          <p className="list-text">California City, CA, USA</p>
                          <div className="list-meta d-flex align-items-center">
                            <a href="">
                              <span className="flaticon-bed"></span>3 bed
                            </a>
                            <a href="">
                              <span className="flaticon-shower"></span>4 bath
                            </a>
                            <a href="">
                              <span className="flaticon-expand"></span>1200 sqft
                            </a>
                          </div>
                          <hr className="mt-2 mb-2" />
                          <div className="list-meta2 d-flex justify-content-between align-items-center">
                            <span className="for-what">For Rent</span>
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
                    <div className="col-sm-6 col-lg-6">
                      <div className="listing-style1">
                        <div className="list-thumb">
                          <img
                            className="w-100"
                            src="images/listings/g1-6.jpg"
                            alt=""
                          />
                          <div className="list-price">
                            $82,000 / <span>mo</span>
                          </div>
                        </div>
                        <div className="list-content">
                          <h6 className="list-title">
                            <a href="page-property-single-v1.html">
                              House on the beverly hills
                            </a>
                          </h6>
                          <p className="list-text">California City, CA, USA</p>
                          <div className="list-meta d-flex align-items-center">
                            <a href="">
                              <span className="flaticon-bed"></span>3 bed
                            </a>
                            <a href="">
                              <span className="flaticon-shower"></span>4 bath
                            </a>
                            <a href="">
                              <span className="flaticon-expand"></span>1200 sqft
                            </a>
                          </div>
                          <hr className="mt-2 mb-2" />
                          <div className="list-meta2 d-flex justify-content-between align-items-center">
                            <span className="for-what">For Rent</span>
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
                    <div className="col-sm-6 col-lg-6">
                      <div className="listing-style1">
                        <div className="list-thumb">
                          <img
                            className="w-100"
                            src="images/listings/g1-7.jpg"
                            alt=""
                          />
                          <div className="list-price">
                            $63,000 / <span>mo</span>
                          </div>
                        </div>
                        <div className="list-content">
                          <h6 className="list-title">
                            <a href="page-property-single-v1.html">
                              Luxury villa called Elvado
                            </a>
                          </h6>
                          <p className="list-text">California City, CA, USA</p>
                          <div className="list-meta d-flex align-items-center">
                            <a href="">
                              <span className="flaticon-bed"></span>3 bed
                            </a>
                            <a href="">
                              <span className="flaticon-shower"></span>4 bath
                            </a>
                            <a href="">
                              <span className="flaticon-expand"></span>1200 sqft
                            </a>
                          </div>
                          <hr className="mt-2 mb-2" />
                          <div className="list-meta2 d-flex justify-content-between align-items-center">
                            <span className="for-what">For Rent</span>
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
                    <div className="col-sm-6 col-lg-6">
                      <div className="listing-style1">
                        <div className="list-thumb">
                          <img
                            className="w-100"
                            src="images/listings/g1-8.jpg"
                            alt=""
                          />
                          <div className="list-price">
                            $63,000 / <span>mo</span>
                          </div>
                        </div>
                        <div className="list-content">
                          <h6 className="list-title">
                            <a href="page-property-single-v1.html">
                              House on the Northridge
                            </a>
                          </h6>
                          <p className="list-text">California City, CA, USA</p>
                          <div className="list-meta d-flex align-items-center">
                            <a href="">
                              <span className="flaticon-bed"></span>3 bed
                            </a>
                            <a href="">
                              <span className="flaticon-shower"></span>4 bath
                            </a>
                            <a href="">
                              <span className="flaticon-expand"></span>1200 sqft
                            </a>
                          </div>
                          <hr className="mt-2 mb-2" />
                          <div className="list-meta2 d-flex justify-content-between align-items-center">
                            <span className="for-what">For Rent</span>
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
                  </div>
                  <div className="row">
                    <div className="mbp_pagination text-center">
                      <ul className="page_navigation">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            {" "}
                            <span className="fas fa-angle-left"></span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item active" aria-current="page">
                          <a className="page-link" href="#">
                            2 <span className="sr-only">(current)</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            4
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            5
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            ...
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            20
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            <span className="fas fa-angle-right"></span>
                          </a>
                        </li>
                      </ul>
                      <p className="mt10 pagination_page_count text-center">
                        1 – 20 of 300+ property available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <a className="scrollToHome" href="#">
            <i className="fas fa-angle-up"></i>
          </a>
        </div>
      </div>

      <script src="/scripts/jquery-3.6.4.min.js"></script>
      <script src="/scripts/jquery-migrate-3.0.0.min.js"></script>
      <script src="/scripts/popper.min.js"></script>
      <script src="/scripts/bootstrap.min.js"></script>
      <script src="/scripts/bootstrap-select.min.js"></script>
      <script src="/scripts/jquery.mmenu.all.js"></script>
      <script src="/scripts/ace-responsive-menu.js"></script>
      <script src="/scripts/jquery-scrolltofixed-min.js"></script>
      <script src="/scripts/wow.min.js"></script>
      <script src="/scripts/pricing-slider.js"></script>
      <script src="/scripts/script.js"></script>
    </>
  );
};

export default PropertiesPage;
