import React from "react";
import errorImg from "../assets/error-404.png";
import { Link } from "react-router";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="border border-red-400 flex justify-center items-center text-center my-20">
        <div className="">
          <div className="w-[500px]  border border-green-400">
            <img className="w-full h-full" src={errorImg} alt="" />
          </div>
          <h2 className="text-[#001931] text-5xl font-semibold mt-4">
            Oops, page not found!
          </h2>
          <p className="text-[#627382] text-[20px] font-normal mt-2 mb-4">
            The page you are looking for is not available.
          </p>
          <Link
            to="/"
            className="btn bg-[linear-gradient(125deg,_#632EE3_5.68%,_#9F62F2_88.38%)] px-4 py-3 rounded-[4px] text-[#FFFFFF] text-[16px] font-semibold"
          >
            Go Back!
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
<h1>404 errors</h1>;
