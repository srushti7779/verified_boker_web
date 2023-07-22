"use client";

import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  (window as any).$ = (window as any).jQuery = require("jquery");
}
import dynamic from "next/dynamic";
import { propertiesCarouselResponsiveOptions, propertyData } from "./constants";
import PropertyCard from "./PropertyCard";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const PropertiesCarousel = () => {
  return (
    <OwlCarousel
      className="owl-theme owl-carousel vam_nav_style"
      items={4}
      margin={30}
      responsive={propertiesCarouselResponsiveOptions}
    >
      {propertyData.map((property, index) => {
        return <PropertyCard key={index} {...property} />;
      })}
    </OwlCarousel>
  );
};

export default PropertiesCarousel;
