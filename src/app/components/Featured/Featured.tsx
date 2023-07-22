import FeaturedCarousel from "./FeaturedCarousel";

const Featured = () => {
  return (
    <section style={{paddingInline: "2rem"}} className="bgc-f7">
      <div className="container">
        <div
          className="row align-items-center wow fadeInUp"
          data-wow-delay="00ms"
        >
          <div className="col-lg-9">
            <div className="main-title2">
              <h2 className="title">Discover Our Featured Listings</h2>
              <p className="paragraph">
                Aliquam lacinia diam quis lacus euismod
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-start text-lg-end mb-3">
              <a className="ud-btn2" href="">
                See All Properties<i className="fal fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 wow fadeInUp" data-wow-delay="300ms">
            <FeaturedCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
