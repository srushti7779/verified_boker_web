import React from "react";

const Hero = () => {
  return (
    <section
      className="home-banner-style6 p0"
      data-stellar-background-ratio="0.2"
    >
      <div className="flex pt-20 h-[550px] lg:h-[650px]">
        <div className="container">
          <div className="row">
            <div className="flex flex-col items-center gap-12">
              <div className="inner-banner-style6 text-center">
                <h2 className="hero-title text-white animate-up-1">
                  Become a Verified Broker <br /> with Our Platform
                </h2>
                <p className="hero-text text-white text-[20px] font-semibold animate-up-2">
                  One of the best Property selling and buying Marketplace
                </p>
              </div>
              <a className="ud-btn btn-thm cursor-pointer rounded-full animate-up-3">
                Try for free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
