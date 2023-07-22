"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import AboutSection from "../components/AboutSection";
import AgentHeader from "../components/AgentHeader";
import AgentInfo from "../components/AgentInfo";
import AgentPropertyCardList from "../components/AgentPropertyCardList";
import ContactForm from "../components/ContactForm";
import ImageListHeader from "../components/ImageListHeader";
import LeaveReviewForm from "../components/LeaveReviewForm";
import ReviewListElement from "../components/ReviewListElement";
import ReviewsHeader from "../components/ReviewsHeader";
import "./Agent.css";
const propertyDetails = [
  {
    imgSrc: "/images/listings/g1-1.jpg",
    price: "$14,000",
    propertyName: "Equestrian Family Home",
    propertyAddress: "California City, CA, USA",
    bedroomCount: 3,
    bathroomCount: 4,
    area: 1200,
    propertyStatus: "For Rent",
    featured: true,
  },
  {
    imgSrc: "/images/listings/g1-2.jpg",
    price: "$82,000",
    propertyName: "Luxury villa in Rego Park",
    propertyAddress: "California City, CA, USA",
    bedroomCount: 3,
    bathroomCount: 4,
    area: 1800,
    propertyStatus: "For Rent",
    featured: false,
  },
  {
    imgSrc: "/images/listings/g1-3.jpg",
    price: "$14,000",
    propertyName: "Equestrian Family Home",
    propertyAddress: "California City, CA, USA",
    bedroomCount: 3,
    bathroomCount: 4,
    area: 1200,
    propertyStatus: "For Sale",
    featured: false,
  },
  {
    imgSrc: "/images/listings/g1-4.jpg",
    price: "$14,000",
    propertyName: "Equestrian Family Home",
    propertyAddress: "California City, CA, USA",
    bedroomCount: 3,
    bathroomCount: 4,
    area: 1200,
    propertyStatus: "For Rent",
    featured: false,
  },
];

const reviewListDetails = [
  {
    imgSrc: "/images/blog/comments-2.png",
    name: "Bessie Cooper",
    date: "12 March 2022",
    reviewText:
      "Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul.",
    reviewImageList: [
      "/images/blog/blog-single-3.jpg",
      "/images/blog/blog-single-4.jpg",
      "/images/blog/blog-single-5.jpg",
      "/images/blog/blog-single-6.jpg",
    ],
  },
  {
    imgSrc: "/images/blog/comments-2.png",
    name: "Darrell Steward",
    date: "12 March 2022",
    reviewText:
      "Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul.",
    reviewImageList: [
      "/images/blog/blog-single-3.jpg",
      "/images/blog/blog-single-4.jpg",
      "/images/blog/blog-single-5.jpg",
      "/images/blog/blog-single-6.jpg",
    ],
  },
];

const AgentPage = () => {
  const params = useParams();

  const [propertyFilter, setPropertyFilter] = useState<string>("All");

  return (
    <section className="agent-single pt60 md:mx-12">
      <AgentHeader />
      <div className="container">
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-8 pr40 pr20-lg">
            <AboutSection />

            {/* All properties with filters start */}
            <div className="row align-items-center mt20">
              <ImageListHeader
                propertyFilter={propertyFilter}
                setPropertyFilter={setPropertyFilter}
              />

              <div className="col-lg-12">
                <AgentPropertyCardList
                  propertyDetails={propertyDetails}
                  propertyFilter={propertyFilter}
                />

                <div className="d-grid pb30 bdrb1">
                  <a
                    href="page-property-single-v1.html"
                    className="ud-btn btn-white2"
                  >
                    Show all 134 property
                    <i className="fal fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* All properties with filters ends */}

            {/* Review section */}
            <div className="row">
              <div className="col-lg-12">
                <div className="product_single_content mb35">
                  <div className="mbp_pagination_comments">
                    <div className="row">
                      {/* Reviwes header with filters */}
                      <ReviewsHeader />

                      {/* Reviews list */}
                      {reviewListDetails.map((element, index) => {
                        return (
                          <ReviewListElement
                            date={element.date}
                            imgSrc={element.imgSrc}
                            name={element.name}
                            reviewImageList={element.reviewImageList}
                            reviewText={element.reviewText}
                            key={`review_key_${element.name}_${element.date}_${index}`}
                          />
                        );
                      })}

                      {/* Button to show all reviews */}
                      <div className="col-md-12">
                        <div className="position-relative bdrb1 pt30 pb20">
                          <a
                            href="page-property-single-v1.html"
                            className="ud-btn btn-white2"
                          >
                            Show all 134 reviews
                            <i className="fal fa-arrow-right-long"></i>
                          </a>
                        </div>
                      </div>

                      {/* Leave a review inputs */}
                      <LeaveReviewForm />
                    </div>
                  </div>
                  {/* Review section ended */}
                </div>

                {/* Leave a review inputs */}
                <LeaveReviewForm />
              </div>
            </div>
            {/* Review section ended */}
          </div>

          <div className="col-lg-4">
            {/* Contact form */}
            <ContactForm />

            {/* Professional information of agent */}
            <AgentInfo />
          </div>
        </div>
      </div>

      <script src="js/jquery-3.6.4.min.js"></script>
      <script src="js/jquery-migrate-3.0.0.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/bootstrap-select.min.js"></script>
      <script src="js/jquery.mmenu.all.js"></script>
      <script src="js/ace-responsive-menu.js"></script>
      <script src="js/jquery-scrolltofixed-min.js"></script>
      <script src="js/wow.min.js"></script>
      <script src="js/script.js"></script>
    </section>
  );
};

export default AgentPage;
