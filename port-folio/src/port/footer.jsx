import React from "react";
import "./port.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="tweak text-white">
        <p style={{ textAlign: "center" }}>You need to tweak some code, I </p>
        <p style={{ textAlign: "center" }}>
          have the skills and creativity needed to take
        </p>
        <p style={{ textAlign: "center" }}>your project to the next level.</p>
      </div>
      <div 
      onClick={() => navigate('/contact')}
      className="contact_btn border border-[#303131] animate-bounce cursor-pointer">
        contact me
      </div>
      <div className="foot_list_blk border-t border-t-[#303131]">
        <ul className="foot_list">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <div className="icon_box flex justify-between items-center">
          <a href="https://github.com/gangamahesh246">
            <FaGithub className="icon cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/mahesh-karanam-45610525b/">
            <TbBrandLinkedinFilled className="icon cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
