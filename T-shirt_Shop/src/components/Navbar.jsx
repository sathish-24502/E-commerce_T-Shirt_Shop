import React from "react";
import "../App.css";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // const Navigate =useNavigate()

  // const HandleNavigate=(evt)=>{
  //  evt.preventDefault();
  //  Navigate("/loginpage")
  // }
  return (
    <section className="container">
      <div className="flex flex-col-reverse">
        <div className="flex w-screen justify-evenly max-[320px]:justify-between bg-[#0000ffc8] p-2 max-[320px]:px-4 max-md:gap-2 max-md:px-2">
          <div className="flex items-center justify-center text-2xl font-semibold">
            <Link to={"/"}>Name</Link>
          </div>
          <div className="flex justify-center items-center max-[320px]:hidden w-1/2">
            {/* rounded-xl w-1/2 max-[320px]: max-sm:w-3/5 max-md:w-3/4 max-lg:w-3/4 max-xl:w-3/4 */}
            <div className="border  w-3/4 max-sm:w-3/4 max-md:w-3/4 max-lg:w-3/4 max-xl:w-3/4 rounded-lg">
              <input
                id="NavInput"
                className="w-full p-1 pl-2 rounded-md max-[320px]: max-sm:w-full  focus:outline-none"
                type="text"
                placeholder="Search any things..."
              />
            </div>
            <button className="border p-1 bg-white rounded-full flex gap-1 items-center">
              <FaSearch title="Search" size={22} />
              <p className="font-medium max-[320px]:">Search</p>
            </button>
          </div>

          <div className="flex gap-4 justify-between items-center">
            <Link to={"loginpage"}
              title="Login"
              id="UserDiv"
              className="gap-1 flex justify-center items-center text-white"
            >
              <p id="loginbtn" className="font-medium">
                Login
              </p>
              <FaUser size={22} aria-label="Login" className="rounded-full" />
            </Link>
            <div
              title="ShoppingCart"
              id="UserDiv"
              className="gap-1 flex justify-center items-center text-white"
            >
              <button id="loginbtn" className="font-medium">
                Cart
              </button>
              <FaShoppingCart
                size={22}
                aria-label="ShoppingCart"
                className="rounded-full"
              />
            </div>
            <div title="Search"  className="gap-1 hidden justify-center items-center text-white max-[320px]:flex ">
              <FaSearch size={22} />
            </div>
          </div>
        </div>
        {/* <section className="flex justify-center items-center bg-[#0000009c] text-white animate-pulse ">
        <p className="text-lg font-serif">
          “Exclusive Online Offer 50% – Trendy T-Shirts”
        </p>
      </section> */}
      </div>
    </section>
  );
};

export default Navbar;
