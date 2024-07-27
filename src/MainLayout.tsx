import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className={`h-[calc(100vh-80px)]`}>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
}
export default MainLayout;
