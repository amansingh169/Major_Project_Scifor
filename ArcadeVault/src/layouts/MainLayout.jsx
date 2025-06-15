import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* The child routes will be rendered in its place */}
    </>
  );
};

export default MainLayout;
