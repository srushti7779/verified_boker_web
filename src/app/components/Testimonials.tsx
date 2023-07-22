
const Testimonials = () => {
  return (
    <section style={{paddingInline: "2rem"}} className="pt60 pb40-md bgc-thm-light">
      <div className="container">
        <div className="row align-items-start align-items-xl-center">
          <div className="col-md-10 col-lg-7 col-xl-6">
            <div
              className="position-relative mb35 mb0-sm wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="exclusive-agent-widget mb30-sm">
                <h4 className="title mb20">
                  <span className="text-thm">200+</span> Exclusive Agents
                </h4>
                <div className="thumb d-flex align-items-center mb20">
                  <div className="flex-shrink-0">
                    <img className="wa" src="images/team/ea-1.png" alt="" />
                  </div>
                  <div className="flex-grow-1 ml20">
                    <h6 className="title fz14 mb-0">Marvin McKinney</h6>
                    <p className="fz13 mb-0">Designer</p>
                  </div>
                </div>
                <div className="thumb d-flex align-items-center mb20">
                  <div className="flex-shrink-0">
                    <img className="wa" src="images/team/ea-2.png" alt="" />
                  </div>
                  <div className="flex-grow-1 ml20">
                    <h6 className="title fz14 mb-0">Ralph Edwards</h6>
                    <p className="fz13 mb-0">Designer</p>
                  </div>
                </div>
                <div className="thumb d-flex align-items-center mb20">
                  <div className="flex-shrink-0">
                    <img className="wa" src="images/team/ea-3.png" alt="" />
                  </div>
                  <div className="flex-grow-1 ml20">
                    <h6 className="title fz14 mb-0">Annette Black</h6>
                    <p className="fz13 mb-0">Designer</p>
                  </div>
                </div>
                <div className="thumb d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img className="wa" src="images/team/ea-4.png" alt="" />
                  </div>
                  <div className="flex-grow-1 ml20">
                    <h6 className="title fz14 mb-0">Jane Cooper</h6>
                    <p className="fz13 mb-0">Designer</p>
                  </div>
                </div>
              </div>
              <div className="exclusive-agent-single mb30-sm">
                <div className="agent-img">
                  <img src="images/team/agent-5.jpg" alt="" />
                </div>
                <div className="agent-content pt20">
                  <h6 className="title mb-0">Marvin McKinney</h6>
                  <p className="fz15 mb-0">Designer</p>
                </div>
              </div>
              <div className="img-box-10 position-relative d-none d-xl-block">
                <img
                  className="img-1 spin-right"
                  src="images/about/element-3.png"
                  alt=""
                />
                <img
                  className="img-2 bounce-x"
                  src="images/about/element-5.png"
                  alt=""
                />
                <img
                  className="img-3 bounce-y"
                  src="images/about/element-6.png"
                  alt=""
                />
                <img
                  className="img-4 bounce-y"
                  src="images/about/element-7.png"
                  alt=""
                />
                <img
                  className="img-5 spin-right"
                  src="images/about/element-8.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-5 col-xl-5 offset-xl-1">
            <div
              className="about-box-1 pe-4 mt100 mt0-lg mb30-lg wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <h2 className="title mb20">
                Let&apos;s find the right selling option for you
              </h2>
              <p className="text mb55 mb30-md fz14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                <br className="d-none d-xl-block" /> eiusmod tempor incididunt.
              </p>
              <div className="list-style1 mb60 mb30-md">
                <ul>
                  <li>
                    <i className="far fa-check text-white bgc-dark fz15"></i>
                    <span className="ml-8">Find excellent deals</span>
                  </li>
                  <li>
                    <i className="far fa-check text-white bgc-dark fz15"></i>
                    <span className="ml-8">Friendly host & Fast support</span>
                  </li>
                  <li>
                    <i className="far fa-check text-white bgc-dark fz15" />
                    <span className="ml-8">List your own property</span>
                  </li>
                </ul>
              </div>
              <a href="page-property-single-v1.html" className="ud-btn btn-thm">
                See More<i className="fal fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
