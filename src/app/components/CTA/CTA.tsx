import React from "react";
import { CTAData } from "./constants";
import CTACard from "./CTACard";

const CTA = () => {
  return (
    <section className="pt0 pb90 pb10-md">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto wow fadeInUp" data-wow-delay="300ms">
            <div className="main-title text-center">
              <h2 className="title">See how Realton can help</h2>
              <p className="paragraph">
                Aliquam lacinia diam quis lacus euismod
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {CTAData.map((item, index) => (
            <CTACard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
