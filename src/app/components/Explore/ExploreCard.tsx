import React from "react";

interface ExploreCardProps {
  title: string;
  numProperties: number;
  icon: string
}

const ExploreCard = ({ title, numProperties, icon }: ExploreCardProps) => {
  return (
    <div className="item">
      <a href="/">
        <div className="iconbox-style1">
          <span className={`icon ${icon}`}></span>
          <div className="iconbox-content">
            <h6 className="title">{title}</h6>
            <p className="text mb-0">{numProperties} Properties</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ExploreCard;
