"use client";

const Dashboard = () => {
  function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown") as HTMLElement;
    dropdown.classList.toggle("show");
  }

  return (
    <>
      <div className="dashboard dashboard_wrapper pr30 pr0-xl">
        <div className="dashboard__sidebar d-none d-lg-block">
          <div className="dashboard_sidebar_list">
            <div className="sidebar_list_item">
              <a href="page-dashboard.html" className="items-center -is-active">
                <i className="flaticon-discovery mr15"></i>Dashboard
              </a>
            </div>
            <div className="sidebar_list_item ">
              <a href="page-dashboard-message.html" className="items-center">
                <i className="flaticon-chat-1 mr15"></i>Message
              </a>
            </div>
            <p className="fz15 fw400 ff-heading mt30">MANAGE LISTINGS</p>
            <div className="sidebar_list_item ">
              <a
                href="page-dashboard-add-property.html"
                className="items-center"
              >
                <i className="flaticon-new-tab mr15"></i>Add New Property
              </a>
            </div>
            <div className="sidebar_list_item ">
              <a href="page-dashboard-properties.html" className="items-center">
                <i className="flaticon-home mr15"></i>My Properties
              </a>
            </div>
            <div className="sidebar_list_item ">
              <a href="page-dashboard-favorites.html" className="items-center">
                <i className="flaticon-like mr15"></i>My Favorites
              </a>
            </div>
            <div className="sidebar_list_item ">
              <a href="page-dashboard-savesearch.html" className="items-center">
                <i className="flaticon-search-2 mr15"></i>Saved Search
              </a>
            </div>
            <div className="sidebar_list_item ">
              <a href="page-dashboard-review.html" className="items-center">
                <i className="flaticon-review mr15"></i>Reviews
              </a>
            </div>
            <p className="fz15 fw400 ff-heading mt30">MANAGE ACCOUNT</p>
            <div className="sidebar_list_item ">
              <a href="page-dashboard-package.html" className="items-center">
                <i className="flaticon-protection mr15"></i>My Package
              </a>
            </div>
            <div className="sidebar_list_item ">
              <a href="page-dashboard-profile.html" className="items-center">
                <i className="flaticon-user mr15"></i>My Profile
              </a>
            </div>
            <div className="sidebar_list_item ">
              <a href="page-login.html" className="items-center">
                <i className="flaticon-logout mr15"></i>Logout
              </a>
            </div>
          </div>
        </div>
        <div className="dashboard__main pl0-md">
          <div className="dashboard__content bgc-f7">
            <div className="row pb40">
              <div className="col-lg-12">
                <div className="dashboard_navigationbar d-block d-lg-none">
                  <div className="dropdown">
                    <button onClick={toggleDropdown} className="dropbtn">
                      <i className="fa fa-bars pr10"></i> Dashboard Navigation
                    </button>
                    <ul id="myDropdown" className="dropdown-content">
                      <li className="active">
                        <a href="page-dashboard.html">
                          <i className="flaticon-discovery mr10"></i>Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-message.html">
                          <i className="flaticon-chat-1 mr10"></i>Message
                        </a>
                      </li>
                      <li>
                        <p className="fz15 fw400 ff-heading mt30 pl30">
                          MANAGE LISTINGS
                        </p>
                      </li>
                      <li>
                        <a href="page-dashboard-add-property.html">
                          <i className="flaticon-new-tab mr10"></i>Add New
                          Property
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-properties.html">
                          <i className="flaticon-home mr10"></i>My Properties
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-favorites.html">
                          <i className="flaticon-like mr10"></i>My Favorites
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-savesearch.html">
                          <i className="flaticon-search-2 mr10"></i>Saved Search
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-review.html">
                          <i className="flaticon-review mr10"></i>Reviews
                        </a>
                      </li>
                      <li>
                        <p className="fz15 fw400 ff-heading mt30 pl30">
                          MANAGE ACCOUNT
                        </p>
                      </li>
                      <li>
                        <a href="page-dashboard-package.html">
                          <i className="flaticon-protection mr10"></i>My Package
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-profile.html">
                          <i className="flaticon-user mr10"></i>My Profile
                        </a>
                      </li>
                      <li>
                        <a className="" href="page-login.html">
                          <i className="flaticon-exit mr10"></i>Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="dashboard_title_area">
                  <h2>Howdy, Ali!</h2>
                  <p className="text">We are glad to see you again!</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-xxl-3">
                <div className="d-flex justify-content-between statistics_funfact">
                  <div className="details">
                    <div className="text fz25">All Properties</div>
                    <div className="title">583</div>
                  </div>
                  <div className="icon text-center">
                    <i className="flaticon-home"></i>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xxl-3">
                <div className="d-flex justify-content-between statistics_funfact">
                  <div className="details">
                    <div className="text fz25">Total Views</div>
                    <div className="title">192</div>
                  </div>
                  <div className="icon text-center">
                    <i className="flaticon-search-chart"></i>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xxl-3">
                <div className="d-flex justify-content-between statistics_funfact">
                  <div className="details">
                    <div className="text fz25">Total Visitor Reviews</div>
                    <div className="title">438</div>
                  </div>
                  <div className="icon text-center">
                    <i className="flaticon-review"></i>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xxl-3">
                <div className="d-flex justify-content-between statistics_funfact">
                  <div className="details">
                    <div className="text fz25">Total Favorites</div>
                    <div className="title">67</div>
                  </div>
                  <div className="icon text-center">
                    <i className="flaticon-like"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8">
                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <div className="navtab-style1">
                    <div className="d-sm-flex align-items-center justify-content-between">
                      <h4 className="title fz17 mb20">View statistics</h4>
                      <ul
                        className="nav nav-tabs border-bottom-0 mb30"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link fw600 active"
                            id="hourly-tab"
                            data-bs-toggle="tab"
                            href="#hourly"
                            role="tab"
                            aria-controls="hourly"
                            aria-selected="true"
                          >
                            Hours
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link fw600"
                            id="weekly-tab"
                            data-bs-toggle="tab"
                            href="#weekly"
                            role="tab"
                            aria-controls="weekly"
                            aria-selected="false"
                          >
                            Weekly
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link fw600"
                            id="monthly-tab"
                            data-bs-toggle="tab"
                            href="#monthly"
                            role="tab"
                            aria-controls="monthly"
                            aria-selected="false"
                          >
                            Monthly
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content" id="myTabContent2">
                      <div
                        className="tab-pane fade show active"
                        id="hourly"
                        role="tabpanel"
                        aria-labelledby="hourly-tab"
                      >
                        <canvas
                          className="chart-container"
                          id="doublebar-chart"
                        ></canvas>
                      </div>
                      <div
                        className="tab-pane fade w-100"
                        id="weekly"
                        role="tabpanel"
                        aria-labelledby="weekly-tab"
                      >
                        <canvas
                          className="canvas w-100"
                          id="myChartweave"
                        ></canvas>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="monthly"
                        role="tabpanel"
                        aria-labelledby="monthly-tab"
                      >
                        <div className="chart pt20">
                          <canvas className="w-100" id="myChart"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                  <h4 className="title fz17 mb25">Recent Activities</h4>
                  <div className="recent-activity d-sm-flex align-items-center mb20">
                    <span className="icon me-3 flaticon-home flex-shrink-0"></span>
                    <p className="text mb-0 flex-grow-1">
                      Your listing{" "}
                      <span className="fw600">House on the beverly hills</span>{" "}
                      has been approved
                    </p>
                  </div>
                  <div className="recent-activity d-sm-flex align-items-center mb20">
                    <span className="icon me-3 flaticon-review flex-shrink-0"></span>
                    <p className="text mb-0 flex-grow-1">
                      Dollie Horton left a review on{" "}
                      <span className="fw600">House on the Northridge</span>
                    </p>
                  </div>
                  <div className="recent-activity d-sm-flex align-items-center mb20">
                    <span className="icon me-3 flaticon-like flex-shrink-0"></span>
                    <p className="text mb-0 flex-grow-1">
                      Someone favorites your{" "}
                      <span className="fw600">Triple Story House for Rent</span>{" "}
                      listing
                    </p>
                  </div>
                  <div className="recent-activity d-sm-flex align-items-center mb20">
                    <span className="icon me-3 flaticon-review flex-shrink-0"></span>
                    <p className="text mb-0 flex-grow-1">
                      Someone favorites your{" "}
                      <span className="fw600">Triple Story House for Rent</span>{" "}
                      listing
                    </p>
                  </div>
                  <div className="recent-activity d-sm-flex align-items-center mb20">
                    <span className="icon me-3 flaticon-home flex-shrink-0"></span>
                    <p className="text mb-0 flex-grow-1">
                      Your listing{" "}
                      <span className="fw600">House on the beverly hills</span>{" "}
                      has been approved
                    </p>
                  </div>
                  <div className="recent-activity d-sm-flex align-items-center mb20">
                    <span className="icon me-3 flaticon-review flex-shrink-0"></span>
                    <p className="text mb-0 flex-grow-1">
                      Dollie Horton left a review on{" "}
                      <span className="fw600">House on the Northridge</span>
                    </p>
                  </div>
                  <div className="d-grid">
                    <a href="" className="ud-btn btn-white2">
                      Veiw More<i className="fal fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="dashboard_footer pt30 pb10">
            <div className="container">
              <div className="row items-center justify-content-center justify-content-md-between">
                <div className="col-auto">
                  <div className="copyright-widget">
                    <p className="text">© Homez - All rights reserved</p>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="footer_bottom_right_widgets text-center text-lg-end">
                    <p>
                      <a href="#">Privacy</a> · <a href="#">Terms</a> ·{" "}
                      <a href="#">Sitemap</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
