import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-5 position-relative">
            <div className="home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white">
              <h4 className="form-title mb25">Have questions? Get in touch!</h4>
              <form className="form-style1">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb20">
                      <label className="heading-color ff-heading fw600 mb10">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb20">
                      <label className="heading-color ff-heading fw600 mb10">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb20">
                      <label className="heading-color ff-heading fw600 mb10">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb10">
                      <label className="heading-color ff-heading fw600 mb10">
                        Comment
                      </label>
                      <textarea
                        cols={30}
                        rows={4}
                        placeholder="There are many variations of passages."
                        className="resize-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-grid">
                      <a className="ud-btn btn-thm" href="page-contact.html">
                        Submit<i className="fal fa-arrow-right-long"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div>
              <h2 className="text-4xl mb30 text-capitalize">Contact Us</h2>
              <div className="flex mt50 mb80 gap-2">
                <div className="flex flex-col gap-3 items-center text-center w-1/3">
                  <div className="w-[20px] h-[20px] rounded-full bg-[#EB6753]"></div>
                  <p>Lorem Ipsm Ipsum dolor Lorem Ipsum dolor </p>
                </div>
                <div className="flex flex-col gap-3 items-center text-center w-1/3">
                  <div className="w-[20px] h-[20px] rounded-full bg-[#EB6753]"></div>
                  <p>Lorem Ipsum dolor Lorem Ipsum dolor Llor </p>
                </div>
                <div className="flex flex-col gap-3 items-center text-center w-1/3">
                  <div className="w-[20px] h-[20px] rounded-full bg-[#EB6753]"></div>
                  <p>Lor Lorem Ipsum dolor </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb30 text-capitalize">
                We&apos;d love to hear <br className="d-none d-lg-block" />
                from you.
              </h3>
              <p className="text">
                We are here to answer any question you may have. As a partner of
                corporates, realton has more than 9,000 offices of all sizes and
                all potential of session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
