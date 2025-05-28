import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Seo from "./utils/Seo";

function Layout() {
  return (
    <>
      <Seo />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
