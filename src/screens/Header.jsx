import React from "react";
import { Link } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaSquarePhone } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidCameraMovie } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex px-5 z-10 fixed w-full bg-white  justify-between  items-center custom-shadow py-5 text-[#155e75]">
      <Link to="/">
        <div className="flex items-center gap-2">
          <BiSolidCameraMovie className="text-3xl" />
          <h3 className="flex font-bold text-2xl tracking-wide">MovieHub</h3>
        </div>
      </Link>

    

      <div>
        <ul className="flex items-center text-sm tracking-wide font-semibold  justify-center gap-5 sm:hidden md:hidden">
          <li className="flex items-center gap-1">
            <IoHome className="text-xl" />
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center gap-1">
            <FaGithubSquare className="text-xl" />
            <a href="https://github.com/nkashyap01">Github</a>
          </li>
          <li className="flex items-center gap-1">
            <BsLinkedin className="text-lg rounded-sm" />
            <a href="https://www.linkedin.com/in/nehakumarii/">Linkedin</a>
          </li>
          <li className="flex items-center gap-1">
            <FaSquarePhone className="text-xl" />
            Contact
          </li>
        </ul>
        <GiHamburgerMenu className="text-3xl sm:block md:block hidden" />
      </div>
    </div>
  );
};

export default Header;
