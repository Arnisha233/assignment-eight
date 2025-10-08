import React from "react";
import playStore from "../../assets/playstore.png";
import appStore from "../../assets/app.png";
import hero from "../../assets/hero.png";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <h1 className="text-center text-[#001931] text-7xl font-bold">
        We Build <br />{" "}
        <span className="text-[#632EE3] font-black">Productive</span> Apps
      </h1>
      <p className="text-[#627382] text-[20px] font-normal w-[70%] text-center mt-4 mb-10">
        Welcome to HERO.IO — where creativity meets innovation! We build apps
        that make your daily life easier, smarter, and a little more magical
      </p>
      <div className="flex gap-4">
        <div className="flex gap-2.5 items-center border border-[#D2D2D2] py-3 px-6 rounded-[4px]">
          <img className="w-[32px]" src={playStore} alt="" />
          <Link
            to="https://play.google.com/store/games?hl=en"
            className="text-[#001931] font-semibold text-[20px]"
          >
            Google Play
          </Link>
        </div>
        <div className="flex gap-2.5 items-center border border-[#D2D2D2] py-3 px-6 rounded-[4px]">
          <img className="w-[32px]" src={appStore} alt="" />
          <Link
            to="https://www.apple.com/app-store/"
            className="text-[#001931] font-semibold text-[20px]"
          >
            Google Play
          </Link>
        </div>
      </div>
      <img className="mt-10" src={hero} alt="" />
      <div className="bg-[#632EE3] py-20 w-full">
        <h2 className="text-[#fff] text-5xl font-bold text-center">
          Trusted by Millions, Built for You
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10">
          <div className="text-center">
            <h5 className="text-white font-normal]">Total Downloads</h5>
            <h4 className="text-[64px] font-extrabold text-white">29.6M</h4>
            <h5 className="text-white font-normal]">
              21% more than last month
            </h5>
          </div>
          <div className="text-center">
            <h5 className="text-white font-normal]">Total Reviews</h5>
            <h4 className="text-[64px] font-extrabold text-white">906K</h4>
            <h5 className="text-white font-normal]">
              46% more than last month
            </h5>
          </div>
          <div className="text-center">
            <h5 className="text-white font-normal]">Active Apps</h5>
            <h4 className="text-[64px] font-extrabold text-white">132+</h4>
            <h5 className="text-white font-normal]">31 more will Launch</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
