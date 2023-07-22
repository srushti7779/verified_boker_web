import React from "react";

export default function AgentPagination() {
  return (
    <>
      <div
        className="row justify-content-center wow fadeInUp"
        data-wow-delay="300ms"
      >
        <div className="mbp_pagination text-center">
          <ul className="page_navigation">
            <li className="page-item">
              <a className="page-link" href="#">
                {" "}
                <span className="fas fa-angle-left"></span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">
                2 <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                20
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <span className="fas fa-angle-right"></span>
              </a>
            </li>
          </ul>
          <p className="mt10 pagination_page_count text-center">
            1 - 20 of 300+ property available
          </p>
        </div>
      </div>
    </>
  );
}
