import React from "react";

export default function LeaveReviewForm() {
  return (
    <>
      <div className="bsp_reveiw_wrt">
        <h6 className="fz17">Leave A Review</h6>
        <form className="comments_form mt30">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-4">
                <label className="fw600 ff-heading mb-2">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="creativelayers088"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <label className="fw600 ff-heading mb-2">Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Title"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="widget-wrapper sideborder-dropdown mb-4">
                <label className="fw600 ff-heading mb-2">Rating</label>
                <div className="form-style2 input-group">
                  <select
                    className="selectpicker"
                    data-live-search="true"
                    data-width="100%"
                  >
                    <option>Rating</option>
                    <option data-tokens="Five Star">Five Star</option>
                    <option data-tokens="Four Star">Four Star</option>
                    <option data-tokens="Three Star">Three Star</option>
                    <option data-tokens="Two Star">Two Star</option>
                    <option data-tokens="One Star">One Star</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-4">
                <label className="fw600 ff-heading mb-2">Review</label>
                <textarea
                  className="pt15"
                  rows={6}
                  placeholder="Write a Review"
                ></textarea>
              </div>
              <a
                href="page-property-single-v1.html"
                className="ud-btn btn-white2"
              >
                Submit Review
                <i className="fal fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
