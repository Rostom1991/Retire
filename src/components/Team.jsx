import hotel from "../assets/Nimg/hotel.svg";
import administration from "../assets/Nimg/administration.svg";
import director from "../assets/Nimg/director.svg";
import handshake from "../assets/Nimg/handshake.svg";
import hrd from "../assets/Nimg/hrd.svg";
import pharmacy from "../assets/Nimg/pharmacy.svg";
import persons from "../assets/Nimg/persons.svg";
import swimmer from "../assets/Nimg/swimmer.svg";
import doctor from "../assets/Nimg/doctor.svg";
import nurce from "../assets/Nimg/nurce.svg";
import food from "../assets/Nimg/food.svg";
import driver from "../assets/Nimg/driver.svg";
import bones from "../assets/Nimg/bones.svg";
import physiotherapist from "../assets/Nimg/physiotherapist.svg";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

function Team() {
  const { t } = useTranslation();
  return (
    <div className="">
      <div
        name="team"
        className="  bg-blend-darken bg-black/60 h-[60vh] md:h-[80vh] bg-no-repeat bg-cover bg-fixed lg:pl-8 bg-[url('https://srmhospitals.org/wp-content/uploads/2018/03/team-of-doctors.jpg')]  ">
        <div className="flex flex-col lg:pt-28 md:p-16 pt-12 w-4/5 m-auto justify-start items-start gap-3 md:gap-6">
          <span className="bg-orange-500 font-normal rounded-full py-2 px-4 text-sm  text-white">
            {t("welcome")}
          </span>
          <div className="flex flex-col gap-2">
            <h1 className="lg:text-7xl text-4xl font-bold text-white pt-4">
              {t("best team")}
            </h1>
            <span className="md:text-6xl text-5xl font-bold text-blue-400">
              <span className="text-2xl font-medium">{t("for")} </span>
              {t("our patients")}
            </span>{" "}
          </div>
          <p className="text-orange-200 text-sm md:py-0 py-4 font-['Roboto']">
            {t("house")}
          </p>
          <Link
            to="joinUs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <button className=" hover:bg-blue-700 transition duration-500 ease-in-out rounded-full bg-blue-500  font-normal py-4 px-12 text-white">
              {t("join")}
            </button>
          </Link>
        </div>
      </div>
      <div className="h-screen grid place-content-center ">
        <div className="flex flex-col lg:flex gap-0 lg:flex-row w-full ">
          <div className="flex flex-col  items-center justify-start  pt-0 md:pt-20 gap-12 p-8 lg:w-1/2 bg-gradient-to-b from-white to-orange-200 ">
            <h1 className="text-blue-950 font-semibold md:pt-0 pt-4  text-4xl">
              {t("intro h1")}{" "}
            </h1>
            <p className="text-gray-700 md:text-md max-w-lg font-['Roboto'] ">
              {t("introduction")}
            </p>
            <div className="flex justify-center lg:gap-36 gap-8 items-center w-full  ">
              <div className="flex items-center justify-center gap-2 md:gap-4">
                <img
                  className="lg:w-[4rem] w-[2.5rem]"
                  src={administration}
                  alt="administration"
                />
                <h1 className=" md:text-xl font-semibold font-['Roboto']  text-blue-950">
                  {t("admin")}
                </h1>
              </div>
              <div className="flex items-center justify-center gap-4">
                <img
                  className="lg:w-[4rem] w-[2.5rem]"
                  src={hotel}
                  alt="hotel"
                />
                <h1 className="  md:text-xl font-semibold font-['Roboto'] text-blue-950">
                  {t("hotel")}
                </h1>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2  ">
            <img
              src="https://images.pexels.com/photos/7551607/pexels-photo-7551607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <section className=" w-full px-16  gap-24 flex flex-col  lg:mt-0  h-screen">
        <div className=" grid place-items-center gap-20">
          <h1 className="text-blue-950 lg:text-5xl text-3xl uppercase underline tracking-wide font-bold decoration-2 ">
            Administration
          </h1>
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 lg:gap-16">
            <div className="flex flex-col items-center gap-2">
              <div className="md:w-[9rem] w-[7rem] ring-2 ring-gray-300 hover:bg-blue-950 cursor-pointer transition-colors duration-500 ease-in-out bg-gray-100 p-8 rounded-full">
                <img src={director} alt="director" />
              </div>
              <span className="font-bold md:text-md text-sm text-blue-950">
                Director
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="md:w-[9rem] w-[7rem] ring-2 ring-gray-300 hover:bg-blue-950 cursor-pointer transition-colors duration-500 ease-in-out bg-gray-100 p-8 rounded-full">
                <img src={persons} alt="interim" />
              </div>
              <span className="font-bold md:text-md text-sm text-blue-950">
                Interim Directors 
              </span>
            </div>
            <div className="flex flex-col items-center  gap-2">
              <div className="md:w-[9rem] w-[7rem] ring-2 ring-gray-300 hover:bg-blue-950 cursor-pointer transition-colors duration-500 ease-in-out bg-gray-100 p-8 rounded-full">
                <img src={hrd} alt="hrd" />
              </div>
              <span className="font-bold md:text-md text-sm text-blue-950">
                HRD
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="md:w-[9rem] w-[7rem] ring-2 ring-gray-300 hover:bg-blue-950 cursor-pointer transition-colors duration-500 ease-in-out bg-gray-100 p-8 rounded-full">
                <img src={handshake} alt="represent" />
              </div>
              <span className="font-bold md:text-md text-sm text-blue-950">
                GER/TUN Representative
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="md:w-[9rem] w-[7rem] ring-2 ring-gray-300 hover:bg-blue-950 cursor-pointer transition-colors duration-500 ease-in-out bg-gray-100 p-8 rounded-full">
                <img src={pharmacy} alt="director" />
              </div>
              <span className="font-bold md:text-md text-sm text-blue-950">
                Pharmacist
              </span>
            </div>
          </div>
        </div>
        <div className="lg:h-[50vh] h-screen grid place-items-center gap-10 px-12">
          <h1 className="text-blue-950 text-3xl lg:text-5xl uppercase font-bold tracking-wide underline decoration-2">
            Hotel
          </h1>
          <div className="grid lg:grid-cols-4 items-center justify-center grid-cols-2 lg:gap-x-24 gap-8 gap-y-8">
            <div className="flex flex-col items-center  gap-2">
              <div className="md:w-[8.5rem] w-[6.5rem] ring-2  ring-gray-300 bg-gray-600 cursor-pointer transition-colors duration-500 ease-in-out hover:bg-gray-100 p-8 rounded-full">
                <img src={doctor} alt="doctor" />
              </div>
              <span className="font-bold md:text-md text-sm text-blue-950">
                2 Doctors
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="md:w-[9rem] w-[7rem] ring-2 ring-gray-300 bg-gray-600 cursor-pointer transition-colors duration-500 ease-in-out hover:bg-gray-100 p-8 rounded-full">
                <img src={nurce} alt="interim" />
              </div>
              <span className="font-bold md:text-md text-sm text-blue-950">
                Nurces
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="md:w-[9rem] w-[7rem] ring-2 ring-gray-300 bg-gray-600 cursor-pointer transition-colors duration-500 ease-in-out hover:bg-gray-100 p-8 rounded-full">
                <img src={nurce} alt="hrd" />
              </div>
              <span className="font-bold md:text-md text-sm text-blue-950">
                Nurce 1-1 (130$)
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="md:w-[9rem] w-[7rem] ring-2 ring-gray-300 bg-gray-600 cursor-pointer transition-colors duration-500 ease-in-out hover:bg-gray-100 p-8 rounded-full">
                <img src={swimmer} alt="represent" />
              </div>
              <span className="font-bold md:text-md text-center text-sm text-blue-950">
                Swimming Pool Coach
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="md:w-[9rem] w-[7rem] ring-2 ring-gray-300 bg-gray-600 cursor-pointer transition-colors duration-500 ease-in-out hover:bg-gray-100 p-8 rounded-full">
                <img src={driver} alt="director" />
              </div>
              <span className="font-bold md:text-md text-center text-sm text-blue-950">
                3 Women Chauffeur
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="md:w-[9rem] w-[7rem] ring-2 ring-gray-300 bg-gray-600 cursor-pointer transition-colors duration-500 ease-in-out hover:bg-gray-100 p-8 rounded-full">
                <img src={physiotherapist} alt="director" />
              </div>
              <span className="font-bold md:text-md text-sm text-blue-950">
                3 Physiotherapists
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="md:w-[9rem] w-[7rem] ring-2 ring-gray-300 bg-gray-600 cursor-pointer transition-colors duration-500 ease-in-out hover:bg-gray-100 p-8 rounded-full">
                <img src={bones} alt="director" />
              </div>
              <span className="font-bold md:text-md text-sm text-center text-blue-950">
                Orthopedic (Children)
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="md:w-[9rem] w-[7rem] ring-2 ring-gray-300 bg-gray-600 cursor-pointer transition-colors duration-500 ease-in-out hover:bg-gray-100 p-8 rounded-full">
                <img src={food} alt="director" />
              </div>
              <span className="font-bold md:text-md text-sm text-blue-950">
                Healthy Meals
              </span>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Team;
