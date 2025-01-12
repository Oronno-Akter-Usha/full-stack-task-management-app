import { Outlet } from "react-router-dom";
import Navbar from "./../Components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      <Outlet></Outlet>
      {/* footer */}
    </div>
  );
};

export default Main;
