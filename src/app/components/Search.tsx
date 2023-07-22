import React from "react";

const Search = () => {
  return (
    <section className="pt-0 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="advance-style4 at-home5 mt-100 mt50-lg mb10 mx-auto animate-up-2">
              <ul className="nav nav-tabs p-0 m-0" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Buy
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Rent
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Sold
                  </button>
                </li>
              </ul>
              <div className="tab-content shadow-lg" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="advance-content-style3 at-home5">
                    <div className="row align-items-center">
                      <div className="col-md-4 col-xl-3 bdrr1 bdrrn-sm">
                        <label>Search</label>
                        <div className="advance-search-field position-relative text-start">
                          <form
                            action="#"
                            method="get"
                            className="form-search position-relative"
                            acceptCharset="utf-8"
                          >
                            <div className="box-search">
                              <input
                                className="form-control bgc-f7 bdrs12 ps-0"
                                type="text"
                                name="search"
                                placeholder="Enter Keywords"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                        <div className="mt-3 mt-md-0 px-0">
                          <div className="bootselect-multiselect">
                            <label className="fz14">Loking For</label>
                            <select className="selectpicker">
                              <option>Property Type</option>
                              <option>Apartments</option>
                              <option>Bungalow</option>
                              <option>Houses</option>
                              <option>Loft</option>
                              <option>Office</option>
                              <option>TownHome</option>
                              <option>Villa</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                        <div className="mt-3 mt-md-0">
                          <div className="bootselect-multiselect">
                            <label className="fz14">Location</label>
                            <select className="selectpicker">
                              <option>New York</option>
                              <option>Los Angeles</option>
                              <option>London</option>
                              <option>Paris</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                        <div className="mt-3 mt-md-0">
                          <div className="dropdown-lists">
                            <label className="fz14 mb-1">Price</label>
                            <div
                              className="btn open-btn text-start dropdown-toggle"
                              data-bs-toggle="dropdown"
                            >
                              $15,000 <i className="fas fa-caret-down"></i>
                            </div>
                            <div className="dropdown-menu">
                              <div className="widget-wrapper pb20 mb0 pl20 pr20">
                                {/* Range Slider Mobile Version */}
                                <div className="range-slider-style2">
                                  <div className="range-wrapper at-home10">
                                    <div className="slider-range mb30 mt35"></div>
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
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="d-flex align-items-center justify-content-start justify-content-lg-center mt-2 mt-md-0">
                          <button
                            className="advance-search-btn"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <span className="flaticon-settings"></span> Advanced
                          </button>
                          <button className="ud-btn btn-thm ms-2" type="button">
                            <span className="flaticon-search pe-2"></span>{" "}
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="advance-content-style3 at-home5">
                    <div className="row align-items-center">
                      <div className="col-md-4 col-xl-3 bdrr1 bdrrn-sm">
                        <label>Search</label>
                        <div className="advance-search-field position-relative text-start">
                          <form
                            action="#"
                            method="get"
                            className="form-search position-relative"
                            acceptCharset="utf-8"
                          >
                            <div className="box-search">
                              <input
                                className="form-control bgc-f7 bdrs12 ps-0"
                                type="text"
                                name="search"
                                placeholder="Enter Keywords"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                        <div className="mt-3 mt-md-0 px-0">
                          <div className="bootselect-multiselect">
                            <label className="fz14">Loking For</label>
                            <select className="selectpicker">
                              <option>Property Type</option>
                              <option>Apartments</option>
                              <option>Bungalow</option>
                              <option>Houses</option>
                              <option>Loft</option>
                              <option>Office</option>
                              <option>TownHome</option>
                              <option>Villa</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                        <div className="mt-3 mt-md-0">
                          <div className="bootselect-multiselect">
                            <label className="fz14">Location</label>
                            <select className="selectpicker">
                              <option>New York</option>
                              <option>Los Angeles</option>
                              <option>London</option>
                              <option>Paris</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                        <div className="mt-3 mt-md-0">
                          <div className="dropdown-lists">
                            <label className="fz14 mb-1">Price</label>
                            <div
                              className="btn open-btn text-start dropdown-toggle"
                              data-bs-toggle="dropdown"
                            >
                              $15,000 <i className="fas fa-caret-down"></i>
                            </div>
                            <div className="dropdown-menu">
                              <div className="widget-wrapper pb20 mb0 pl20 pr20">
                                {/* Range Slider Mobile Version */}
                                <div className="range-slider-style2">
                                  <div className="range-wrapper at-home10">
                                    <div className="slider-range mb30 mt35"></div>
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
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="d-flex align-items-center justify-content-start justify-content-lg-center mt-2 mt-md-0">
                          <button
                            className="advance-search-btn"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <span className="flaticon-settings"></span> Advanced
                          </button>
                          <button className="ud-btn btn-thm ms-2" type="button">
                            <span className="flaticon-search pe-2"></span>{" "}
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="advance-content-style3 at-home5">
                    <div className="row align-items-center">
                      <div className="col-md-4 col-xl-3 bdrr1 bdrrn-sm">
                        <label>Search</label>
                        <div className="advance-search-field position-relative text-start">
                          <form
                            action="#"
                            method="get"
                            className="form-search position-relative"
                            acceptCharset="utf-8"
                          >
                            <div className="box-search">
                              <input
                                className="form-control bgc-f7 bdrs12 ps-0"
                                type="text"
                                name="search"
                                placeholder="Enter Keywords"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                        <div className="mt-3 mt-md-0 px-0">
                          <div className="bootselect-multiselect">
                            <label className="fz14">Loking For</label>
                            <select className="selectpicker">
                              <option>Property Type</option>
                              <option>Apartments</option>
                              <option>Bungalow</option>
                              <option>Houses</option>
                              <option>Loft</option>
                              <option>Office</option>
                              <option>TownHome</option>
                              <option>Villa</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                        <div className="mt-3 mt-md-0">
                          <div className="bootselect-multiselect">
                            <label className="fz14">Location</label>
                            <select className="selectpicker">
                              <option>New York</option>
                              <option>Los Angeles</option>
                              <option>London</option>
                              <option>Paris</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                        <div className="mt-3 mt-md-0">
                          <div className="dropdown-lists">
                            <label className="fz14 mb-1">Price</label>
                            <div
                              className="btn open-btn text-start dropdown-toggle"
                              data-bs-toggle="dropdown"
                            >
                              $15,000 <i className="fas fa-caret-down"></i>
                            </div>
                            <div className="dropdown-menu">
                              <div className="widget-wrapper pb20 mb0 pl20 pr20">
                                {/* Range Slider Mobile Version */}
                                <div className="range-slider-style2">
                                  <div className="range-wrapper at-home10">
                                    <div className="slider-range mb30 mt35"></div>
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
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="d-flex align-items-center justify-content-start justify-content-lg-center mt-2 mt-md-0">
                          <button
                            className="advance-search-btn"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <span className="flaticon-settings"></span> Advanced
                          </button>
                          <button className="ud-btn btn-thm ms-2" type="button">
                            <span className="flaticon-search pe-2"></span>{" "}
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
