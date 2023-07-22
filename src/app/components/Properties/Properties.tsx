import PropertiesCarousel from "./PropertiesCarousel";

const Properties = () => {
  return (
    <section style={{marginInline: "2rem"}} className="pb40-md pb90">
      <div className="container">
        <div
          className="row align-items-center wow fadeInUp"
          data-wow-delay="300ms"
        >
          <div className="col-lg-9">
            <div className="main-title2">
              <h2 className="title">Properties by Cities</h2>
              <p className="paragraph">
                Aliquam lacinia diam quis lacus euismod
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-start text-lg-end mb-3">
              <a className="ud-btn2" href="page-property-single-v1.html">
                See All Cities<i className="fal fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 wow fadeInUp" data-wow-delay="300ms">
            <PropertiesCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
