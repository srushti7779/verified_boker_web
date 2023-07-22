
const Footer = () => {
  return (
    <section style={{paddingInline: "2rem"}} className="footer-style1 pt60 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="footer-widget mb-4 mb-lg-5">
              <a className="footer-logo" href="index.html">
                <img className="mb40" src="/images/header-logo.svg" alt="" />
              </a>
              <div className="row mb-4 mb-lg-5">
                <div className="col-auto">
                  <div className="contact-info">
                    <p className="info-title">Total Free Customer Care</p>
                    <h6 className="info-phone">
                      <a href="+(0)-123-050-945-02">+(0) 123 050 945 02</a>
                    </h6>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="contact-info">
                    <p className="info-title">Nee Live Support?</p>
                    <h6 className="info-mail">
                      <a href="mailto:hi@homez.com">hi@homez.com</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="app-widget">
                <h5 className="title text-white mb10">Apps</h5>
                <div className="row mb-4 mb-lg-5">
                  <div className="col-auto">
                    <a href="">
                      <div className="app-info d-flex align-items-center mb10">
                        <div className="flex-shrink-0">
                          <i className="fab fa-apple fz30 text-white"></i>
                        </div>
                        <div className="flex-grow-1 ml20">
                          <p className="app-text fz13 mb0">Download on the</p>
                          <h6 className="app-title text-white fz14">
                            Apple Store
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-auto">
                    <a href="">
                      <div className="app-info d-flex align-items-center mb10">
                        <div className="flex-shrink-0">
                          <i className="fab fa-google-play fz30 text-white"></i>
                        </div>
                        <div className="flex-grow-1 ml20">
                          <p className="app-text fz13 mb0">Get in on</p>
                          <h6 className="app-title text-white fz14">
                            Google Play
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="social-widget">
                <h6 className="text-white mb20">Follow us on social media</h6>
                <div className="social-style1">
                  <a href="">
                    <i className="fab fa-facebook-f list-inline-item"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-twitter list-inline-item"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-instagram list-inline-item"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin-in list-inline-item"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="footer-widget mb-4 mb-lg-5">
              <div className="mailchimp-widget mb-4 mb-lg-5">
                <h6 className="title text-white mb20">
                  Keep Yourself Up to Date
                </h6>
                <div className="mailchimp-style1">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                  <button type="submit">Subscribe</button>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-auto">
                  <div className="link-style1 mb-3">
                    <h6 className="text-white mb25">Popular Search</h6>
                    <div className="link-list">
                      <a href="">Apartment for Rent</a>
                      <a href="">Apartment Low to hide</a>
                      <a href="">Offices for Buy</a>
                      <a href="">Offices for Rent</a>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="link-style1 mb-3">
                    <h6 className="text-white mb25">Quick Links</h6>
                    <ul className="ps-0">
                      <li>
                        <a href="">Terms of Use</a>
                      </li>
                      <li>
                        <a href="">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="">Pricing Plans</a>
                      </li>
                      <li>
                        <a href="">Our Services</a>
                      </li>
                      <li>
                        <a href="">Contact Support</a>
                      </li>
                      <li>
                        <a href="">Careers</a>
                      </li>
                      <li>
                        <a href="">FAQs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="link-style1 mb-3">
                    <h6 className="text-white mb25">Discover</h6>
                    <ul className="ps-0">
                      <li>
                        <a href="">Miami</a>
                      </li>
                      <li>
                        <a href="">Los Angeles</a>
                      </li>
                      <li>
                        <a href="">Chicago</a>
                      </li>
                      <li>
                        <a href="">New York</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container white-bdrt1 py-4">
        <div className="row">
          <div className="col-sm-6">
            <div className="text-center text-lg-start">
              <p className="copyright-text text-gray ff-heading">
                © Homez - All rights reserved
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="text-center text-lg-end">
              <p className="footer-menu ff-heading text-gray">
                <a className="text-gray" href="#">
                  Privacy
                </a>{" "}
                ·{" "}
                <a className="text-gray" href="#">
                  Terms
                </a>{" "}
                ·{" "}
                <a className="text-gray" href="#">
                  Sitemap
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
