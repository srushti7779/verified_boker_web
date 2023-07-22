import React, { ReactNode } from "react";

export default function ReviewListElement({
  imgSrc,
  name,
  date,
  reviewText,
  reviewImageList,
}: {
  imgSrc: string;
  name: string;
  date: string;
  reviewText: string;
  reviewImageList: string[];
}) {
  function ReviewImages(props: any): ReactNode {
    return (
      <li className="list-inline-item mb5-xs">
        <img
          className="bdrs6"
          //   src="/images/blog/blog-single-3.jpg"
          src={props.reviewImgSrc}
          alt="review-img"
        />
      </li>
    );
  }
  return (
    <>
      <div className="col-md-12">
        <div className="mbp_first position-relative d-flex align-items-center justify-content-start mb30-sm">
          <img src={imgSrc} className="mr-3" alt="comments-2.png" />
          <div className="ml20">
            <h6 className="mt-0 mb-0">{name}</h6>
            <div>
              <span className="fz14">{date}</span>
              <div className="blog-single-review">
                <ul className="mb0 ps-0">
                  <li className="list-inline-item me-0">
                    <a href="#">
                      <i className="fas fa-star review-color2 fz10"></i>
                    </a>
                  </li>
                  <li className="list-inline-item me-0">
                    <a href="#">
                      <i className="fas fa-star review-color2 fz10"></i>
                    </a>
                  </li>
                  <li className="list-inline-item me-0">
                    <a href="#">
                      <i className="fas fa-star review-color2 fz10"></i>
                    </a>
                  </li>
                  <li className="list-inline-item me-0">
                    <a href="#">
                      <i className="fas fa-star review-color2 fz10"></i>
                    </a>
                  </li>
                  <li className="list-inline-item me-0">
                    <a href="#">
                      <i className="fas fa-star review-color2 fz10"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text mt20 mb20">{reviewText}</p>
        <ul className="mb20 ps-0">
            
          {reviewImageList.map((element, index) => {
            return (
              <ReviewImages
                key={`ReviewImages_${name}_key_${index}`}
                reviewImgSrc={element}
              />
            );
          })}
          
        </ul>
        <div className="review_cansel_btns d-flex bdrb1 pb30">
          <a href="#">
            <i className="fas fa-thumbs-up"></i>Helpful
          </a>
          <a href="#">
            <i className="fas fa-thumbs-down"></i>Not helpful
          </a>
        </div>
      </div>
    </>
  );
}
