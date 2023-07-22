import React from "react";

export default function ContactForm() {
  return (
    <>
      <div className="agent-single-form home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative">
        <h4 className="form-title mb25">Contact Form</h4>
        <form className="form-style1">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb20">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb20">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb20">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb10">
                <textarea
                  cols={30}
                  rows={4}
                  placeholder="There are many variations of passages."
                ></textarea>
              </div>
            </div>
            <div className="col-md-12">
              <div className="d-grid">
                <a className="ud-btn btn-thm mb15" href="page-contact.html">
                  Send Message
                  <i className="fal fa-arrow-right-long"></i>
                </a>
                <a className="ud-btn btn-white2" href="page-contact.html">
                  Call<i className="fal fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
