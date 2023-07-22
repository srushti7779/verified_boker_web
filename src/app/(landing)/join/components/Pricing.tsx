"use client";

import React, { useEffect } from "react";

const Pricing = () => {
  function check() {
    const checkBox = document.getElementById("checbox") as HTMLInputElement;
    const text1 = document.getElementsByClassName("text1");
    const text2 = document.getElementsByClassName("text2");

    for (let i = 0; i < text1.length; i++) {
      if (checkBox.checked) {
        (text1[i] as HTMLElement).style.display = "block";
        (text2[i] as HTMLElement).style.display = "none";
      } else {
        (text1[i] as HTMLElement).style.display = "none";
        (text2[i] as HTMLElement).style.display = "block";
      }
    }
  }

  useEffect(() => {
    check();
  }, []);

  return (
    <section className="our-pricing pb90 pt-20 md:pt-40">
      <div className="container">
        <div className="row wow fadeInUp" data-wow-delay="100ms">
          <div className="col-lg-6 offset-lg-3">
            <div className="main-title text-center mb30">
              <h2>Membership Plans</h2>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12">
            <div className="pricing_packages_top d-flex align-items-center justify-content-center mb60">
              <div className="toggle-btn">
                <span className="pricing_save1 ff-heading">Billed Monthly</span>
                <label className="switch">
                  <input type="checkbox" id="checbox" onClick={() => check()} />
                  <span className="pricing_table_switch_slide round"></span>
                </label>
                <span className="pricing_save2 ff-heading">Billed Yearly</span>
                <span className="pricing_save3">Save 20%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-md-6 col-xl-4">
            <div className="pricing_packages">
              <div className="heading mb60">
                <h4 className="package_title">Basic</h4>
                <h1 className="text2">Free</h1>
                <h1 className="text1">Free</h1>
                <p className="text">per month</p>
                <img
                  className="price-icon"
                  src="images/icon/pricing-icon-2.svg"
                  alt=""
                />
              </div>
              <div className="details">
                <p className="text mb35">
                  Standard listing submission, active for 30 dayss
                </p>
                <div className="list-style1 mb40">
                  <ul>
                    <li>
                      <i className="far fa-check text-white bgc-dark fz15"></i>
                      <span className="ml-6">All Operating Supported</span>
                    </li>
                    <li>
                      <i className="far fa-check text-white bgc-dark fz15"></i>
                      <span className="ml-6">Great Interface</span>
                    </li>
                    <li>
                      <i className="far fa-check text-white bgc-dark fz15"></i>
                      <span className="ml-6">Allows encryption</span>
                    </li>
                    <li>
                      <i className="far fa-check text-white bgc-dark fz15"></i>
                      <span className="ml-6">Face recognized system</span>
                    </li>
                    <li>
                      <i className="far fa-check text-white bgc-dark fz15"></i>
                      <span className="ml-6">24/7 Full support</span>
                    </li>
                  </ul>
                </div>
                <div className="d-grid">
                  <a href="" className="ud-btn btn-thm-border text-thm">
                    Join<i className="fal fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="pricing_packages active">
              <div className="heading mb60">
                <h4 className="package_title">Professional</h4>
                <h1 className="text2">$199.95</h1>
                <h1 className="text1">$599.95</h1>
                <p className="text">per month</p>
                <img
                  className="price-icon"
                  src="images/icon/pricing-icon-1.svg"
                  alt=""
                />
              </div>
              <div className="details">
                <p className="text mb35">
                  Standard listing submission, active for 30 dayss
                </p>
                <div className="list-style1 mb40">
                <ul>
                    <li>
                      <i className="far fa-check text-white bgc-dark fz15"></i>
                      <span className="ml-6">All Operating Supported</span>
                    </li>
                    <li>
                      <i className="far fa-check text-white bgc-dark fz15"></i>
                      <span className="ml-6">Great Interface</span>
                    </li>
                    <li>
                      <i className="far fa-check text-white bgc-dark fz15"></i>
                      <span className="ml-6">Allows encryption</span>
                    </li>
                    <li>
                      <i className="far fa-check text-white bgc-dark fz15"></i>
                      <span className="ml-6">Face recognized system</span>
                    </li>
                    <li>
                      <i className="far fa-check text-white bgc-dark fz15"></i>
                      <span className="ml-6">24/7 Full support</span>
                    </li>
                  </ul>
                </div>
                <div className="d-grid">
                  <a href="" className="ud-btn btn-thm-border text-thm">
                    Join<i className="fal fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="pricing_packages">
              <div className="heading mb60">
                <h4 className="package_title">Business</h4>
                <h1 className="text2">$399.95</h1>
                <h1 className="text1">$999.95</h1>
                <p className="text">per month</p>
                <img
                  className="price-icon"
                  src="images/icon/pricing-icon-3.svg"
                  alt=""
                />
              </div>
              <div className="details">
                <p className="text mb35">
                  Standard listing submission, active for 30 dayss
                </p>
                <div className="list-style1 mb40">
                <ul>
                    <li>
                      <i className="far fa-check text-white bgc-dark fz15"></i>
                      <span className="ml-6">All Operating Supported</span>
                    </li>
                    <li>
                      <i className="far fa-check text-white bgc-dark fz15"></i>
                      <span className="ml-6">Great Interface</span>
                    </li>
                    <li>
                      <i className="far fa-check text-white bgc-dark fz15"></i>
                      <span className="ml-6">Allows encryption</span>
                    </li>
                    <li>
                      <i className="far fa-check text-white bgc-dark fz15"></i>
                      <span className="ml-6">Face recognized system</span>
                    </li>
                    <li>
                      <i className="far fa-check text-white bgc-dark fz15"></i>
                      <span className="ml-6">24/7 Full support</span>
                    </li>
                  </ul>
                </div>
                <div className="d-grid">
                  <a href="" className="ud-btn btn-thm-border text-thm">
                    Join<i className="fal fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
