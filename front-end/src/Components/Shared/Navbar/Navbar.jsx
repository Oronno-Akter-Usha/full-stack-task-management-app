// import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLinks title={"Home"} pathName={"/"}></NavLinks>
      <NavLinks title={"Order"} pathName={"/order"}></NavLinks>
    </>
  );
  return (
    <div className="">
      <div className="navbar pr-5 bg-opacity-80 bg-[#f1edfadb] fixed z-50 top-0 px-5 bg-blur-sm">
        <div className="mr-auto">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to={"/"}
            className="flex flex-col justify-center items-center uppercase"
          >
            <h3 className=" text-xl md:text-3xl">Logo</h3>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navLinks}</ul>
        </div>

        <div className="text-black">
          {/* cart */}
          {/* <Link to={"/cart"} className=" hover:text-primary mr-9 relative">
            <FaCartShopping className="text-2xl" />
            <div className="w-5 h-5 rounded-full flex items-center justify-center absolute top-0 -right-3 border-none text-xs bg-red-600 text-white">
              0
            </div>
          </Link> */}

          <Link to={"/login"}>
            <button className="bg-primary text-white rounded-sm px-2 md:px-5">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
