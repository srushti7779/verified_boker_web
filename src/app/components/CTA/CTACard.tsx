import React from "react";

interface CTACardProps {
  imageSrc: string;
  title: string;
  text: string;
  buttonLabel: string;
}

const CTACard = ({ imageSrc, title, text, buttonLabel }: CTACardProps) => {
  return (
    <div className="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
      <div className="iconbox-style2 text-center">
        <div className="icon flex justify-center">
          <img src={imageSrc} alt="" />
        </div>
        <div className="iconbox-content">
          <h4 className="title">{title}</h4>
          <p className="text">
            {text}
          </p>
          <a href="page-property-single-v1.html" className="ud-btn btn-white2">
            {buttonLabel}<i className="fal fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTACard;
