import { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { logo, hamburger, open, close } from "../assets";
import Button from "./Button";
import Pattern from "./Pattern";
import { patternMenuRight } from "../assets";
import styles from "../styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`flex w-full py-[3rem] 
          sm:py-[4rem] md:py-[4.563rem]`}
    >
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="w-[128px] h-[32px] 
          md:w-[160px] md:h-[40px] mr-[3rem] md:mr-[5rem]"
        />
      </div>

      {/* pc - nav */}
      <ul className="hidden sm:flex flex-1 items-center">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`text-white text-[1.125rem] 
            leading-[1.75rem] cursor-pointer mr-[2.5rem]
            ${styles.animation} hover:text-lightCoral`}
          >
            <Link to={nav.id}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      <div className="hidden sm:block">
        <Link to="/contact-us">
          <Button
            text="Contact US"
            styles={`${styles.animation} text-white border-2 
            hover:bg-white hover:text-stateGreen`}
          />
        </Link>
      </div>

      {/* mobile nav */}
      <div className="sm:hidden flex justify-end flex-1">
        <img
          src={toggle ? close : hamburger}
          className="w-[20px] relative z-[10] h-[17px] 
          object-contain self-center"
          onClick={() => setToggle((val) => !val)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"}
            h-screen w-[70%] absolute
            right-0 top-0 z-[5] bg-policeBlue
            py-[7rem] px-[3rem] flex-col
            items-center`}
        >
          <Pattern img={patternMenuRight} styles="right-0 bottom-0" />
          <ul className="sm:hidden flex flex-col items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`text-white  
                font-semibold text-[1.125rem] 
                leading-[1.75rem] cursor-pointer 
                ${styles.animation} hover:text-lightCoral
                ${
                  index !== navLinks.length - 1 ? "mb-[1.5rem]" : "mb-[2.25rem]"
                }`}
              >
                <Link to={nav.id}>{nav.title}</Link>
              </li>
            ))}
          </ul>

          <div className="block">
            <Link to="/contact-us">
              <Button
                text="Contact US"
                styles={`${styles.animation} text-white border-2 
                  hover:bg-white hover:text-stateGreen`}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* dims bg when menu toggle active */}
      <div
        className={`${
          toggle
            ? `block sm:hidden h-screen w-screen absolute
              top-0 left-0 z-[2] right-0 bottom-0 bg-[rgba(0,0,0,0.7)]`
            : "hidden"
        } `}
      />
    </nav>
  );
};

export default Navbar;
