import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"; // Import your social media icons
import { FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full flex flex-col justify-center items-center z-50">
      <div className=" bg-opacity-0 backdrop-filter backdrop-blur-lg rounded-lg flex flex-col p-3">
        <a
          href="https://www.linkedin.com/in/samyyswift"
          className="text-white hover:text-blue-500"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.github.com/samyyswift"
          className="text-white hover:text-blue-500 mt-4"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.kaggle.com/samyyswift"
          className="text-white hover:text-blue-500 mt-4"
        >
          <FaKaggle size={24} />
        </a>
        <a href="" className="text-white hover:text-blue-500 mt-4">
          <FaTwitter size={24} />
        </a>
        <a
          href="#"
          className="text-white hover:text-blue-500 mt-4" // Added margin-top
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
