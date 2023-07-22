"use client";

import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  (window as any).$ = (window as any).jQuery = require("jquery");
}
import dynamic from "next/dynamic";
import { exploreCarouselResponsiveOptions, exploreData } from "./constants";
import ExploreCard from "./ExploreCard";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const ExploreCarousel = () => {
  return (
    <OwlCarousel
      className="explore-apartment-slider navi_pagi_top_right slider-5-grid owl-carousel owl-theme wow fadeInUp"
      data-wow-delay="300ms"
      items={5}
      margin={30}
      dotClass="owl-dot mr-2 md:mr-4"
      responsive={exploreCarouselResponsiveOptions}
    >
      {exploreData.map((explore, index) => {
        return <ExploreCard key={index} {...explore} />;
      })}
    </OwlCarousel>
  );
};

export default ExploreCarousel;
