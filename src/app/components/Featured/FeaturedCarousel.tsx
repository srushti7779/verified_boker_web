"use client";

import React from "react";
import { featuredCarouselResponsiveOptions, featuredData } from "./constants";
import FeaturedCard from "./FeaturedCard";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  (window as any).$ = (window as any).jQuery = require("jquery");
}
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const FeaturedCarousel = () => {
  return (
    <OwlCarousel
      className="owl-carousel owl-theme feature-listing-slider navi_pagi_bottom_center slider-dib-sm slider-3-grid"
      margin={30}
      items={3}
      dotClass="owl-dot mr-2 md:mr-4"
      responsive={featuredCarouselResponsiveOptions}
    >
      {featuredData.map((item, index) => {
        return <FeaturedCard key={index} {...item} />;
      })}
    </OwlCarousel>
  );
};

export default FeaturedCarousel;
