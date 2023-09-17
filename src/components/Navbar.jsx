import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/Nimg/altenLogo.png";
import arrow from "../assets/Nimg/arrow.svg";
import france from "../assets/Nimg/france.svg";
import italy from "../assets/Nimg/italy.svg";
import uk from "../assets/Nimg/uk.svg";
import germany from "../assets/Nimg/germany.svg";

import menu from "../assets/Nimg/menu.svg";
import call from "../assets/Nimg/call.svg";
import { Link } from "react-scroll";
function Navbar() {
  const { t, i18n } = useTranslation();
  const [navCollapse, setNavCollapse] = useState(false);
  const [langDrop, setLangDrop] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");

  useEffect(() => {
    setSelectedLang(i18n.language);
  }, []);

  const changeLanguage = (language) => {
    setSelectedLang(language);
    i18n.changeLanguage(language);
    setLangDrop(false);
  };
  return (
    <nav className="flex items-center bg-white md:pr-12  gap-32 md:gap-0 justify-evenly fixed top-0 w-full z-10 h-24 shadow-gray-300 shadow-md ">
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
            {t("home")}
          </Link>
          <Link
            className="cursor-pointer hover:text-blue-700"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            {t("about")}
          </Link>
          <Link
            className="cursor-pointer hover:text-blue-700"
            activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            {t("services")}
          </Link>
          <Link
            className="cursor-pointer hover:text-blue-700"
            activeClass="active"
            to="team"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            {t("team")}
          </Link>
          <Link
            className="cursor-pointer hover:text-blue-700"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            {t("contact")}
          </Link>
        </ul>
      </div>
      <div className="hidden md:flex gap-6 ">
        <Link
          className="cursor-pointer hover:text-blue-700"
          to="joinUs"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
          <button className="rounded-full bg-green-500 text-white font-normal hover:bg-blue-950 transition-colors duration-500 ease-in-out  px-10 py-3">
            {t("join")}
          </button>
        </Link>
        <div className="flex w-max items-center justify-center gap-2  relative">
          <img className="w-[2rem] text-blue-500" src={call} alt="call" />
          <a href="tel:+123-456-789">+123-456-789</a>
        </div>

        <div className="relative m-auto ">
          <div
            onClick={() => setLangDrop(!langDrop)}
            className="flex gap-2 items-center cursor-pointer">
            <img
              className="w-[1.5rem]"
              src={
                selectedLang === "en"
                  ? uk
                  : selectedLang === "fr"
                  ? france
                  : selectedLang === "de"
                  ? germany
                  : italy
              }
              alt=""
            />
            <span className="text-sm uppercase">
              {selectedLang === "en"
                ? "EN"
                : selectedLang === "fr"
                ? "FR"
                : selectedLang === "de"
                ? "DE"
                : "IT"}
            </span>
            <img className="w-[1rem] rotate-180" src={arrow} alt="" />
          </div>
          <div
            className={`${
              langDrop
                ? "absolute  bg-white flex flex-col top-10 w-40 rounded-sm shadow-xl"
                : "hidden"
            }  `}>
            <div
              onClick={() => changeLanguage("en")}
              className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer p-3">
              <img className="w-[1.5rem]" src={uk} alt="" />
              <span>English</span>
            </div>
            <div
              onClick={() => changeLanguage("fr")}
              className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer p-3">
              <img className="w-[1.5rem]" src={france} alt="" />
              <span>French</span>
            </div>
            <div
              onClick={() => changeLanguage("de")}
              className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer p-3">
              <img className="w-[1.5rem]" src={germany} alt="" />
              <span>German</span>
            </div>
            {/* <div
              onClick={() => changeLanguage("it")}
              className="flex items-center gap-2 hover:bg-gray-200 p-3 cursor-pointer">
              <img className="w-[1.5rem]" src={italy} alt="" />
              <span>Italian</span>
            </div> */}
          </div>
        </div>
      </div>

      <div className=" md:hidden relative">
        <img
          onClick={() => setNavCollapse(!navCollapse)}
          className="w-[2rem] cursor-pointer md:mr-0 mr-16"
          src={menu}
          alt="menu"
        />
        <div
          onMouseLeave={() => setNavCollapse(false)}
          className={`${
            navCollapse
              ? " bg-white border-gray-300 w-[15rem] rounded-sm border-[1px] h-fit  pl-6 pr-36 py-4 right-0 absolute z-10"
              : "hidden"
          }`}>
          <ul className="flex flex-col items-start gap-2 font-normal relative text-[1.1rem]  ">
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
            <div className="">
              <Link
                className="cursor-pointer hover:text-blue-950 transition-colors duration-500 ease-in-out "
                to="joinUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <button className="rounded-full bg-green-500  px-8 py-2 w-max text-white font-normal hover:bg-blue-950 transition-colors duration-500 ease-in-out">
                  Join Us
                </button>
              </Link>
            </div>
            <div className="flex w-max items-center justify-center gap-2  relative">
              <img className="w-[2rem] text-blue-500" src={call} alt="call" />
              <span className="">+123-456-789</span>
            </div>
          </ul>
          <section className="w-full mt-2">
            <div
              onClick={() => changeLanguage("en")}
              className="flex items-center gap-2  cursor-pointer p-3">
              <img className="w-[1rem]" src={uk} alt="" />
              <span className="hover:text-blue-600 text-sm">English</span>
            </div>
            <div
              onClick={() => changeLanguage("fr")}
              className="flex items-center gap-2  cursor-pointer p-3">
              <img className="w-[1rem]" src={france} alt="" />
              <span className="hover:text-blue-600 text-sm">French</span>
            </div>
            <div
              onClick={() => changeLanguage("de")}
              className="flex items-center gap-2  cursor-pointer p-3">
              <img className="w-[1rem]" src={germany} alt="" />
              <span className="hover:text-blue-600 text-sm">German</span>
            </div>
          </section>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
