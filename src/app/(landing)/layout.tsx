import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="wrapper ovh">
      <Navbar />
      <div className="body_content_wrapper">
        {children}
        <Footer />
      </div>
    </div>
  );
}
