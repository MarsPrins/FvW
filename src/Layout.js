import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Seo from "./utils/Seo";

function Layout(props) {
  return (
    <>
      <Seo />
      <Header />
      <Outlet />
      <Footer tekstenNL={props.tekstenNL} tekstenEN={props.tekstenEN} />
    </>
  );
}

export default Layout;
