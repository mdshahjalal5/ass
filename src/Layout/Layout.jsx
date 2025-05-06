import { Outlet } from "react-router-dom";
import Slider from "../components/Slider";
import { Nav, Footer } from "../components/Index";

const Layout = () => {
  return (
    <>
      <Nav />
      <main className="min-h-[60vh] max-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
