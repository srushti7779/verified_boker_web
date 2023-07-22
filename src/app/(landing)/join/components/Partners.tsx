"use client";

import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  (window as any).$ = (window as any).jQuery = require("jquery");
}
import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Partners = () => {
  return (
    <section className="our-partners pt0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 wow fadeInUp">
            <div className="main-title text-center">
              <h6>Trusted by the world&apos;s best</h6>
            </div>
          </div>
          <div className="col-lg-12">
            <OwlCarousel
              className="owl-theme wow fadeInUp"
              dots={false}
              items={5}
              loop={true}
              margin={10}
              autoPlay={true}
              autoplayTimeout={2000}
              autoplayHoverPause={true}
              responsive={{
                0: {
                  items: 2,
                  center: false,
                },
                480: {
                  items: 2,
                  center: false,
                },
                630: {
                  items: 2,
                  center: false,
                },
                768: {
                  items: 3,
                },
                992: {
                  items: 3,
                },
                1024: {
                  items: 3,
                },
                1200: {
                  items: 4,
                },
                1400: {
                  items: 6,
                },
              }}
            >
              <div className="item">
                <div className="partner_item">
                  <img
                    className="wa m-auto"
                    src="/images/partners/1.png"
                    alt="1.png"
                  />
                </div>
              </div>
              <div className="item">
                <div className="partner_item">
                  <img
                    className="wa m-auto"
                    src="/images/partners/2.png"
                    alt="2.png"
                  />
                </div>
              </div>
              <div className="item">
                <div className="partner_item">
                  <img
                    className="wa m-auto"
                    src="/images/partners/3.png"
                    alt="3.png"
                  />
                </div>
              </div>
              <div className="item">
                <div className="partner_item">
                  <img
                    className="wa m-auto"
                    src="/images/partners/4.png"
                    alt="4.png"
                  />
                </div>
              </div>
              <div className="item">
                <div className="partner_item">
                  <img
                    className="wa m-auto"
                    src="/images/partners/5.png"
                    alt="5.png"
                  />
                </div>
              </div>
              <div className="item">
                <div className="partner_item">
                  <img
                    className="wa m-auto"
                    src="/images/partners/6.png"
                    alt="6.png"
                  />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
