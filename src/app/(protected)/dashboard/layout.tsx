import Script from "next/script";
import DashboardNavbar from "./components/DashboardNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="wrapper">
      <DashboardNavbar />
      <div className="dashboard_content_wrapper">
        {children}
      </div>
      {/* <Script
        src="../../scripts/dashboard-script.js"
        // onLoad={() => {
        //   console.log("Script has loaded");
        // }}
        strategy="lazyOnload"
      /> */}
    </div>
  );
}
