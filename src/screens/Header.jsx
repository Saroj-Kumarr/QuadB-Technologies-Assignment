import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaSquarePhone } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex px-5 z-10 fixed w-full bg-white  justify-between  items-center custom-shadow">
      <Link to="/">
        <div className="flex items-center ">
          <img src={logo} alt="logo" className="h-20" />
          <h3 className="font-bold text-xl tracking-wide">
            QuadB Technologies
          </h3>
        </div>
      </Link>
      <div>
        <ul className="flex items-center text-sm tracking-wide font-semibold  justify-center gap-5">
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
      </div>
    </div>
  );
};

export default Header;
