import React from "react";
import ExploreCarousel from "./ExploreCarousel";

const Explore = () => {
  return (
    <section id="explore-property" className="pb90 pb30-md">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="main-title wow fadeInUp" data-wow-delay="300ms">
              <h2 className="title">Explore Apartment Types</h2>
              <p className="paragraph">
                Get some Inspirations from 1800+ skills
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ExploreCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
