import React from "react";
import AgentPropertyCard from "./AgentPropertyCard";

export default function AgentPropertyCardList({
  propertyDetails,
  propertyFilter,
}: {
  propertyDetails: {
    imgSrc: string;
    price: string;
    propertyName: string;
    propertyAddress: string;
    bedroomCount: number;
    bathroomCount: number;
    area: number;
    propertyStatus: string;
    featured: boolean;
  }[];
  propertyFilter: string;
}) {
  return (
    <>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="row">
            {propertyDetails.map((element, index) => {
              if (
                propertyFilter === "All" ||
                element.propertyStatus === propertyFilter
              ) {
                return (
                  <AgentPropertyCard
                    key={`AgentPropertyCard_Key_${index}`}
                    imgSrc={element.imgSrc}
                    price={element.price}
                    propertyName={element.propertyName}
                    propertyAddress={element.propertyAddress}
                    bedroomCount={element.bedroomCount}
                    bathroomCount={element.bathroomCount}
                    area={element.area}
                    propertyStatus={element.propertyStatus}
                    featured={element.featured}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
