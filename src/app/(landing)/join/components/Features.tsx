import React from "react";

const featureData = [
  {
    title: "Hello World",
    description:
      "Lorem ipsum onsectetur adipisicing elit. Voluptatum, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quibusdam.",
  },
  {
    title: "Hello World",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quibusdam. Lorem consectetur adipisicing elit. Voluptatum, quibusdam.",
  },
  {
    title: "Hello World",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, um dolor sit amet consectetur adipisicing elit. Voluptatum, quibusdam.",
  },
];

const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="col-sm-6 col-lg-4 wow">
      <div className="flex flex-col text-center items-center gap-2 px-8 md:px-4 py-6">
        <div className="w-[40px] h-[40px] rounded-full bg-[#333]"></div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="pt90 pb90 pb10-md mx-auto">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto wow fadeInUp" data-wow-delay="300ms">
            <div className="main-title text-center">
              <h2 className="title">Features</h2>
              <p className="paragraph">
                Most calenders are designed for teams. Slate is designed for
                freelancers.
              </p>
            </div>
          </div>
        </div>
        <div className="row max-w-3xl mx-auto">
          {featureData.map((item, index) => (
            <Feature key={index} {...item} />
          ))}
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="ps-widget bdrs12 default-box-shadow2 mt30 mb30 overflow-hidden position-relative">
            <div className="row">
              <div className="col-md-12">
                <div
                  style={{ height: "450px" }}
                  className="property_video bdrs12 w-100"
                >
                  <a
                    className="video_popup_btn mx-auto popup-img popup-youtube"
                    href="#"
                  >
                    <i className="fas fa-circle-play text-[48px]"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt150 gap-8">
            <div className="flex flex-col justify-between md:w-1/2">
              <div className="md:w-[70%]">
                <h3 className="text-4xl mb-4 font-medium">
                  Fastest way to organize
                </h3>
                <p className="text-lg mb-2">
                  Most calenders are designed for teams. Slate is designed for
                  freelancers
                </p>
              </div>
              <a className="ud-btn btn-thm cursor-pointer rounded-full animate-up-3">
                Try for free
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                className="w-full h-full rounded-lg"
                src="/images/blog/blog-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row mt200 gap-8">
            <div className="md:w-1/2">
              <img
                className="w-full h-full rounded-lg"
                src="/images/blog/blog-1.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col md:w-1/2 gap-4">
              <div className="md:w-[70%]">
                <p className="text-base font-semibold mb-2">
                  At your fingertips
                </p>
                <h3 className="text-4xl mb-4 font-medium">
                  Lightning Fast Prototypes
                </h3>
                <p className="text-base font-semibold">
                  Susbcribe to our newsletter
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-8 py-2 rounded-full bg-gray-200 outline-none text-sm border-none"
                />
                <button className="rounded-full px-6 py-2 bg-[#EB6753] text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
