import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="navbar pr-5 bg-opacity-80 bg-[#f1edfadb] fixed z-50 top-0 px-5 bg-blur-sm flex justify-between">
        {/* logo */}
        <Link
          to={"/"}
          className="flex flex-col justify-center items-center uppercase mr-5"
        >
          <h3 className=" text-xl md:text-3xl text-primary">Logo</h3>
        </Link>

        <div>
          {/* cart */}
          <Link to={"/cart"} className=" hover:text-primary mr-9 relative">
            <IoCartOutline className="text-2xl md:text-3xl" />
            <div className="w-5 h-5 rounded-full flex items-center justify-center absolute top-0 -right-3 border-none text-xs bg-red-600 text-white">
              0
            </div>
          </Link>

          <div className="text-black space-x-2">
            <Link to={"/login"}>
              <button className="bg-primary outline outline-primary text-white rounded-sm px-2 md:px-5 ">
                Login
              </button>
            </Link>
            <Link to={"/signup"}>
              <button className="outline outline-primary text-primary rounded-sm px-2 md:px-5">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
