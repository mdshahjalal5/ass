import { Outlet } from "react-router-dom";
import Slider from "../components/Slider";
import { Nav, Footer } from "../components/Index";
import ExampleComponent from "../components/media";

const Layout = () => {
  return (
    <>
      <Nav />
      <div className="max-container ">
        <Slider />
      </div>

      <main className="min-h-[60vh] max-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

// 28 date xm
