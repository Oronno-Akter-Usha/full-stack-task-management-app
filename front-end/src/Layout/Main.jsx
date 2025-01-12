import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      {/* navbar */}
      <Outlet></Outlet>
      {/* footer */}
    </div>
  );
};

export default Main;
