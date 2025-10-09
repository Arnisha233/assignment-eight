import React from "react";
import NavBar from "./NavBar";
import logoImg from "../assets/logo.png";
import { Link } from "react-router";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 pt-9">
        <div className="flex items-center gap-1">
          <img className="w-[40px] h-[40px ]" src={logoImg} alt="" />
          <Link to="/" className="text-xl text-[16px] font-bold text-[#fff]">
            HERO.IO
          </Link>
        </div>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <div className="pr-8">
            <div>
              <h2>Social Links</h2>
            </div>
            <div className="mt-4 flex gap-4">
              <CiTwitter className="text-[20px]" />
              <CiLinkedin className="text-[20px]" />
              <CiFacebook className="text-[20px]" />
            </div>
          </div>
        </nav>
      </footer>
      <hr className="bg-[#E5E7EB]" />
      <footer className="footer sm:footer-horizontal footer-center bg-neutral text-base-content p-4 pb-9">
        <aside>
          <p className="text-[16px] font-normal text-[#fff]">
            Copyright © 2025 - All right reserved
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
