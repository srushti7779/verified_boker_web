"use client";

export default function SignupModal() {
  return (
    <div className="signup-modal">
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Welcome to Realton
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="log-reg-form">
                <div className="navtab-style2">
                  <nav>
                    <div
                      className="nav nav-tabs mb20"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active fw600"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Sign In
                      </button>
                      <button
                        className="nav-link fw600"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        New Account
                      </button>
                    </div>
                  </nav>

                  <div className="tab-content" id="nav-tabContent2">
                    <div
                      className="tab-pane fade show active fz15"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div className="form-style1">
                        <div className="mb25">
                          <label className="form-label fw600 dark-color">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                          />
                        </div>
                        <div className="mb15">
                          <label className="form-label fw600 dark-color">
                            Password
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Password"
                          />
                        </div>
                        <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
                          <label className="custom_checkbox fz14 ff-heading">
                            Remember me
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </label>
                          <a className="fz14 ff-heading" href="#">
                            Lost your password?
                          </a>
                        </div>
                        <div className="d-grid mb20">
                          <button className="ud-btn btn-thm" type="button">
                            Sign in <i className="fal fa-arrow-right-long"></i>
                          </button>
                        </div>
                        <div className="hr_content mb20">
                          <hr />
                          <span className="hr_top_text">OR</span>
                        </div>
                        <div className="d-grid mb10">
                          <button className="ud-btn btn-white" type="button">
                            <i className="fab fa-google"></i> Continue Google
                          </button>
                        </div>
                        <div className="d-grid mb10">
                          <button className="ud-btn btn-fb" type="button">
                            <i className="fab fa-facebook-f"></i> Continue
                            Facebook
                          </button>
                        </div>
                        <div className="d-grid mb20">
                          <button className="ud-btn btn-apple" type="button">
                            <i className="fab fa-apple"></i> Continue Apple
                          </button>
                        </div>
                        <p className="dark-color text-center mb0 mt10">
                          Not signed up?{" "}
                          <a
                            className="dark-color fw600"
                            href="page-register.html"
                          >
                            Create an account.
                          </a>
                        </p>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade fz15"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div className="form-style1">
                        <div className="mb25">
                          <label className="form-label fw600 dark-color">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                          />
                        </div>
                        <div className="mb20">
                          <label className="form-label fw600 dark-color">
                            Password
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Password"
                          />
                        </div>
                        <div className="d-grid mb20">
                          <button className="ud-btn btn-thm" type="button">
                            Create account{" "}
                            <i className="fal fa-arrow-right-long"></i>
                          </button>
                        </div>
                        <div className="hr_content mb20">
                          <hr />
                          <span className="hr_top_text">OR</span>
                        </div>
                        <div className="d-grid mb10">
                          <button className="ud-btn btn-white" type="button">
                            <i className="fab fa-google"></i> Continue Google
                          </button>
                        </div>
                        <div className="d-grid mb10">
                          <button className="ud-btn btn-fb" type="button">
                            <i className="fab fa-facebook-f"></i> Continue
                            Facebook
                          </button>
                        </div>
                        <div className="d-grid mb20">
                          <button className="ud-btn btn-apple" type="button">
                            <i className="fab fa-apple"></i> Continue Apple
                          </button>
                        </div>
                        <p className="dark-color text-center mb0 mt10">
                          Not signed up?{" "}
                          <a
                            className="dark-color fw600"
                            href="page-register.html"
                          >
                            Create an account.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}