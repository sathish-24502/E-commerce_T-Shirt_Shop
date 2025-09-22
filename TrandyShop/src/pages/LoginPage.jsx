import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LoginPage = () => {
  const Navigate = useNavigate()

  function HandleClickNavigate(e){
      e.preventDefault();
      Navigate("/signuppage")
  }
  return (
    <div className="container">
      <Navbar/>
      <div className="flex justify-center p-4  w- h-screen  items-center">
        <form onSubmit={HandleClickNavigate} className="flex max-sm:flex-col max-md:flex-col max-[320px]:flex-col  max-lg:flex-col  max-xl:flex-col border-2 px-4 py-6 gap-8 max-[320px]:gap-2 ">
          <div className="bg-[#2874F0] text-white py-4 max-[320px]:">
            <h1 className="text-3xl font-bold flex justify-center">Login</h1>
            <p className="w-96 max-[320px]:w-52 p-4 max-sm:text-sm mt-4">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <label for="text" id="username" name="username"></label>
            <input
            
              className="focus:outline-none w-72 p-2 border-b-2 border-[#FAB519]"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />

            <label for="password" id="pass" name="pass"></label>
            <input
              className="focus:outline-none w-72 p-2 border-b-2 border-[#FAB519]"
              type="password"
              id="pass"
              name="pass"
              placeholder="Password"
            />
            <div className="font-medium hover:rounded-xl p-1 bg-[#FAB519] text-lg w-52 max-[320px]:w-32 flex justify-center text-white mt-4">
              <button>Submit</button>
            </div>
            <div className="mt-7 max-[320px]:mt-3 flex items-center gap-3">
              <h2 className="text-sm text-gray-400">New User?</h2>
              <button className="text-blue-600 text-sm underline cursor-pointer">
                Create an account
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default LoginPage;
