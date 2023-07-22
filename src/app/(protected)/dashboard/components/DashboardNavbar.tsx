import React from "react";

const DashboardNavbar = () => {
  return (
    <header className="header-nav nav-innerpage-style menu-home4 dashboard_header main-menu p10">
      {/* <!-- Ace Responsive Menu --> */}
      <nav className="posr">
        <div className="container-fluid pr30 pr15-xs pl30 posr menu_bdrt1">
          <div className="row align-items-center justify-content-between">
            <div className="col-6 col-lg-auto">
              <div className="text-center text-lg-start d-flex align-items-center">
                <div className="dashboard_header_logo position-relative me-2 me-xl-5">
                  <a href="index.html" className="logo">
                    <img src="images/header-logo2.svg" alt="" />
                  </a>
                </div>
                <div className="fz20 ms-2 ms-xl-5">
                  <a
                    href="#"
                    className="dashboard_sidebar_toggle_icon text-thm1 vam"
                  >
                    <img src="images/dark-nav-icon.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-auto">
              {/* <!-- Responsive Menu Structure--> */}
              <ul
                id="respMenu"
                className="ace-responsive-menu"
                data-menu-style="horizontal"
              >
                <li className="visible_list">
                  {" "}
                  <a className="list-item" href="#">
                    <span className="title">Home</span>
                  </a>
                  
                </li>
                <li className="megamenu_style">
                  {" "}
                  <a className="list-item" href="#">
                    <span className="title">Listing</span>
                  </a>
                  
                </li>
                <li className="visible_list">
                  {" "}
                  <a className="list-item" href="#">
                    <span className="title">Property</span>
                  </a>
                  
                </li>
                <li className="visible_list">
                  {" "}
                  <a className="list-item" href="#">
                    <span className="title">Blog</span>
                  </a>
                  
                </li>
                <li className="visible_list">
                  {" "}
                  <a className="list-item" href="#">
                    <span className="title">Pages</span>
                  </a>
                  
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-auto">
              <div className="text-center text-lg-end header_right_widgets">
                <ul className="mb0 d-flex justify-content-center justify-content-sm-end p-0">
                  <li className="d-none d-sm-block">
                    <a className="text-center mr15" href="page-login.html">
                      <span className="flaticon-email"></span>
                    </a>
                  </li>
                  <li className="d-none d-sm-block">
                    <a className="text-center mr20 notif" href="#">
                      <span className="flaticon-bell"></span>
                    </a>
                  </li>
                  <li className=" user_setting">
                    <div className="dropdown">
                      <a className="btn" href="#" data-bs-toggle="dropdown">
                        <img src="images/resource/user.png" alt="user.png" />
                      </a>
                      <div className="dropdown-menu">
                        <div className="user_setting_content">
                          <p className="fz15 fw400 ff-heading mb20">MAIN</p>
                          <a
                            className="dropdown-item active"
                            href="page-dashboard.html"
                          >
                            <i className="flaticon-discovery mr10"></i>Dashboard
                          </a>
                          <a
                            className="dropdown-item"
                            href="page-dashboard-message.html"
                          >
                            <i className="flaticon-chat-1 mr10"></i>Message
                          </a>
                          <p className="fz15 fw400 ff-heading mt30">
                            MANAGE LISTINGS
                          </p>
                          <a
                            className="dropdown-item"
                            href="page-dashboard-add-property.html"
                          >
                            <i className="flaticon-new-tab mr10"></i>Add New
                            Property
                          </a>
                          <a
                            className="dropdown-item"
                            href="page-dashboard-order.html"
                          >
                            <i className="flaticon-home mr10"></i>My Properties
                          </a>
                          <a
                            className="dropdown-item"
                            href="page-dashboard-favorites.html"
                          >
                            <i className="flaticon-like mr10"></i>My Favorites
                          </a>
                          <a
                            className="dropdown-item"
                            href="page-dashboard-savesearch.html"
                          >
                            <i className="flaticon-search-2 mr10"></i>Saved
                            Search
                          </a>
                          <a
                            className="dropdown-item"
                            href="page-dashboard-review.html"
                          >
                            <i className="flaticon-review mr10"></i>Reviews
                          </a>
                          <p className="fz15 fw400 ff-heading mt30">
                            MANAGE ACCOUNT
                          </p>
                          <a
                            className="dropdown-item"
                            href="page-dashboard-package.html"
                          >
                            <i className="flaticon-protection mr10"></i>My
                            Package
                          </a>
                          <a
                            className="dropdown-item"
                            href="page-dashboard-profile.html"
                          >
                            <i className="flaticon-user mr10"></i>My Profile
                          </a>
                          <a className="dropdown-item" href="page-login.html">
                            <i className="flaticon-exit mr10"></i>Logout
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashboardNavbar;
