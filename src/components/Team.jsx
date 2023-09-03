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

function Team() {
  return (
    <div className="">
      <div
        name="team"
        className="  bg-blend-darken bg-black/50 h-[80vh] bg-no-repeat bg-cover bg-fixed lg:pl-32 bg-[url('https://images.pexels.com/photos/7551583/pexels-photo-7551583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] ">
        <div className="flex flex-col pt-36 w-4/5 m-auto justify-start items-start gap-6">
          <span className="bg-orange-500 font-normal rounded-full py-2 px-4 text-sm font-['Roboto'] text-white">
            Welcome To The Best Retirement Home
          </span>
          <h1 className="lg:text-7xl text-5xl font-bold text-white">
            Our Team For
          </h1>
          <span className="text-6xl font-bold text-blue-400">130 Patients</span>{" "}
          <p className="text-white text-sm font-['Roboto']">
            Most Carefull House In Senior Care
          </p>
          <button className=" hover:bg-orange-700 transition duration-500 ease-in-out rounded-full bg-blue-400  font-normal py-4 px-12 text-white">
            Join Us
          </button>
        </div>
      </div>
      <div className="h-screen grid place-content-center mt-20 lg:mt-0  ">
        <div className="flex flex-col lg:flex lg:flex-row w-full border-[1px] border-gray-400 shadow-2xl shadow-gray-400">
          <div className="flex flex-col  items-center justify-start pt-12 gap-8 p-8 lg:w-1/2 bg-orange-200 ">
            <h1 className="text-blue-950 font-semibold text-5xl">
              Introduction
            </h1>
            <p className="text-gray-700 text-lg max-w-lg font-['Roboto'] ">
              When the members of our community arrive in VIRIDIS, most of them
              need care. Our Retirement Home provides tailor-made Assisted
              Living services for all its residents. By meeting the personal
              needs of each resident, we make them feel at VIRIDIS like at home.
              This is through our team, which consists of two main teams:
            </p>
            <div className="flex justify-center gap-36 items-center w-full pt-12">
              <div className="flex items-center justify-center gap-4">
                <img
                  className="w-[4rem]"
                  src={administration}
                  alt="administration"
                />
                <h1 className=" text-xl font-semibold font-['Roboto']  text-blue-950">
                  Administration
                </h1>
              </div>
              <div className="flex items-center justify-center gap-4">
                <img className="w-[4rem]" src={hotel} alt="hotel" />
                <h1 className=" text-xl font-semibold font-['Roboto'] text-blue-950">
                  Hotel
                </h1>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 ">
            <img
              src="https://images.pexels.com/photos/7551607/pexels-photo-7551607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
      <section className=" w-11/12 gap-24 flex flex-col mx-auto lg:mt-0 mt-20  h-screen">
        <div className=" grid place-items-center gap-20">
          <h1 className="text-blue-950 lg:text-5xl text-3xl uppercase underline tracking-wide font-normal decoration-2 ">
            Administration
          </h1>
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-16">
            <div className="flex flex-col items-center gap-2">
              <div className="w-[9rem] ring-2 ring-gray-300 hover:bg-blue-950 cursor-pointer transition-colors duration-500 ease-in-out bg-gray-100 p-8 rounded-full">
                <img src={director} alt="director" />
              </div>
              <span className="font-bold text-blue-950">Director</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-[9.5rem] ring-2 ring-gray-300 hover:bg-blue-950 cursor-pointer transition-colors duration-500 ease-in-out bg-gray-100 p-8 rounded-full">
                <img src={persons} alt="interim" />
              </div>
              <span className="font-bold text-blue-950">
                Interim Directors 
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-[9rem] ring-2 ring-gray-300 hover:bg-blue-950 cursor-pointer transition-colors duration-500 ease-in-out bg-gray-100 p-8 rounded-full">
                <img src={hrd} alt="hrd" />
              </div>
              <span className="font-bold text-blue-950">HRD</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-[9rem] ring-2 ring-gray-300 hover:bg-blue-950 cursor-pointer transition-colors duration-500 ease-in-out bg-gray-100 p-8 rounded-full">
                <img src={handshake} alt="represent" />
              </div>
              <span className="font-bold text-blue-950">
                GER/TUN Representative
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-[9rem] ring-2 ring-gray-300 hover:bg-blue-950 cursor-pointer transition-colors duration-500 ease-in-out bg-gray-100 p-8 rounded-full">
                <img src={pharmacy} alt="director" />
              </div>
              <span className="font-bold text-blue-950">Pharmacist</span>
            </div>
          </div>
        </div>
        <div className="lg:h-[50vh] h-screen grid place-items-center gap-10 px-12">
          <h1 className="text-blue-950 text-3xl lg:text-5xl uppercase font-normal tracking-wide underline decoration-2">
            Hotel
          </h1>
          <div className="grid lg:grid-cols-4 grid-cols-3 gap-x-24 gap-y-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-[9rem] ring-2 ring-gray-300 bg-gray-600 cursor-pointer transition-colors duration-500 ease-in-out hover:bg-gray-100 p-8 rounded-full">
                <img src={doctor} alt="doctor" />
              </div>
              <span className="font-bold text-blue-950">2 Doctors </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-[9rem] ring-2 ring-gray-300 bg-gray-600 cursor-pointer transition-colors duration-500 ease-in-out hover:bg-gray-100 p-8 rounded-full">
                <img src={nurce} alt="interim" />
              </div>
              <span className="font-bold text-blue-950">Nurces</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-[9rem] ring-2 ring-gray-300 bg-gray-600 cursor-pointer transition-colors duration-500 ease-in-out hover:bg-gray-100 p-8 rounded-full">
                <img src={nurce} alt="hrd" />
              </div>
              <span className="font-bold text-blue-950">Nurce 1-1 (130$)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-[9rem] ring-2 ring-gray-300 bg-gray-600 cursor-pointer transition-colors duration-500 ease-in-out hover:bg-gray-100 p-8 rounded-full">
                <img src={swimmer} alt="represent" />
              </div>
              <span className="font-bold text-blue-950">
                Swimming Pool Coach
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-[9rem] ring-2 ring-gray-300 bg-gray-600 cursor-pointer transition-colors duration-500 ease-in-out hover:bg-gray-100 p-8 rounded-full">
                <img src={driver} alt="director" />
              </div>
              <span className="font-bold text-blue-950">3 Women Chauffeur</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-[9rem] ring-2 ring-gray-300 bg-gray-600 cursor-pointer transition-colors duration-500 ease-in-out hover:bg-gray-100 p-8 rounded-full">
                <img src={physiotherapist} alt="director" />
              </div>
              <span className="font-bold text-blue-950">
                3 Physiotherapists
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-[9rem] ring-2 ring-gray-300 bg-gray-600 cursor-pointer transition-colors duration-500 ease-in-out hover:bg-gray-100 p-8 rounded-full">
                <img src={bones} alt="director" />
              </div>
              <span className="font-bold text-blue-950">
                Orthopedic (for children)
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-[9rem] ring-2 ring-gray-300 bg-gray-600 cursor-pointer transition-colors duration-500 ease-in-out hover:bg-gray-100 p-8 rounded-full">
                <img src={food} alt="director" />
              </div>
              <span className="font-bold text-blue-950">Healthy Meals</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
