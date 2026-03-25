import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import logo from "../assets/offchart-ss-conference-logo.png"
// import { a } from "react-router-dom";


export const Navbar: React.FC = () => {
  const [open, sehrefpen] = useState(false);

  const hrefggleMenu = () => sehrefpen(!open);

  return (
    <header className="w-full  bg-[#041B0E] text-white lg:px-[7em]">
      <nav className="flex items-center justify-between px-6  py-2">

        {/* Logo */}
     <a href="/">
       <img src={logo} className="lg:w-[150px] w-[100px]" alt="Offchart Logo"   loading="lazy"
 />
     </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 text-white font-medium">
          <li className="hover:text-[#13EC37] cursor-pointer transition">
               <a href="#why">
              Why Offchart
            </a>
          </li>
           <li className="hover:text-[#13EC37] cursor-pointer transition">
                 <a href="#speaker">
             Speakers
            </a>
          </li>
          <li className="hover:text-[#13EC37] cursor-pointer transition"> 
            <a href="#partners">
                Partners
            </a>
          </li> 
          <li className="hover:text-[#13EC37] cursor-pointer transition"> 
                 <a href="#exhibit">
              Exhibit
            </a>
          </li>
          {/* <li className="hover:text-[#13EC37] cursor-pointer transition"> 
                 <a href="#store">
             Store 
            </a>
          </li> */}
          <li className="hover:text-[#13EC37] cursor-pointer transition"> 
                 <a href="#attend">
              Attend
            </a>
          </li>
        </ul>
        {/* Mobile Menu Buthrefn */}
        <div className="md:hidden cursor-pointer text-[#fff]" onClick={hrefggleMenu}>
          {open ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden   bg-[#041B0E] overflow-hidden transition-all duration-300  ${
          open ? "max-h-[400px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 justify-center px-6 text-[18px] font-medium text-white">
           <li className="hover:text-[#13EC37] cursor-pointer transition">
               <a href="#why">
              Why Offchart
            </a>
          </li>
           <li className="hover:text-[#13EC37] cursor-pointer transition">
                 <a href="speaker">
             Speakers
            </a>
          </li>
          <li className="hover:text-[#13EC37] cursor-pointer transition"> 
            <a href="#partners">
                Partners
            </a>
          </li> 
          <li className="hover:text-[#13EC37] cursor-pointer transition"> 
                 <a href="#exhibit">
              Exhibit
            </a>
          </li>
          {/* <li className="hover:text-[#13EC37] cursor-pointer transition"> 
                 <a href="#store">
             Store 
            </a>
          </li> */}
          <li className="hover:text-[#13EC37] cursor-pointer transition"> 
                 <a href="#attend">
              Attend
            </a>
          </li>
        </ul>  
      </div>
    </header>
  );
};
