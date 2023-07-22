import React from "react";

export default function AgentHeader() {
  return (
    <>
      <div className="cta-agent bgc-thm-light mx-auto maxw1600 pt60 pb60 bdrs12 position-relative mx20-lg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <div className="agent-single d-sm-flex align-items-center">
                <div className="single-img mb30-sm">
                  <img src="/images/team/agent-single.png" alt="hello" />
                </div>
                <div className="single-contant ml30 ml0-xs">
                  <h2 className="title mb-0">Ali Tufan</h2>
                  <p className="fz15">
                    Company Agent at <b>Modern House Real Estate</b>
                  </p>
                  <div className="agent-meta mb15 d-md-flex align-items-center">
                    <a className="text fz15 pe-2 bdrr1" href="">
                      <i className="fas fa-star fz10 review-color2 pr10"></i>
                      5.0 • 49 Reviews
                    </a>
                    <a className="text fz15 pe-2 ps-2 bdrr1" href="">
                      <i className="flaticon-call pe-1"></i>+848 032 03 01
                    </a>
                    <a className="text fz15 ps-2" href="">
                      <i className="flaticon-smartphone pe-1"></i>+848 032 03 01
                    </a>
                  </div>
                  <div className="agent-social">
                    <a className="mr20" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="mr20" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="mr20" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="img-box-11 position-relative d-none d-xl-block">
                <img
                  className="img-1 spin-right"
                  src="/images/about/element-3.png"
                  alt=""
                />
                <img
                  className="img-2 bounce-x"
                  src="/images/about/element-5.png"
                  alt=""
                />
                <img
                  className="img-3 bounce-y"
                  src="/images/about/element-7.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
