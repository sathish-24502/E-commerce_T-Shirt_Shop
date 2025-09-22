import React from "react";
import { FaLaptop, FaMobile, FaMouse, FaPodcast } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SignupPage = () => {
  const Navigate = useNavigate();

  function HandleClickNavigate(e) {
    e.preventDefault();
    Navigate("/loginpage");
  }
  return (
    <div className="container ">
      <Navbar />
      <form onSubmit={HandleClickNavigate}>
        <div className="flex justify-center h-screen items-center ">
          <div className=" flex justify-center mt-10 p-8 gap-8 max-[320px]:gap-2  max-[320px]:w-screen max-sm:flex-col  max-md:flex-col  max-lg:flex-col  max-xl:flex-col">
            <div className="bg-[#2874F0] text-white p-8 gap-9 flex flex-col justify-between max-[320px]:gap-9 items-center ">
              <div className="">
                <h1 className="text-3xl font-bold flex justify-center">
                  SignUp
                </h1>
                <p className="w-72 max-[320px]:px-10 max-[320px]:text-sm mt-4">
                  Create an account to register and access all features.
                </p>
              </div>
              <div className="flex justify-center items-center p-1">
                <div className="flex relative justify-center items-center border-2 shadow-inner w-32 shadow-[#FAB519] rounded-full">
                  <FaLaptop className="size-20 rounded-3xl text-[#]" />
                  {/* <FaMouse className="size-12 rotate-10 text-[#FAB519]"/> */}
                  <FaMobile className="text-[#] rounded-xl size-12 absolute translate-x-9 -translate-y-8 " />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <label for="text" name="username" type="text"></label>
              <input
                type="text"
                name="username"
                placeholder="Name"
                className="focus:outline-none w-72 p-2 border-b-2 border-[#FAB519]"
              />

              <label for=""></label>
              <input
                type="email"
                placeholder="Email"
                className="focus:outline-none w-72 p-2 border-b-2 border-[#FAB519]"
              />

              <label for=""></label>
              <input
                type="password"
                placeholder="Password"
                className="focus:outline-none w-72 p-2 border-b-2 border-[#FAB519]"
              />

              <button className="font-medium hover:rounded-xl p-1 bg-[#FAB519] text-lg w-52 flex justify-center text-white mt-4">
                Submit
              </button>
              <div className="flex items-center gap-2">
                <p className="text-gray-400">Already you have an account.!</p>
                <button className="text-blue-600 underline cursor-pointer">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* <Footer/> */}
    </div>
  );
};

export default SignupPage;
