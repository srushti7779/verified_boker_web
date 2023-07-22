import CTA from "./components/CTA/CTA";
import Explore from "./components/Explore/Explore";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Properties from "./components/Properties/Properties";
import Search from "./components/Search";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <>
      <div className="wrapper ovh">
        <Navbar />
        <div className="body_content_wrapper">
          <Hero />
          <Search />

          <div
            style={{
              marginInline: "2rem",
            }}
          >
            <HowItWorks />
            <Explore />
            <CTA />
          </div>
          <Testimonials />
          <Featured />
          <Properties />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
