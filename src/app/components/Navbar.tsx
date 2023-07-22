"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="header-nav nav-innerpage-style menu-home4 main-menu z-50 relative shadow-lg h-[72px]">
        {/* <!-- Ace Responsive Menu --> */}
        <nav className="posr">
          <div className="container maxw1600 posr menu_bdrt1">
            <div className="row align-items-center justify-content-between h-[72px]">
              <div className="col-auto">
                {/* <!-- Responsive Menu Structure--> */}
                <ul
                  id="respMenu"
                  className="ace-responsive-menu"
                  data-menu-style="horizontal"
                >
                  <li className="visible_list">
                    {" "}
                    <Link className="list-item" href="/properties">
                      <span className="title">Buy</span>
                    </Link>
                  </li>
                  <li className="visible_list">
                    <a className="list-item" href="/properties">
                      <span className="title">Rent</span>
                    </a>
                  </li>
                  <li className="visible_list">
                    <a className="list-item" href="/properties">
                      <span className="title">Sell</span>
                    </a>
                  </li>
                  <li className="visible_list">
                    <a className="list-item" href="/agents">
                      <span className="title">Find Agent</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-auto">
                <Link href="/">
                  <img
                    className="max-h-[38px]"
                    src="/images/header-logo3.svg"
                    alt="Header Logo"
                  />
                </Link>
              </div>
              <div className="col-auto">
                <div className="d-flex align-items-center">
                  <ul
                    id="respMenu"
                    className="ace-responsive-menu"
                    data-menu-style="horizontal"
                  >
                    <li className="visible_list">
                      <a className="list-item" href="#">
                        <span className="title">Blogs</span>
                      </a>
                    </li>
                    <li className="visible_list">
                      <Link className="list-item" href="/join">
                        <span className="title">Become Agent</span>
                      </Link>
                    </li>
                    <li className="visible_list">
                      <Link
                        className="login-info d-flex align-items-center list-item"
                        href="/login"
                      >
                        <span className="d-none d-xl-block">
                          Login / Register
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="hiddenbar-body-ovelay"></div>

      {/* <!-- Mobile Nav  --> */}
      <div id="page" className="mobilie_header_nav stylehome1">
        <div className="mobile-menu">
          <div className="header innerpage-style">
            <div className="menu_and_widgets">
              <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
                <a className="menubar" href="#menu">
                  <img src="/images/mobile-dark-nav-icon.svg" alt="" />
                </a>
                <a className="mobile_logo" href="#">
                  <img src="/images/header-logo2.svg" alt="" />
                </a>
                <Link href="/login">
                  <span className="icon fz18 far fa-user-circle"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.mobile-menu --> */}
        <nav id="menu" className="">
          <ul>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Property Listign</span>
            </li>
            <li>
              <span>User Dashboard</span>
            </li>
            <li>
              <span>Blog</span>
            </li>
            <li>
              <span>Pages</span>
            </li>
            <li className="px-3 mobile-menu-btn">
              <a
                href="page-dashboard-add-property.html"
                className="ud-btn btn-thm text-white"
              >
                Submit Property<i className="fal fa-arrow-right-long"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
