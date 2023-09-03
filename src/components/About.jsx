import patient1 from "../assets/Nimg/patient1.jpg";
import patient2 from "../assets/Nimg/patient2.jpg";
import patient3 from "../assets/Nimg/patient3.jpg";

import check from "../assets/Nimg/checkbox.svg";
import { Element } from "react-scroll";
function About() {
  return (
    <div className="flex flex-col py-16">
      <Element
        name="about"
        className=" bg-white lg:px-32 relative flex flex-col  h-screen ">
        <div className="md:flex items-center justify-center gap-32 w-5/6 m-auto  ">
          <div className="flex flex-col gap-6 items-start">
            <h1 className="lg:text-6xl text-5xl mb-6 lg:mb-0    font-semibold text-blue-950 text-center">
              About Us
            </h1>
            <h1 className="text-lg max-x-2xl  text-gray-600 ">
              Viridis is a real German operator of medical residences in Tunisia
              with a head office in Germany and whose management team of German
              nationality is present on sitethroughout the year. Our residences
              are places of life, support and care for people who can no longer
              live alone at home and need support for everyday gestures and
              medical assistance.
            </h1>
          </div>
          <div className=" h-full w-full   bg-[url('https://img.freepik.com/free-vector/colored-illustration-senior-woman-sitting-wheelchair-with-caregiver-isolated-white-background_1284-41426.jpg?w=740&t=st=1693679950~exp=1693680550~hmac=e15d1a497c5d7c9165f92a0f0d387d37496aaeaab6f5190979c63625b64e307b')] bg-no-repeat bg-contain bg-center "></div>

          {/* <div></div> */}
        </div>
        <div className="grid md:grid-cols-3 justify-center items-center gap-12  w-11/12 m-auto ">
          <img
            className="rounded md:w-[50rem] w-[25rem] "
            src={patient1}
            alt="image"
          />
          <img
            className="rounded md:w-[50rem] w-[25rem] "
            src={patient3}
            alt="image"
          />
          <img
            className="rounded md:w-[50rem] w-[25rem]"
            src={patient2}
            alt="image"
          />
        </div>
      </Element>
      <section className="lg:mt-0 mt-[70rem] lg:flex   w-11/12 lg:m-auto items-center justify-center gap-8 h-screen">
        <div className="back2"></div>
        <div className="flex flex-col gap-12 p-8 items-start">
          <span className="bg-blue-400 py-2 px-4 text-white rounded">
            Why Choose Us
          </span>
          <h1 className="text-5xl max-w-lg text-blue-950">
            Trusted & Experience Senior Care Provider
          </h1>
          <p className="max-w-lg bg-white rounded p-2 text-gray-600">
            Our senior care program is committed to enriching the lives of
            retirees by offering personalized support and companionship,
            empowering them to maintain their independence and enjoy a
            fulfilling retirement.
          </p>
          <div className="lg:flex gap-2 items-start pr-4 justify-start">
            <div className="w-[4rem]">
              <img src={check} alt="check" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <h1 className="font-semibold font-['Roboto'] text-blue-950 text-xl">
                Best Trusted Senior Care
              </h1>
              <p className="max-w-md text-gray-700 font-['Roboto'] text-sm">
                We're the best because we prioritize personalized, exceptional
                care.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[45%] ml-12 mt-12 rounded shadow-gray-700 shadow-xl">
          <img
            className="rounded"
            src="https://images.pexels.com/photos/5790716/pexels-photo-5790716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default About;
