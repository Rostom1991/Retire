import { useState } from "react";
import logo from "../assets/Nimg/altenLogo.png";
import menu from "../assets/Nimg/menu.svg";
import { Link, Element } from "react-scroll";
function Navbar() {
  const [navCollapse, setNavCollapse] = useState(false);
  return (
    <nav className="flex items-center bg-white md:pr-12  gap-32 md:gap-0 justify-evenly fixed top-0 w-full z-10 h-24 shadow-gray-500 shadow-md ">
      <div className="h-full overflow-hidden flex pt-2 items-center  ">
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="  w-[8rem]  h-[8rem]  ">
          <img className="w-full h-full cursor-pointer " src={logo} alt="" />
        </Link>
      </div>
      <div className="hidden md:flex">
        <ul className="flex gap-12 text-[1.1rem]">
          <Link
            className="cursor-pointer hover:text-blue-700"
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            Home
          </Link>
          <Link
            className="cursor-pointer hover:text-blue-700"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            About
          </Link>
          <Link
            className="cursor-pointer hover:text-blue-700"
            activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            Services
          </Link>
          <Link
            className="cursor-pointer hover:text-blue-700"
            activeClass="active"
            to="team"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            Team
          </Link>
          <Link
            className="cursor-pointer hover:text-blue-700"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            Contact
          </Link>
        </ul>
      </div>
      <div className="hidden md:flex">
        <button className="rounded-full bg-green-500 text-white font-normal hover:bg-blue-950 transition-colors duration-500 ease-in-out font-['Roboto'] px-6 py-3">
          Subscribe
        </button>
      </div>
      <div className=" md:hidden relative">
        <img
          onClick={() => setNavCollapse(!navCollapse)}
          className="w-[2rem] cursor-pointer"
          src={menu}
          alt="menu"
        />
        <div
          onMouseLeave={() => setNavCollapse(false)}
          className={`${
            navCollapse
              ? " bg-white border-gray-300  rounded-sm border-[1px] h-fit w-fit pl-6 pr-10 py-4 right-0 absolute z-10"
              : "hidden"
          }`}>
          <ul className="flex flex-col items-start gap-2 font-normal text-[1.1rem]  ">
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-green-500 cursor-pointer">
              Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-green-500 cursor-pointer">
              About
            </Link>
            <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-green-500 cursor-pointer">
              Services
            </Link>
            <Link
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-green-500 cursor-pointer">
              Team
            </Link>
            <Link
              className="cursor-pointer hover:text-green-500"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
